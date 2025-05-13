import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Bonobo1 from '@/public/images/bonobo_1.jpeg';
import Bonobo2 from '@/public/images/bonobo_2.jpeg';

//TODO: Caricare le immagini

export default function ContactsPage() {
  const developers = [
    {
      name: 'Matteo Benini',
      role: 'Frontend Developer',
      description:
        "Specializzato nella creazione di interfacce utente reattive e accessibili. Responsabile dell'implementazione di sistemi di design e della garanzia di esperienze utente coerenti su tutte le piattaforme.",
      email: 'matteo.benini.scuola@gmail.com',
      github: 'https://github.com/matteohv',
      focus: 'Frontend',
      image: Bonobo1,
    },
    {
      name: 'Marco Bassi',
      role: 'Backend Engineer',
      description:
        "Specializzato nella gestione di pipeline CI/CD e nell'ottimizzazione delle performance backend. Responsabile dell'integrazione di API e dell'implementazione di soluzioni tecnologiche scalabili avanzate.",
      email: 'dev@mavgrik.net',
      github: 'https://github.com/mavgrik',
      focus: 'Backend',
      image: Bonobo2,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start space-y-6">
      <h1 className="text-3xl">Il Team</h1>
      <div className="flex w-full flex-col items-stretch justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className="bg-muted flex flex-col items-center justify-between space-y-2 rounded-lg border p-6"
          >
            <div className="flex w-full max-w-full items-center justify-center sm:max-w-3/4 md:max-w-full lg:max-w-5/6">
              <AspectRatio ratio={1 / 1} className="overflow-hidden rounded-lg border">
                <Image
                  src={developer.image}
                  alt={developer.name}
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
              </AspectRatio>
            </div>
            <div className="mt-2 flex w-full flex-row items-center justify-between">
              <div>
                <h3 className="text-xl">{developer.name}</h3>
                <p className="text-base">{developer.role}</p>
              </div>
              <Badge variant="outline" className="bg-primary/10">
                {developer.focus}
              </Badge>
            </div>
            <p className="text-muted-foreground">{developer.description}</p>
            <div className="flex w-full flex-row items-center justify-between space-x-4">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`mailto:${developer.email}`}>
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href={developer.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
