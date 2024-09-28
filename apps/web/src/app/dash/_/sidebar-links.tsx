'use client'

import { FileTextIcon, HomeIcon, ListIcon, MailsIcon } from "lucide-react";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links: { name: string, href: string, icon: typeof HomeIcon }[] = [
    {name: 'Home', href: '/dash', icon: HomeIcon},
    {name: 'List', href: '/dash/colleges', icon: ListIcon},
    {name: 'Essays', href: '/dash/essays', icon: FileTextIcon},
    {name: 'LoRs', href: '/dash/letters', icon: MailsIcon},
]

function SidebarLinks() {
    const pathname = usePathname()

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon

                return (
                    // TailwindCSS is so fun
                    <Link href={link.href} key={link.name}
                          className={cn(`flex h-[48px] grow items-center justify-center gap-2
                          rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3`,
                              (pathname === link.href) ? 'bg-primary text-primary-foreground' :
                                  'hover:bg-accent hover:text-accent-foreground')}>

                        <LinkIcon className='w-6'/>
                        <p className='hidden md:block'>{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}

export default SidebarLinks;
