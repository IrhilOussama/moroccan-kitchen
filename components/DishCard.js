'use client';
// src/components/DishCard.js
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function DishCard({ dish }) {
  
  console.log(dish);
  const { language } = useLanguage();
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <img 
        src={dish.imageUrl || '/images/moroccan-food-placeholder.jpg'} 
        alt={dish.name[language]} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 z-20 p-4 w-full">
        <h3 className="text-xl font-bold text-white mb-1">{dish.name[language]}</h3>
        <p className="text-amber-200 text-sm line-clamp-2">{dish.description[language].substring(0, 100)}...</p>
        <Link 
          href={`/dishes/${dish.slug}`}
          className="mt-2 inline-block text-amber-300 hover:text-amber-100 text-sm font-medium transition-colors"
        >
          {language === 'en' ? 'View Recipe' : 
           language === 'fr' ? 'Voir la recette' : 
           'عرض الوصفة'} →
        </Link>
      </div>
      
      <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
        {dish.category}
      </div>
    </div>
  );
}