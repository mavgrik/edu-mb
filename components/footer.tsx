'use client';

import { SiFacebook, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator className="mt-6" />
      <div className="bg-extra px-4 pb-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col items-center justify-between space-y-4 pt-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center">
            <Link href="/" className="hover:text-primary px-4 text-sm md:pl-0 lg:pr-6">
              Home
            </Link>
            <Link href="/societa" className="hover:text-primary px-4 text-sm lg:px-6">
              Chi siamo
            </Link>
            <Link href="/arco" className="hover:text-primary px-4 text-sm lg:px-6">
              Il tiro con l&apos;arco
            </Link>
            <Link href="/societa/team" className="hover:text-primary px-4 text-sm lg:px-6">
              Il team
            </Link>
            <Link href="/corsi" className="hover:text-primary px-4 text-sm lg:px-6">
              I corsi
            </Link>
            <Link href="/arco/faq" className="hover:text-primary px-4 text-sm lg:px-6">
              FAQ
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/arcieriscaligeri/"
              target="_blank"
              className="text-foreground hover:text-primary"
            >
              <SiInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/arcieriscaligeri/"
              target="_blank"
              className="text-foreground hover:text-primary"
            >
              <SiFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://wa.me/message/KNADFQI65ROBI1"
              target="_blank"
              className="text-foreground hover:text-primary"
            >
              <SiWhatsapp className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link href="tel:+393792004174" className="text-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Telefono</span>
            </Link>
            <Link href="mailto:arcieriscaligeri@gmail.com" className="text-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pt-2 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-center md:text-left">
            <p className="text-xs">
              ©{new Date().getFullYear()} mavgrik. Tutti i diritti riservati.
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
