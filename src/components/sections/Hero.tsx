import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image 
          src={heroImage.imageUrl} 
          alt={heroImage.description}
          fill
          className="object-cover -z-10 brightness-[.4]"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-shadow-lg">
            Your Smooth Move Starts Here
          </h1>
          <p className="text-lg text-gray-200 md:text-xl text-shadow">
            Jays Solutions offers reliable and efficient home removal services. Trust us to make your next move your best move.
          </p>
          <div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
