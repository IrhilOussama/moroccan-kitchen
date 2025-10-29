'use client';
// src/pages/Home.js
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import DishCard from '../components/DishCard';
import Hero from '../components/Hero';
import LoadingSpinner from '../components/LoadingSpinner';

export default function HomePage({ dishes }) {
  const { language } = useLanguage();
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...new Set(dishes.map(dish => dish.category))];

  useEffect(() => {
    if (dishes.length > 0) {
      setIsLoading(false);
      filterDishes();
    }
  }, [dishes, selectedCategory]);

  const filterDishes = () => {
    if (selectedCategory === 'All') {
      setFilteredDishes(dishes);
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === selectedCategory));
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="home-page">
      <Hero />
      
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-moroccan-orange text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} language={language} />
          ))}
        </div>

        {/* Empty State */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">
              {language === 'en' 
                ? 'No dishes found in this category' 
                : language === 'fr' 
                  ? 'Aucun plat trouvé dans cette catégorie' 
                  : 'لم يتم العثور على أطباق في هذه الفئة'}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}