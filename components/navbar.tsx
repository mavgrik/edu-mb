'use client';

import { Root as Hidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo_dark from '@/public/logo_dark.svg';
import Logo_light from '@/public/logo_light.svg';

const navItems: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Analisi dei dati',
    href: '/analisi',
  },
  {
    title: 'Time-lapse',
    href: '/timelapse',
  },
  {
    title: 'Risorse',
    href: '/risorse',
  },
  {
    title: 'Contatti',
    href: '/contatti',
  },
];

const ListItem = forwardRef<ComponentRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function Navbar() {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-card border-muted-foreground sticky z-10 mb-4 flex items-center justify-between rounded-b-4xl border-b px-4 py-2 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <Link href="/" className="flex items-center justify-center space-x-2">
        <Image
          src={mounted && resolvedTheme === 'dark' ? Logo_dark : Logo_light}
          alt="MB Logo"
          width={50}
          height={50}
          priority
        />
        <p className="font-title px-4 text-xl leading-8 font-bold">
          La siccità in <span />
          <br className="xs:hidden inline" />
          Pianura Padana
        </p>
      </Link>
      <div className="nvl:flex hidden items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink href={item.href} className={`${navigationMenuTriggerStyle()} mr-2`}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="nvl:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <Hidden>
              <SheetTitle>Menu</SheetTitle>
            </Hidden>
            <nav className="flex flex-col space-y-4">
              <Accordion type="single" collapsible className="w-full px-4">
                {navItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={item.title}>
                    <Link
                      href={item.href}
                      className="font-title flex items-center justify-between py-4 text-lg font-semibold hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </AccordionItem>
                ))}
              </Accordion>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
