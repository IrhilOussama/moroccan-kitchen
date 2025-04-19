'use client';
// src/components/LoadingSpinner.js
import { useLanguage } from '../context/LanguageContext';

const LoadingSpinner = () => {
  const { language } = useLanguage();

  const loadingMessages = {
    en: "Preparing your Moroccan feast...",
    fr: "Préparation de votre festin marocain...",
    ar: "نحضر وليمتك المغربية..."
  };

  return (
    <div className="fixed inset-0 bg-amber-50/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      {/* Moroccan-inspired spinner */}
      <div className="relative w-24 h-24 mb-6">
        {/* Outer decorative pattern */}
        <div className="absolute inset-0 border-4 border-t-moroccan-orange border-r-moroccan-red border-b-moroccan-green border-l-moroccan-blue rounded-full animate-spin"></div>
        
        {/* Inner circle with Moroccan motif */}
        <div className="absolute inset-4 border-2 border-dotted border-moroccan-yellow rounded-full animate-spin animation-delay-200"></div>
        
        {/* Center point */}
        <div className="absolute inset-6 bg-moroccan-dark rounded-full"></div>
      </div>
      
      {/* Loading text with subtle animation */}
      <p className="text-xl text-moroccan-dark font-serif animate-pulse">
        {loadingMessages[language]}
      </p>
      
      {/* Decorative couscous grains animation */}
      <div className="mt-8 flex space-x-3">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 bg-moroccan-orange rounded-full animate-bounce"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;