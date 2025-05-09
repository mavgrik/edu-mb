'use client';

import { Root as Hidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo_dark from '@/public/logo_dark.svg';
import Logo_light from '@/public/logo_light.svg';

//TODO: Titolo responsive

const navItems: { title: string; href: string; children?: { title: string; href: string; description: string }[] }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Analisi dei dati',
    href: '/analisi',
  },
  {
    title: 'Mappe',
    href: '',
    children: [
      {
        title: 'Mappa interattiva',
        href: '/mappe/interattiva',
        description: 'Visualizza la mappa interattiva sulla siccità in Pianura Padana',
      },
      {
        title: 'Time-lapse',
        href: '/mappe/timelapse',
        description: 'Visualizza il time-lapse sulla siccità in Pianura Padana',
      },
    ],
  },
  {
    title: 'Risorse e contatti',
    href: '',
    children: [
      {
        title: 'Risorse',
        href: '/risorse',
        description: 'Link utili e risorse per approfondire il tema della siccità',
      },
      {
        title: 'Contatti',
        href: '/contatti',
        description: 'Contattaci per maggiori informazioni o richieste',
      },
    ],
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
  const { theme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';

  return (
    <header>
      <div className="bg-card sticky flex items-center justify-between px-4 py-2 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <Link href="/" passHref className="flex items-center justify-center space-x-2">
          <Image src={currentTheme === 'dark' ? Logo_dark : Logo_light} alt="MB Logo" width={50} height={50} priority />
          <p className="font-title pr-6 pl-2 text-xl leading-8 font-bold">La siccità in Pianura Padana</p>
        </Link>
        <div className="hidden items-center justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <NavigationMenuTrigger className="mr-2">{item.title}</NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuLink href={item.href} className={`${navigationMenuTriggerStyle()} mr-2`}>
                      {item.title}
                    </NavigationMenuLink>
                  )}
                  {item.children && (
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {item.children.map((child) => (
                          <ListItem key={child.title} title={child.title} href={child.href}>
                            {child.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="lg:hidden">
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
                      {item.children ? (
                        <>
                          <AccordionTrigger className="font-title text-lg font-semibold">{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  className="text-muted-foreground hover:text-primary"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="font-title flex items-center justify-between py-4 text-lg font-semibold hover:underline"
                        >
                          {item.title}
                        </Link>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Separator className="bg-muted-foreground mb-4" />
    </header>
  );
}
