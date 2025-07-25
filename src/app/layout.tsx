import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

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
      <body className="font-sans bg-neutral-50 text-neutral-900 min-h-screen flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
