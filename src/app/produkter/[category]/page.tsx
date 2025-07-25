import { categories } from '../../../lib/categories';
import { Heading, Card } from '../../../components/ui';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category);
  return {
    title: category ? `${category.name} | ADHD Webshop` : 'Produkter | ADHD Webshop',
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) return notFound();
  return (
    <div className="py-8">
      <Heading level={1} className="mb-6">{category.name}</Heading>
      <Card>Her kommer produkterne for denne kategori.</Card>
    </div>
  );
} 