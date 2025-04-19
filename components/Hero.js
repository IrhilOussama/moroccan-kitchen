'use client';
// src/components/Hero.js
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();
  
  return (
    <section className="relative h-[32rem] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/tea.jpg"
        alt="Moroccan tea ceremony"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        aria-hidden="true"
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-moroccan-dark/95 via-moroccan-dark/80 to-moroccan-orange/60 opacity-20"></div>
      
      {/* More Visible Moroccan Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C15 6.716 21.716 0 30 0zm0 10c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z\' fill=\'%23F7DC6F\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px'
        }}
        aria-hidden="true"
      ></div>

      {/* Content with Stronger Shadows */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif tracking-tight [text-shadow:_0_4px_12px_rgba(0,0,0,1)]">
          {language === 'en' ? 'Moroccan Culinary Treasures' : 
           language === 'fr' ? 'Trésors Culinaires Marocains' : 
           'كنوز المطبخ المغربي'}
        </h1>
        
        <p className="text-lg md:text-xl text-amber-50 max-w-2xl leading-relaxed mb-8 [text-shadow:_0_2px_8px_rgba(0,0,0,1)] px-4 backdrop-blur-[1px]">
          {language === 'en' ? 'Discover the rich flavors and traditions of Morocco\'s most beloved dishes' : 
           language === 'fr' ? 'Découvrez les saveurs riches et les traditions des plats les plus appréciés du Maroc' : 
           'اكتشف النكهات الغنية وتقاليد أشهى الأطباق المغربية'}
        </p>
        
        {/* Enhanced Decorative Element */}
        <div className="w-24 h-1.5 bg-moroccan-yellow rounded-full shadow-[0_0_15px_5px_rgba(247,220,111,0.4)]"></div>
      </div>
    </section>
  );
}