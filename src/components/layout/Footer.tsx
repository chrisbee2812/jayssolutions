'use client';
import * as React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const NextdoorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.12,6.34,9.3,13.23h3.82V17.66h3.6V6.34Z" />
      <path d="M22,10.29a.4.4,0,0,0-.4-.4H18.2V6.34a.4.4,0,0,0-.4-.4H14.17V2.39a.4.4,0,0,0-.4-.4H2.4a.4.4,0,0,0-.4.4V21.6a.4.4,0,0,0,.4.4H21.6a.4.4,0,0,0,.4-.4V10.69A.4.4,0,0,0,22,10.29ZM13.12,21.2H8.25V7.47L13,1.2h.77V5.94h3.63V9.89H13.12Z" />
    </svg>
  );

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
                &copy; {year} Jays Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <NextdoorIcon className="h-5 w-5" />
                    <span className="sr-only">Nextdoor</span>
                </Link>
            </div>
            <p className="text-sm text-muted-foreground">
                Your trusted moving partner.
            </p>
        </div>
      </div>
    </footer>
  );
}
