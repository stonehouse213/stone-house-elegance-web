import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ConsultationRequest {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp: string;
}

interface ConsultationContextType {
  requests: ConsultationRequest[];
  addRequest: (req: Omit<ConsultationRequest, 'id' | 'timestamp'>) => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) throw new Error('useConsultation must be used within a ConsultationProvider');
  return context;
};

export const ConsultationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);

  const addRequest = (req: Omit<ConsultationRequest, 'id' | 'timestamp'>) => {
    setRequests(prev => [
      {
        ...req,
        id: prev.length ? prev[0].id + 1 : 1,
        timestamp: new Date().toISOString(),
      },
      ...prev
    ]);
  };

  return (
    <ConsultationContext.Provider value={{ requests, addRequest }}>
      {children}
    </ConsultationContext.Provider>
  );
}; 