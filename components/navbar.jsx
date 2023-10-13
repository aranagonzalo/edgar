"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";  
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Navbar = () => {

  const router = useRouter();

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top;
      const scrollY = window.scrollY;
      const targetY = elementTop + scrollY;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    } else {
      router.push('/');
    }
  }

  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/logo.svg" alt="Laptop logo" width={118} height={18} className="object-contain"/>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="gap-16">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Conoce más</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3" >
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="cursor-pointer flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        onClick={() => scrollToElement('form')}
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                        Conversemos
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Completa el formulario y ponte en contacto con nosotros.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem target="_blank" href="https://api.whatsapp.com/send/?phone=51987654321" title="Contáctanos">
                                    Escríbenos a nuestro número de whatsapp para más información.
                                </ListItem>
                                <ListItem className="cursor-pointer" title="Beneficios" onClick={() => scrollToElement('cards')}>
                                    Conoce los beneficios de adquirir nuestros servicios.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" target="_blank" href="https://api.whatsapp.com/send/?phone=51987654321">
                        <Phone className="mr-2" height={15} width={15}/>
                        (+51) 987 654 321
                      </a>                                                      
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="mailto:micorreo@empresa.com">
                        <Mail className="mr-2" height={15} width={15}/>
                        micorreo@empresa.com
                      </a>                                                      
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    </header>
  )
}

export default Navbar;