import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ADHD Webshop',
  description: 'Dansk webshop for ADHD produkter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="font-sans bg-neutral-50 text-neutral-900 min-h-screen">{children}</body>
    </html>
  );
}
