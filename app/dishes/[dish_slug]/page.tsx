// app/dish/[dish_slug]/page.tsx
import { notFound } from 'next/navigation';
import { getDishBySlug } from '@/services/dishService';
import DishDetail from '@/components/DishDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dish_slug: string }>
}) {
  const { dish_slug } = await params;
  const dish = await getDishBySlug(dish_slug);
  if (!dish) notFound();

  return {
    title: `${dish.name.en} | Moroccan Cuisine`,
    description: dish.description.en.substring(0, 160),
    openGraph: {
      title: dish.name.en,
      description: dish.description.en.substring(0, 160),
      images: [dish.imageUrl || '/images/moroccan-food-share.jpg'],
    },
  };
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ dish_slug: string }>
}) {
  const { dish_slug } = await params;
  const dish = await getDishBySlug(dish_slug);
  if (!dish) notFound();

  return <DishDetail dish={dish} />;
}