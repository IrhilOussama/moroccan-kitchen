"use client";
// app/page.tsx
import HomePage from '@/components/Home';
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react';
import {getDishes} from '@/services/dishService';
import Navbar from '@/components/Navbar';

interface multiLanguage3StringFields {
  en: string,
  fr: string,
  ar: string
}
interface multiLanguage3ArrayStringFields {
  en: string[],
  fr: string[],
  ar: string[]
}
export interface Dish {
  name: multiLanguage3StringFields,
  description: multiLanguage3ArrayStringFields,
  ingredients: multiLanguage3StringFields,
  origin: multiLanguage3StringFields,
  category: string,
  imageUrl: string
}

export default function Home() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await getDishes();
        setDishes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDishes();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
    <main className="flex-grow">
      <Navbar />
      <HomePage dishes={dishes} />
    </main>
    </>
  );
}