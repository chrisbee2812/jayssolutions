import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "jarvo80",
    location: "",
    quote: "Highly recommend, our driver John and his partner Joe went above and beyondto help us with our move which allowed the process of moving to be much easier. Friendly, reliable and a very positive attitude!",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Cust68ab",
    location: "",
    quote: "Brilliant thank you",
    rating: 5,
    initials: "AB",
  },
  {
    name: "Pippacde",
    location: "",
    quote: "Both were absolutely amazing, lovely guys, careful with our stuff and communicative throughout the process.",
    rating: 5,
    initials: "PC",
  },
  {
    name: "Ilanakar",
    location: "",
    quote: "Great service, kept me informed all the way through, took great care of my belongings. Would highly recommend.",
    rating: 5,
    initials: "I",
  },
  {
    name: "Gkmgkm",
    location: "",
    quote: "John and Joe were fantastic. Definitely helped to reduce stress on the day.",
    rating: 5,
    initials: "G",
  },
  {
    name: "Cust68a9",
    location: "",
    quote: "John arrived at the time he said he was coming. Very helpful and careful at loading the van and the same at unloading the van.",
    rating: 5,
    initials: "",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We pride ourselves on providing a five-star moving experience. Many of these reviews can be found at{" "}
              <Link href="https://www.anyvan.com/" className="text-muted-foreground hover:text-foreground">
                 www.anyvan.com
              </Link> and{" "} 
              <Link href="https://nextdoor.co.uk/pages/jays-solutions-hayling-island-england/" className="text-muted-foreground hover:text-foreground">
                    Nextdoor
              </Link>.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="flex flex-col text-left hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarFallback>{review.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <blockquote className="text-muted-foreground italic mb-4">"{review.quote}"</blockquote>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
