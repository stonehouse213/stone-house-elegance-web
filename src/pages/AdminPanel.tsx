import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Edit, Plus, LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useInventory, Stone } from "@/contexts/InventoryContext";
import { useConsultation } from "@/contexts/ConsultationContext";

const AdminPanel = () => {
  const { stones, addStone, removeStone, updateStone } = useInventory();
  const { requests } = useConsultation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingStone, setEditingStone] = useState<Stone | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Check authentication on mount
  useEffect(() => {
    const authenticated = sessionStorage.getItem("adminAuthenticated") === "true";
    if (!authenticated) {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    navigate("/admin-login");
  };

  const handleAddStone = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newStone: Omit<Stone, 'id'> = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      origin: formData.get('origin') as string,
      price: formData.get('price') as string,
      image: formData.get('image') as string,
      description: formData.get('description') as string,
      features: (formData.get('features') as string).split(',').map(f => f.trim()).filter(f => f),
      finish: formData.get('finish') as string,
      thickness: formData.get('thickness') as string,
      grade: formData.get('grade') as string,
      initialOrderQty: parseInt(formData.get('initialOrderQty') as string, 10),
      availableQty: parseInt(formData.get('availableQty') as string, 10),
    };

    addStone(newStone);
    setIsAddDialogOpen(false);
    setSuccessMessage("Stone added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    (e.target as HTMLFormElement).reset();
  };

  const handleUpdateStone = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingStone) return;

    const formData = new FormData(e.currentTarget);
    
    const updatedStone: Partial<Stone> = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      origin: formData.get('origin') as string,
      price: formData.get('price') as string,
      image: formData.get('image') as string,
      description: formData.get('description') as string,
      features: (formData.get('features') as string).split(',').map(f => f.trim()).filter(f => f),
      finish: formData.get('finish') as string,
      thickness: formData.get('thickness') as string,
      grade: formData.get('grade') as string,
      initialOrderQty: parseInt(formData.get('initialOrderQty') as string, 10),
      availableQty: parseInt(formData.get('availableQty') as string, 10),
    };

    updateStone(editingStone.id, updatedStone);
    setEditingStone(null);
    setSuccessMessage("Stone updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteStone = (id: number) => {
    if (window.confirm("Are you sure you want to delete this stone?")) {
      removeStone(id);
      setSuccessMessage("Stone deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          <h1 className="text-heading text-foreground mb-4">Admin Panel</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Manage your stone inventory. Add, edit, or remove items from your collection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Consultation Requests Section */}
        {requests.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Consultation Requests</h2>
            <div className="grid gap-4">
              {requests.map(req => (
                <div key={req.id} className="border rounded-lg p-4 bg-muted">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <div className="font-semibold text-lg">{req.name}</div>
                    <div className="text-xs text-muted-foreground">{new Date(req.timestamp).toLocaleString()}</div>
                  </div>
                  <div className="text-sm mb-1"><span className="font-medium">Email:</span> {req.email}</div>
                  {req.phone && <div className="text-sm mb-1"><span className="font-medium">Phone:</span> {req.phone}</div>}
                  <div className="text-sm mb-1"><span className="font-medium">Message:</span> {req.message}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Success Message */}
        {successMessage && (
          <Alert className="mb-6">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        {/* Add New Stone Button */}
        <div className="mb-8">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Stone
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Stone</DialogTitle>
                <DialogDescription>
                  Fill in the details for the new stone item.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddStone} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input name="name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Granite">Granite</SelectItem>
                        <SelectItem value="Marble">Marble</SelectItem>
                        <SelectItem value="Quartzite">Quartzite</SelectItem>
                        <SelectItem value="Exotic Stones">Exotic Stones</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Origin</label>
                    <Input name="origin" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price Level</label>
                    <Select name="price" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select price level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$$">Premium</SelectItem>
                        <SelectItem value="$$$">Luxury</SelectItem>
                        <SelectItem value="$$$$">Ultra-Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Image URL</label>
                  <Input name="image" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea name="description" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Features (comma-separated)</label>
                  <Input name="features" placeholder="Heat Resistant, Scratch Resistant, Low Maintenance" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Finish</label>
                    <Input name="finish" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Thickness</label>
                    <Input name="thickness" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Grade</label>
                    <Select name="grade" required defaultValue="A">
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Initial Order Qty (sqft)</label>
                    <Input name="initialOrderQty" type="number" min="0" required defaultValue={1500} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Available Qty (sqft)</label>
                    <Input name="availableQty" type="number" min="0" required defaultValue={1500} />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Add Stone</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Inventory List */}
        <div className="grid gap-6">
          {stones.map((stone) => (
            <Card key={stone.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{stone.name}</CardTitle>
                    <CardDescription>{stone.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{stone.category}</Badge>
                    <Badge variant="secondary">{stone.price}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Origin: {stone.origin}</p>
                    <p className="text-sm text-muted-foreground">Finish: {stone.finish}</p>
                    <p className="text-sm text-muted-foreground">Thickness: {stone.thickness}</p>
                    <p className="text-sm text-muted-foreground">Grade: {stone.grade}</p>
                    <p className="text-sm text-muted-foreground">Initial Qty: {stone.initialOrderQty} sqft</p>
                    <p className="text-sm text-muted-foreground font-semibold">Available Qty: {stone.availableQty} sqft</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {stone.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setEditingStone(stone)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Stone</DialogTitle>
                        <DialogDescription>
                          Update the details for this stone item.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleUpdateStone} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Name</label>
                            <Input name="name" defaultValue={stone.name} required />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Category</label>
                            <Select name="category" defaultValue={stone.category} required>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Granite">Granite</SelectItem>
                                <SelectItem value="Marble">Marble</SelectItem>
                                <SelectItem value="Quartzite">Quartzite</SelectItem>
                                <SelectItem value="Exotic Stones">Exotic Stones</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Origin</label>
                            <Input name="origin" defaultValue={stone.origin} required />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Price Level</label>
                            <Select name="price" defaultValue={stone.price} required>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="$$">Premium</SelectItem>
                                <SelectItem value="$$$">Luxury</SelectItem>
                                <SelectItem value="$$$$">Ultra-Luxury</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Image URL</label>
                          <Input name="image" defaultValue={stone.image} required />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Textarea name="description" defaultValue={stone.description} required />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Features (comma-separated)</label>
                          <Input name="features" defaultValue={stone.features.join(', ')} required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Finish</label>
                            <Input name="finish" defaultValue={stone.finish} required />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Thickness</label>
                            <Input name="thickness" defaultValue={stone.thickness} required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Grade</label>
                            <Select name="grade" defaultValue={stone.grade} required>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Initial Order Qty (sqft)</label>
                            <Input name="initialOrderQty" type="number" min="0" defaultValue={stone.initialOrderQty} required />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Available Qty (sqft)</label>
                            <Input name="availableQty" type="number" min="0" defaultValue={stone.availableQty} required />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button type="button" variant="outline" onClick={() => setEditingStone(null)}>
                            Cancel
                          </Button>
                          <Button type="submit">Update Stone</Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteStone(stone.id)}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {stones.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">No stones in inventory</h3>
            <p className="text-muted-foreground mb-6">
              Add your first stone to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 