import Link from 'next/link';
import Image from 'next/image';
import { Truck, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-headerbackground">
      <div className="container flex h-16 md:h-32 items-center md:space-x-8">
        <Link href="/" className="mr-6 flex items-center space-x-2 md:space-x-4">
          <Image
              src="/jslogo.png"
              alt="Jay's solutions removals truck"
              priority
              width={160}
              height={160}
              className="object-cover hidden md:block"
              data-ai-hint="Jay's solutions removals truck"
          />
          <Image
              src="/jslogo.png"
              alt="Jay's solutions removals truck"
              priority
              width={120}
              height={120}
              className="object-cover md:hidden"
              data-ai-hint="Jay's solutions removals truck"
          />
          <span className="font-bold text-2xl md:text-4xl">Jay's Solutions</span>
        </Link>
        <nav className="hidden items-center space-x-12 text-3xl font-medium md:flex">
          {navLinks.map(link => (
             <Link 
                key={link.href}
                href={link.href} 
                className="transition-colors hover:text-foreground text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Image
                      src="/jslogo.png"
                      alt="Jay's solutions removals truck"
                      priority
                      width={120}
                      height={120}
                      sizes="(min-width: 768px) 160px, 160px (max-width: 767px) 120px, 120px"
                      className="object-cover"
                      data-ai-hint="Jay's solutions removals truck"
                  />
                  <span>Jays Solutions</span>
                </Link>
                {navLinks.map(link => (
                    <Link 
                        key={link.href}
                        href={link.href} 
                        className="transition-colors hover:text-foreground text-muted-foreground"
                    >
                    {link.label}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
