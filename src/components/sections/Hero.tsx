import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center">
            <Image
                src="/van2.webp"
                alt="Jay's solutions removals truck"
                priority
                fill
                className="object-cover opacity-20"
                data-ai-hint="Jay's solutions removals truck"
            />
            <div className="relative z-10 container mx-auto px-4 text-center text-foreground">
                <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl bg-white/5 inline-block px-4 py-2 rounded-md text-shadow-white-2xl">
                    Your Smooth Move Starts Here
                </h1>
                <p className="mt-6 max-w-3xl font-bold mx-auto text-lg md:text-xl bg-white/10 inline-block px-4 py-2 rounded-md text-shadow-white-2xl">
                    Jays Solutions offers reliable and efficient home removal services. Trust us to make your next move your best move.
                </p>
                <div>
            <Button asChild size="lg" className="my-8 bg-accent font-bold tracking-wide text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
            </div>
        </section>
  );
}
