import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Stress-Free Moving & Removal Services in Hayling Island | Jay's",
  description: "Jay's Solutions Removals offers professional, reliable, and affordable house moving services in Hayling Island. Get a free quote today for a stress-free move!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta charSet='UTF-8' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.jayssolutionsremovalservices.co.uk/" />
        <meta property="og:title" content="Jay's Solutions Removal Srvices | Professional Moving Services in Hayling Island"></meta>
        <meta property="og:description" content="Stress-free moving and removal services in Hayling Island. Get your free quote today!"></meta>
        <meta property="og:image" content="https://jayssolutionsremovalservices.co.uk/jslogolg.jpg"></meta>
        <meta property="og:url" content="https://www.jayssolutionsremovalservices.co.uk/"></meta>
        <meta property="og:type" content="website"></meta>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
