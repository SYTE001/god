import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novaa | Curated Product Finder',
  description: 'Discover products from short-form videos instantly with Novaa.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
