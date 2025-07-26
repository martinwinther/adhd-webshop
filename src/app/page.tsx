import Link from 'next/link';
import { categories } from '../lib/categories';
import { Heading, Text, Card, Button } from '../components/ui';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                Dansk kvalitet siden 2024
              </div>
              
              <Heading level={1} className="text-5xl lg:text-7xl font-bold leading-tight">
                ADHD produkter der{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                  virker
                </span>
              </Heading>
              
              <Text size="xl" className="text-neutral-600 leading-relaxed max-w-lg">
                Udforsk vores kuraterede samling af ADHD produkter, nøje udvalgt for at støtte 
                fokus, organisering og hverdagslivet for mennesker med ADHD.
              </Text>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Udforsk produkter
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-neutral-300 hover:border-primary-300 hover:bg-primary-50">
                  Se vores historie
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">Gratis fragt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">30 dages retur</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {categories.slice(0, 4).map((cat, index) => (
                    <div key={cat.slug} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center group hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🧠</span>
                      </div>
                      <h3 className="font-semibold text-neutral-900 text-sm">{cat.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-400 to-accent rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Text size="sm" color="primary" weight="semibold" className="mb-4">UDVALGTE KATEGORIER</Text>
            <Heading level={2} className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Find det der virker for dig
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl mx-auto">
              Vores produkter er organiseret i kategorier der målrettet støtter forskellige 
              aspekter af ADHD og hjælper dig med at finde det der fungerer bedst.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.slug} href={`/produkter/${category.slug}`}>
                <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border-0 shadow-lg hover:-translate-y-2">
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <Heading level={3} className="text-xl font-bold text-neutral-900 mb-3">
                      {category.name}
                    </Heading>
                    <Text size="sm" color="muted" className="mb-6 leading-relaxed">
                      Produkter der hjælper med {category.name.toLowerCase()} og støtter din hverdag.
                    </Text>
                    <div className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Se produkter</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Text size="sm" color="primary" weight="semibold" className="mb-4">KUNDERNE SIGER</Text>
            <Heading level={2} className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Virkelig forskel
            </Heading>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Studerende",
                content: "Disse produkter har virkelig hjulpet mig med at fokusere på mine studier. Kan ikke anbefale dem nok!",
                rating: 5
              },
              {
                name: "Lars K.",
                role: "Software udvikler",
                content: "Endelig produkter der faktisk virker. Min produktivitet er steget markant siden jeg begyndte at bruge dem.",
                rating: 5
              },
              {
                name: "Emma T.",
                role: "Lærer",
                content: "Fantastisk kvalitet og hurtig levering. Disse produkter har gjort en stor forskel i min hverdag.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Text className="text-neutral-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </Text>
                  <div>
                    <Text weight="semibold" className="text-neutral-900">{testimonial.name}</Text>
                    <Text size="sm" color="muted">{testimonial.role}</Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heading level={2} className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Kom i gang i dag
          </Heading>
          <Text size="xl" className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Udforsk vores udvalg af ADHD produkter og find det der virker for dig. 
            Vi er her for at hjælpe dig med at nå dit potentiale.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 shadow-lg">
              Se alle produkter
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Kontakt os
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
