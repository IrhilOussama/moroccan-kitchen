'use client';
// src/pages/DishDetail.js
import { useLanguage } from '../context/LanguageContext';

export default function DishDetail({ dish }) {
  const { language } = useLanguage();

  if (!dish) return <div>Dish not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src={dish.imageUrl || '/images/moroccan-food-placeholder.jpg'} 
            alt={dish.name[language]} 
            className="w-full rounded-lg shadow-xl object-cover h-96"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">{dish.name[language]}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
              {dish.origin[language]}
            </span>
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
              {dish.category}
            </span>
          </div>
          
          <p className="text-gray-700 mb-8 leading-relaxed">{dish.description[language]}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              {language === 'en' ? 'Ingredients' : 
               language === 'fr' ? 'Ingrédients' : 
               'المكونات'}
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {dish.ingredients[language].map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}