import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ContactsPage() {
  const developers = [
    {
      name: 'Matteo Benini',
      role: 'Matteohv',
      description:
        "Specializzato nella creazione di interfacce utente reattive e accessibili. Responsabile dell'implementazione di sistemi di design e della garanzia di esperienze utente coerenti su tutte le piattaforme.",
      email: 'matteo.benini.scuola@gmail.com',
      github: 'https://github.com/matteohv',
      focus: 'Frontend Developer',
    },
    {
      name: 'Marco Bassi',
      role: '༺ɱαѵɠ૨เҡ༻',
      description:
        "Specializzato nella gestione di pipeline CI/CD e nell'ottimizzazione delle performance backend. Responsabile dell'integrazione di API e dell'implementazione di soluzioni tecnologiche scalabili avanzate.",
      email: 'dev@mavgrik.net',
      github: 'https://github.com/mavgrik',
      focus: 'Backend Engineer',
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
