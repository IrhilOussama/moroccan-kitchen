'use client';
// src/components/LanguageSwitcher.js
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => setLanguage('en')} 
        className={`px-3 py-1 rounded-full text-sm ${language === 'en' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('fr')} 
        className={`px-3 py-1 rounded-full text-sm ${language === 'fr' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        FR
      </button>
      <button 
        onClick={() => setLanguage('ar')} 
        className={`px-3 py-1 rounded-full text-sm ${language === 'ar' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        AR
      </button>
    </div>
  );
}