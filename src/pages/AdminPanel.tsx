import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Edit, Trash2, LogOut } from "lucide-react";
import { useInventory } from "@/contexts/InventoryContext";
import { useConsultation } from "@/contexts/ConsultationContext";
import { Stone } from "@/contexts/InventoryContext";

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
    
    const updatedStone: Stone = {
      ...editingStone,
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

    updateStone(updatedStone.id, updatedStone);
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
        <div className="max-w-7xl mx-auto container-padding py-6 lg:py-8">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
            <Button variant="outline" onClick={handleLogout} className="h-10 sm:h-11">
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
          
          <h1 className="text-responsive-heading text-foreground mb-3 lg:mb-4">Admin Panel</h1>
          <p className="text-responsive-subheading text-muted-foreground max-w-3xl">
            Manage your stone inventory. Add, edit, or remove items from your collection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container-padding py-8 lg:py-12">
        {/* Consultation Requests Section */}
        {requests.length > 0 && (
          <div className="mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Consultation Requests</h2>
            <div className="grid gap-4">
              {requests.map(req => (
                <div key={req.id} className="border rounded-lg p-4 bg-muted">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <div className="font-semibold text-base sm:text-lg">{req.name}</div>
                    <div className="text-xs text-muted-foreground">{new Date(req.timestamp).toLocaleString()}</div>
                  </div>
                  <div className="text-xs sm:text-sm mb-1"><span className="font-medium">Email:</span> {req.email}</div>
                  {req.phone && <div className="text-xs sm:text-sm mb-1"><span className="font-medium">Phone:</span> {req.phone}</div>}
                  <div className="text-xs sm:text-sm mb-1"><span className="font-medium">Message:</span> {req.message}</div>
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
        <div className="mb-6 lg:mb-8">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-10 sm:h-11">
                <Plus className="w-4 h-4 mr-2" />
                Add New Stone
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">Add New Stone</DialogTitle>
                <DialogDescription>
                  Fill in the details for the new stone item.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddStone} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input name="name" required className="h-10 sm:h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select name="category" required>
                      <SelectTrigger className="h-10 sm:h-11">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Origin</label>
                    <Input name="origin" required className="h-10 sm:h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price Level</label>
                    <Select name="price" required>
                      <SelectTrigger className="h-10 sm:h-11">
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
                  <Input name="image" required className="h-10 sm:h-11" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea name="description" required className="min-h-[80px]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Features (comma-separated)</label>
                  <Input name="features" placeholder="Heat Resistant, Scratch Resistant, Low Maintenance" required className="h-10 sm:h-11" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Finish</label>
                    <Input name="finish" required className="h-10 sm:h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Thickness</label>
                    <Input name="thickness" required className="h-10 sm:h-11" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Grade</label>
                    <Select name="grade" required defaultValue="A">
                      <SelectTrigger className="h-10 sm:h-11">
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
                    <Input name="initialOrderQty" type="number" min="0" required defaultValue={1500} className="h-10 sm:h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Available Qty (sqft)</label>
                    <Input name="availableQty" type="number" min="0" required defaultValue={1500} className="h-10 sm:h-11" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)} className="h-10 sm:h-11">
                    Cancel
                  </Button>
                  <Button type="submit" className="h-10 sm:h-11">Add Stone</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Inventory List */}
        <div className="grid gap-4 lg:gap-6">
          {stones.map((stone) => (
            <Card key={stone.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{stone.name}</CardTitle>
                    <CardDescription className="text-sm">{stone.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{stone.category}</Badge>
                    <Badge variant="secondary" className="text-xs">{stone.price}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">Origin: {stone.origin}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Finish: {stone.finish}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Thickness: {stone.thickness}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Grade: {stone.grade}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Initial Qty: {stone.initialOrderQty} sqft</p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Available Qty: {stone.availableQty} sqft</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {stone.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Dialog open={editingStone?.id === stone.id} onOpenChange={() => setEditingStone(null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setEditingStone(stone)}
                        className="h-9 sm:h-10 text-xs sm:text-sm"
                      >
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">Edit Stone</DialogTitle>
                        <DialogDescription>
                          Update the details for {stone.name}.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleUpdateStone} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Name</label>
                            <Input name="name" defaultValue={stone.name} required className="h-10 sm:h-11" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Category</label>
                            <Select name="category" required defaultValue={stone.category}>
                              <SelectTrigger className="h-10 sm:h-11">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Origin</label>
                            <Input name="origin" defaultValue={stone.origin} required className="h-10 sm:h-11" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Price Level</label>
                            <Select name="price" required defaultValue={stone.price}>
                              <SelectTrigger className="h-10 sm:h-11">
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
                          <Input name="image" defaultValue={stone.image} required className="h-10 sm:h-11" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Textarea name="description" defaultValue={stone.description} required className="min-h-[80px]" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Features (comma-separated)</label>
                          <Input name="features" defaultValue={stone.features.join(', ')} required className="h-10 sm:h-11" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Finish</label>
                            <Input name="finish" defaultValue={stone.finish} required className="h-10 sm:h-11" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Thickness</label>
                            <Input name="thickness" defaultValue={stone.thickness} required className="h-10 sm:h-11" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Grade</label>
                            <Select name="grade" required defaultValue={stone.grade}>
                              <SelectTrigger className="h-10 sm:h-11">
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
                            <Input name="initialOrderQty" type="number" min="0" defaultValue={stone.initialOrderQty} required className="h-10 sm:h-11" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Available Qty (sqft)</label>
                            <Input name="availableQty" type="number" min="0" defaultValue={stone.availableQty} required className="h-10 sm:h-11" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2">
                          <Button type="button" variant="outline" onClick={() => setEditingStone(null)} className="h-10 sm:h-11">
                            Cancel
                          </Button>
                          <Button type="submit" className="h-10 sm:h-11">Update Stone</Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDeleteStone(stone.id)}
                    className="h-9 sm:h-10 text-xs sm:text-sm"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 