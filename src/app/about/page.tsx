import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alisha Rao",
    role: "Founder & Lead Mentor",
    bio: "With a PhD in Computer Science and over 15 years in academia and industry, Alisha is passionate about bridging the skills gap for the next generation.",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional woman",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vikram Chen",
    role: "Head of Curriculum",
    bio: "Vikram is a data science expert with a knack for creating engaging, practical learning experiences that stick.",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional man",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sunita Joshi",
    role: "Community Manager",
    bio: "Sunita fosters a supportive and collaborative learning community, ensuring every student feels welcome and empowered.",
    avatar: "https://placehold.co/100x100.png",
    hint: "friendly woman",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-card py-20 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
              Empowering Learners for a Future of Opportunity
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              We believe that education should be purposeful, practical, and accessible. Our mission is to provide the tools and guidance needed to thrive in an ever-evolving professional landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary font-headline">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To bridge the gap between formal education and real-world application by offering curated programs in data analysis, research, AI tools, and academic productivity.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary font-headline">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To empower a generation of students, graduates, and early professionals with the confidence and future-ready skills to navigate their careers with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The passionate individuals dedicated to your success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-accent-foreground font-semibold">{member.role}</p>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
