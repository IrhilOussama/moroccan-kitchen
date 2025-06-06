// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/pages/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moroccan Culinary Treasures',
  description: 'Discover authentic Moroccan recipes and cooking traditions',
  keywords: ['Moroccan food', 'tagine recipes', 'couscous', 'traditional dishes'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-64px)]">
            {children}
          </main>
          {/* <Footer /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}