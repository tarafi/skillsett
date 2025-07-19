import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BrainCircuit, Star, Users, Award } from "lucide-react";

const offerings = [
  {
    icon: BrainCircuit,
    title: "Practical Learning",
    description: "Our programs emphasize hands-on application to bridge the gap between theory and the real world."
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from and be guided by experienced industry professionals and senior academics."
  },
  {
    icon: Award,
    title: "Future-Ready Skills",
    description: "We focus on emerging tools and technologies to ensure you're prepared for tomorrow's challenges."
  },
];

const testimonials = [
  {
    name: "Rohan Gupta",
    role: "Recent Graduate",
    quote: "The Data Analysis workshop was a game-changer for my job search. I felt so much more confident in my technical interviews.",
  },
  {
    name: "Priya Singh",
    role: "Early Professional",
    quote: "The one-on-one mentoring helped me chart a clear path for my career. My mentor's advice was invaluable.",
  },
  {
    name: "Amit Patel",
    role: "PhD Student",
    quote: "SkillHub's course on AI tools for research saved me hundreds of hours. It's a must for any academic.",
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", alt: "Students collaborating in a workshop", hint: "students collaborating" },
  { src: "https://placehold.co/600x400", alt: "An online mentoring session in progress", hint: "online meeting" },
  { src: "https://placehold.co/600x400", alt: "A student presenting their project", hint: "student presentation" },
  { src: "https://placehold.co/600x400", alt: "A group of professionals at a networking event", hint: "professional networking" },
];

export default function WhyLearnWithUsPage() {
  return (
    <div>
      <section className="bg-card py-20 sm:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
            Learn, Grow, and Succeed with Us
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are committed to providing a learning environment that is practical, supportive, and focused on your future success.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              The SkillHub Advantage
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {offerings.map((offering) => (
              <Card key={offering.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-fit rounded-full bg-primary/10 p-4 text-primary">
                    <offering.icon className="h-10 w-10" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">{offering.title}</h3>
                  <p className="mt-2 text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Success Stories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Hear what our learners have to say about their experience with SkillHub.
            </p>
          </div>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5"/>)}
                          </div>
                          <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                          <p className="mt-4 font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Our Community in Action
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  data-ai-hint={image.hint}
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
