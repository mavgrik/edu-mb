'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import Logo_dark from '@/public/logo_dark.svg';
import Logo_light from '@/public/logo_light.svg';

export function Footer() {
  const { theme, resolvedTheme } = useTheme();

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <footer className="bg-card ftl:flex-row ftl:space-y-0 border-muted-foreground z-10 mt-auto flex flex-col items-center justify-between space-y-4 rounded-t-4xl border-t px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="text-muted-foreground flex flex-wrap items-center justify-center">
        <Image
          className="ftl:inline hidden py-2"
          src={currentTheme === 'dark' ? Logo_dark : Logo_light}
          alt="MB Logo"
          width={32}
          height={32}
          priority
        />
        <Link href="/" className="hover:text-primary ftl:ml-6 px-4 text-sm md:pl-0 lg:pr-6">
          Home
        </Link>
        <Link href="/analisi" className="hover:text-primary px-4 text-sm lg:px-6">
          Analisi dei dati
        </Link>
        <Link href="/mappe/interattiva" className="hover:text-primary px-4 text-sm lg:px-6">
          Mappa interattiva
        </Link>
        <Link href="/mappe/timelapse" className="hover:text-primary px-4 text-sm lg:px-6">
          Time-lapse
        </Link>
        <Link href="/contatti" className="hover:text-primary px-4 text-sm lg:px-6">
          Contatti
        </Link>
        <Link href="/risorse" className="hover:text-primary px-4 text-sm lg:px-6">
          Risorse
        </Link>
      </div>
      <ThemeToggle />
    </footer>
  );
}
