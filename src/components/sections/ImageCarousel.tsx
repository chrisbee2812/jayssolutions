'use client';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay"

export default function ImageCarousel() {
  const carouselImages = PlaceHolderImages.filter(p => p.id.startsWith('carousel-'));
  return (
    <section id="carousel" className="w-full pb-8 pt-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Happy Moves</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We take pride in providing a professional and reliable moving service.
            </p>
        </div>
        <Carousel 
            className="w-full max-w-4xl mx-auto" 
            opts={{ loop: true }}
            plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                }),
              ]}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden bg-background">
                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={1200}
                        height={800}
                        className="fixed object-cover opacity-80"
                        data-ai-hint={image.imageHint}
                      />
                      <p className="relative text-5xl font-bold text-shadow-white">{image.imageText}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
