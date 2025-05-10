'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Logo_dark from '@/public/logo_dark.svg';
import Logo_light from '@/public/logo_light.svg';
import Image from 'next/image';

export function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';

  return (
    <footer className="mt-auto">
      <Separator className="bg-muted-foreground mt-6" />
      <div className="bg-card px-4 pb-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col items-center justify-between space-y-4 pt-4 ftl:flex-row ftl:space-y-0">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center">
            <Image className="ftl:inline hidden" src={currentTheme === 'dark' ? Logo_dark : Logo_light} alt="MB Logo" width={32} height={32} priority />
            <Link href="/" className="hover:text-primary px-4 text-sm md:pl-0 lg:pr-6 ftl:ml-6">
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
        </div>
      </div>
    </footer>
  );
}
