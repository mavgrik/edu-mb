import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

//TODO: Complete the page

export default function ContactsPage() {
  const developers = [
    {
      name: 'Matteo Benini',
      role: 'Lead Frontend Developer',
      description:
        'Specializes in creating responsive, accessible user interfaces with React and Next.js. Responsible for implementing design systems and ensuring consistent user experiences across platforms.',
      email: 'matteo.benini.scuola@gmail.com',
      github: 'https://github.com/matteohv',
      focus: 'Frontend',
      image: '/placeholder.svg',
    },
    {
      name: 'Marco Bassi',
      role: 'Senior Backend Engineer',
      description:
        'Expert in building scalable API architectures and database systems. Leads the development of microservices and ensures optimal performance and security across all backend systems.',
      email: 'dev@mavgrik.net',
      github: 'https://github.com/mavgrik',
      focus: 'Backend',
      image: '/placeholder.svg',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h1>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Meet the talented developers behind our technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
          {developers.map((developer) => (
            <Card key={developer.name} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={developer.image}
                  alt={developer.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{developer.name}</CardTitle>
                    <CardDescription className="text-base">{developer.role}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-primary/10">
                    {developer.focus}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{developer.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                  <Link href={`mailto:${developer.email}`}>
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                  <Link href={developer.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
