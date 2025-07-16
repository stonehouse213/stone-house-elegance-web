import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Stone {
  id: number;
  name: string;
  category: string;
  origin: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  finish: string;
  thickness: string;
  grade: string;
  initialOrderQty: number;
  availableQty: number;
}

interface InventoryContextType {
  stones: Stone[];
  addStone: (stone: Omit<Stone, 'id'>) => void;
  removeStone: (id: number) => void;
  updateStone: (id: number, stone: Partial<Stone>) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};

interface InventoryProviderProps {
  children: ReactNode;
}

export const InventoryProvider: React.FC<InventoryProviderProps> = ({ children }) => {
  const [stones, setStones] = useState<Stone[]>([
    {
      id: 1,
      name: "Absolute Black",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Absolute Black granite with Polish or Leather finish.",
      features: ["Durable", "Elegant", "Low Maintenance"],
      finish: "Polish / Leather",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 2,
      name: "Absolute Black",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Absolute Black granite with Polish or Honed finish.",
      features: ["Durable", "Elegant", "Low Maintenance"],
      finish: "Polish / Honed",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 3,
      name: "Steel Gray",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Steel Gray granite with dual finish.",
      features: ["Durable", "Modern Look"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 4,
      name: "Black Pearl",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Black Pearl granite with dual finish.",
      features: ["Unique Sheen", "Durable"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 5,
      name: "Colonial White",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Colonial White granite with Polish finish.",
      features: ["Bright Look", "Classic Choice"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 6,
      name: "Colonial Gold",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Colonial Gold granite with Polish finish.",
      features: ["Warm Tones", "Elegant"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 7,
      name: "River White",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "River White granite with Polish finish.",
      features: ["Subtle Veining", "Brightens Spaces"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 8,
      name: "Thunder White",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Thunder White granite with Polish finish.",
      features: ["Striking Patterns", "Durable"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 9,
      name: "Tan Brown",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Tan Brown granite with dual finish.",
      features: ["Rich Color", "Durable"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 10,
      name: "Sapphire Blue",
      category: "Granite",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Sapphire Blue granite with dual finish.",
      features: ["Unique Blue Tones", "Premium Look"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 11,
      name: "Viscon White",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Viscon White granite with dual finish.",
      features: ["Modern Look", "Brightens Spaces"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 12,
      name: "Black Galaxy",
      category: "Granite",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Black Galaxy granite with Polish finish.",
      features: ["Galaxy Sparkle", "Premium Choice"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 13,
      name: "Black Forest",
      category: "Granite",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Black Forest granite with Polish finish.",
      features: ["Dramatic Veining", "Luxury Look"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 14,
      name: "Astoria",
      category: "Granite",
      origin: "India",
      price: "$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Astoria granite with Polish finish.",
      features: ["Warm Tones", "Classic Choice"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 15,
      name: "Fantasy Brown",
      category: "Marble",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Fantasy Brown marble with Polish finish.",
      features: ["Exotic Patterns", "Luxury Appeal"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 3000,
      availableQty: 3000
    },
    {
      id: 16,
      name: "Fantasy Brown",
      category: "Marble",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Fantasy Brown marble with Polish or Leather finish.",
      features: ["Exotic Patterns", "Luxury Appeal"],
      finish: "Polish / Leather",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 3000,
      availableQty: 3000
    },
    {
      id: 17,
      name: "Blue Dunes",
      category: "Granite",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Blue Dunes granite with dual finish.",
      features: ["Unique Blue Tones", "Modern Look"],
      finish: "Dual",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    },
    {
      id: 18,
      name: "Blue Flower",
      category: "Granite",
      origin: "India",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Blue Flower granite with Polish finish.",
      features: ["Striking Blue Veins", "Luxury Appeal"],
      finish: "Polish",
      thickness: "3cm",
      grade: "A",
      initialOrderQty: 1500,
      availableQty: 1500
    }
  ]);

  const addStone = (stone: Omit<Stone, 'id'>) => {
    const newId = Math.max(...stones.map(s => s.id), 0) + 1;
    setStones(prev => [...prev, { ...stone, id: newId, availableQty: stone.availableQty ?? stone.initialOrderQty }]);
  };

  const removeStone = (id: number) => {
    setStones(prev => prev.filter(stone => stone.id !== id));
  };

  const updateStone = (id: number, updatedStone: Partial<Stone>) => {
    setStones(prev => prev.map(stone => 
      stone.id === id ? { ...stone, ...updatedStone } : stone
    ));
  };

  return (
    <InventoryContext.Provider value={{ stones, addStone, removeStone, updateStone }}>
      {children}
    </InventoryContext.Provider>
  );
}; 