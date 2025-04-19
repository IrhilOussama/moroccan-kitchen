'use client';
// src/context/LanguageContext.js
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext(null); // Initialize with null for better error handling

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  // Important: Memoize the value object to prevent unnecessary re-renders
  const value = {
    language,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Add error checking in the hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}