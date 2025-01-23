import React, { createContext, useContext, useState, useEffect } from 'react';

const AI_ASSISTANTS_KEY = 'ai_assistants';
const AIAssistantsContext = createContext();

export function useAIAssistants() {
  const context = useContext(AIAssistantsContext);
  if (!context) {
    throw new Error('useAIAssistants must be used within an AIAssistantsProvider');
  }
  return context;
}

export function AIAssistantsProvider({ children }) {
  const [assistants, setAssistants] = useState(() => {
    const saved = localStorage.getItem(AI_ASSISTANTS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const addAssistant = (assistant) => {
    const newAssistant = {
      ...assistant,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      status: assistant.isActive ? 'Active' : 'Inactive'
    };
    setAssistants(prev => [...prev, newAssistant]);
  };

  const updateAssistant = (id, updates) => {
    setAssistants(prev => prev.map(assistant => 
      assistant.id === id ? { ...assistant, ...updates } : assistant
    ));
  };

  const deleteAssistant = (id) => {
    setAssistants(prev => prev.filter(assistant => assistant.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(AI_ASSISTANTS_KEY, JSON.stringify(assistants));
  }, [assistants]);

  return (
    <AIAssistantsContext.Provider value={{ assistants, addAssistant, updateAssistant, deleteAssistant }}>
      {children}
    </AIAssistantsContext.Provider>
  );
}
