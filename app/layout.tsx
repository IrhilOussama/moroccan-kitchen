// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moroccan Kitchen | المطبخ المغربي',
  description: 'Discover authentic Moroccan Kitchen recipes and cooking traditions. اكتشف وصفات المطبخ المغربي التقليدية وأسرار الطبخ المغربي الأصيل.',
  keywords: [
    'Moroccan Kitchen',
    'Moroccan food',
    'tagine recipes',
    'couscous',
    'traditional dishes',
    'المطبخ المغربي',
    'اكل مغربي',
    'وصفات مغربية',
    'طاجين',
    'كسكس'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="po68qYj20e7v7O_OwNOPiXqiLtLQHq0DBxUbGlpBScU" />
      </head>
      <body className={`${inter.className} bg-amber-50`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-64px)]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
