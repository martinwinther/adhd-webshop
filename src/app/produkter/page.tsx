import { categories } from '../../lib/categories';
import Link from 'next/link';
import { Heading, Card } from '../../components/ui';

export const metadata = {
  title: 'Produkter | ADHD Webshop',
};

export default function ProdukterPage() {
  return (
    <div className="py-8">
      <Heading level={1} className="mb-6">Produkter</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/produkter/${cat.slug}`}>
            <Card header={cat.name} className="hover:shadow-lg transition-shadow cursor-pointer" />
          </Link>
        ))}
      </div>
    </div>
  );
} 