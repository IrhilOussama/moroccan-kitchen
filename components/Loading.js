'use client';
// src/components/Loading.js
import { useLanguage } from '../context/LanguageContext';

const Loading = () => {
  const { language } = useLanguage();

  const loadingText = {
    en: "Loading delicious Moroccan dishes...",
    fr: "Chargement des délicieux plats marocains...",
    ar: "جاري تحميل الأطباق المغربية اللذيذة..."
  };

  return (
    <div className="fixed inset-0 bg-amber-50 bg-opacity-90 flex flex-col items-center justify-center z-50">
      {/* Moroccan-inspired spinner */}
      <div className="relative w-20 h-20 mb-6">
        {/* Outer circle with Moroccan pattern */}
        <div className="absolute inset-0 border-4 border-t-moroccan-orange border-r-moroccan-red border-b-moroccan-green border-l-moroccan-blue rounded-full animate-spin"></div>
        
        {/* Inner decorative element */}
        <div className="absolute inset-4 border-2 border-moroccan-yellow rounded-full animate-spin animation-delay-150"></div>
      </div>
      
      {/* Loading text */}
      <p className="text-xl text-moroccan-dark font-serif">
        {loadingText[language]}
      </p>
      
      {/* Optional decorative elements */}
      <div className="mt-8 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="w-3 h-3 bg-moroccan-orange rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;