import { ArrowRight, BrainCircuit, Users, BookOpen, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const workshops = [
  {
    title: 'Data Analysis with Python',
    description: 'A hands-on workshop covering the fundamentals of data analysis using Python, Pandas, and Matplotlib.',
    instructor: 'Dr. Anya Sharma',
    image: 'https://placehold.co/600x400.png',
    hint: 'data analysis',
    tags: ['Python', 'Data Science', 'Beginner'],
  },
  {
    title: 'AI for Academic Research',
    description: 'Explore how to leverage AI tools to accelerate your research process, from literature review to data analysis.',
    instructor: 'Prof. Ben Carter',
    image: 'https://placehold.co/600x400.png',
    hint: 'academic research',
    tags: ['AI', 'Research', 'Productivity'],
  },
  {
    title: 'UX/UI Design Fundamentals',
    description: 'Learn the core principles of user experience and user interface design to create intuitive digital products.',
    instructor: 'Chloe Davis',
    image: 'https://placehold.co/600x400.png',
    hint: 'ui design',
    tags: ['Design', 'UX/UI', 'Creative'],
  },
];

const mentoringPrograms = [
  {
    title: 'Early Professional Mentoring',
    description: 'Personalized guidance for navigating the first few years of your career, setting goals, and building professional networks.',
    mentor: 'Industry Veterans',
    icon: UserCheck,
    image: 'https://placehold.co/600x400.png',
    hint: 'professional mentoring',
  },
  {
    title: 'Academic Productivity Mentoring',
    description: 'One-on-one support to enhance your research skills, writing, and time management for academic success.',
    mentor: 'Senior Academics',
    icon: BrainCircuit,
    image: 'https://placehold.co/600x400.png',
    hint: 'academic coaching',
  },
];

const onlineCourses = [
  {
    title: 'Advanced Research Methods',
    description: 'A comprehensive online course on advanced quantitative and qualitative research methodologies.',
    image: 'https://placehold.co/600x400.png',
    hint: 'research methods',
    modules: 12,
  },
  {
    title: 'Machine Learning Foundations',
    description: 'Build a solid foundation in machine learning concepts, algorithms, and practical implementation.',
    image: 'https://placehold.co/600x400.png',
    hint: 'machine learning',
    modules: 15,
  },
  {
    title: 'Digital Productivity Toolkit',
    description: 'Master a suite of digital tools for enhanced productivity in your academic and professional life.',
    image: 'https://placehold.co/600x400.png',
    hint: 'digital tools',
    modules: 8,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 sm:py-24 lg:py-32">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
            Skill Up with Purpose and Confidence
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            skillsett.in is a learning and mentoring initiative dedicated to equipping students, graduates, and early professionals with future-ready skills.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/#workshops">
                Explore Offerings <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="workshops" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Short-Term Workshops
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Dive deep into specific skills with our hands-on, expert-led workshops.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop) => (
              <Card key={workshop.title} className="flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={workshop.hint}
                />
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                  <CardDescription>by {workshop.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{workshop.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {workshop.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mentoring" className="bg-card py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Personalized Mentoring
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Accelerate your growth with one-on-one guidance from experienced professionals and academics.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {mentoringPrograms.map((program) => (
              <Card key={program.title} className="flex flex-col md:flex-row items-center gap-6 p-6 transition-shadow hover:shadow-xl">
                 <div className="flex-shrink-0">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <program.icon className="h-10 w-10" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <CardTitle>{program.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{program.description}</p>
                  <p className="mt-3 text-sm font-semibold text-primary">Mentors: {program.mentor}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Hands-On Online Courses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Learn at your own pace with our comprehensive, practical online courses.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {onlineCourses.map((course) => (
              <Card key={course.title} className="flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={course.hint}
                />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.modules} Modules</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
