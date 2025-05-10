'use client';

import { SiFacebook, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';

//TODO: Change links / Items

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator className="bg-muted-foreground mt-6" />
      <div className="bg-card px-4 pb-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col items-center justify-between space-y-4 pt-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center">
            <Link href="/" className="hover:text-primary px-4 text-sm md:pl-0 lg:pr-6">
              Home
            </Link>
            <Link href="/analisi" className="hover:text-primary px-4 text-sm lg:px-6">
              Analisi dei dati 
            </Link>
            <Link href="/mappe/interrattiva" className="hover:text-primary px-4 text-sm lg:px-6">
              Mappa interattiva
            </Link>
            <Link href="/mappe/interrattiva" className="hover:text-primary px-4 text-sm lg:px-6">
              Time-lapse
            </Link>
            <Link href="/contatti" className="hover:text-primary px-4 text-sm lg:px-6">
              Contatti
            </Link>
            <Link href="/risorse" className="hover:text-primary px-4 text-sm lg:px-6">
              Risorse
            </Link>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pt-2 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-center md:text-left">
            <p className="text-xs">
              ©{new Date().getFullYear()} Marco Bassi e Matteo Benini. Tutti i diritti riservati.
              <br className="md:hidden" />
              <Link href="/policies" className="hover:text-primary text-xs md:ml-4">
                Politica sulla Privacy
              </Link>
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
