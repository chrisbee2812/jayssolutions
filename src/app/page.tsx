import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ImageCarousel from '@/components/sections/ImageCarousel';
import Reviews from '@/components/sections/Reviews';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ImageCarousel />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
