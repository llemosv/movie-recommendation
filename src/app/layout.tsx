import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie AI',
  description: 'Movie recommender',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className="w-full h-screen bg-gradient-to-r from-highlights-purple to-highlights-pink inline-flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
