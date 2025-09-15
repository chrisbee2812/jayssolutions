import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah L.",
    location: "New York, NY",
    quote: "Jays Solutions made our cross-country move a breeze. The team was professional, efficient, and handled all of our belongings with care. Highly recommend!",
    rating: 5,
    initials: "SL",
  },
  {
    name: "Michael B.",
    location: "Austin, TX",
    quote: "The best moving experience I've ever had. From packing to unloading, everything was seamless. The crew was friendly and incredibly hardworking.",
    rating: 5,
    initials: "MB",
  },
  {
    name: "Emily C.",
    location: "Chicago, IL",
    quote: "I was so stressed about moving, but Jays Solutions took care of everything. Their packing service is a lifesaver. Worth every penny for the peace of mind.",
    rating: 5,
    initials: "EC",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We pride ourselves on providing a five-star moving experience.
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
