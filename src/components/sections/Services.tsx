import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package } from "lucide-react";

const services = [
  {
    icon: <Truck className="h-10 w-10 text-accent" aria-hidden="true" />,
    title: "Removals",
    description: "Efficient and safe moving services within the country. We handle your belongings with utmost care.",
  },
  {
    icon: <Package className="h-10 w-10 text-accent" aria-hidden="true" />,
    title: "Packing Services",
    description: "Save time and effort with our professional packing and unpacking services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full pb-8 pt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a packing service and a removals service to make your relocation seamless and stress-free.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center pb-4">
                {service.icon}
                <CardTitle className="pt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
