// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes or on scroll
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: {
      home: "Home",
      dishes: "Dishes",
      about: "About",
      contact: "Contact"
    },
    fr: {
      home: "Accueil",
      dishes: "Plats",
      about: "À propos",
      contact: "Contact"
    },
    ar: {
      home: "الرئيسية",
      dishes: "الأطباق",
      about: "معلومات",
      contact: "اتصل بنا"
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'foreground/95 backdrop-blur-sm shadow-xl' : 'bg-foreground'}`}>
    <div className="bg-moroccan-blue text-foreground">
    </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}

          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-moroccan-orange rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-12">
              <span className="text-white font-bold md:text-xl">م</span>
            </div>
            <span className="text-xl md:text-2xl font-serif text-moroccan-yellow transition-colors hover:text-amber-200">
              {language === 'en' ? 'Moroccan Cuisine' : 
               language === 'fr' ? 'Cuisine Marocaine' : 
               'المطبخ المغربي'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(navItems[language]).map(([key, value]) => (
              <Link
                key={key}
                href={`/${key === 'home' ? '' : key}`}
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-moroccan-orange hover:bg-white/10 ${pathname === `/${key === 'home' ? '' : key}` ? 'text-moroccan-yellow font-medium' : 'text-white'}`}
              >
                {value}
              </Link>
            ))}
            <div className="ml-4 transition-opacity hover:opacity-80">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg focus:outline-none transition-all hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" color='white' viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-moroccan-dark/95 backdrop-blur-sm">
            {Object.entries(navItems[language]).map(([key, value]) => (
              <Link
                key={key}
                href={`/${key === 'home' ? '' : key}`}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${pathname === `/${key === 'home' ? '' : key}` ? 'bg-moroccan-orange/20 text-moroccan-yellow' : 'text-white hover:bg-white/10 hover:text-moroccan-orange'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {value}
              </Link>
            ))}
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;