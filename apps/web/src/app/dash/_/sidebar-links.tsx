'use client'

import { FileTextIcon, HomeIcon, ListIcon, MailsIcon } from "lucide-react";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// href array determines pathnames to highlight, [0] determines actual href
type TSidebarLinks = { name: string, href: string[], icon: typeof HomeIcon }[];

const links: TSidebarLinks = [
    {name: 'Home', href: ['/dash'], icon: HomeIcon},
    {name: 'List', href: ['/dash/colleges'], icon: ListIcon},
    {name: 'Essays', href: ['/dash/essays', '/dash/essays/personal'], icon: FileTextIcon},
    {name: 'LoRs', href: ['/dash/letters'], icon: MailsIcon},
]

function SidebarLinks() {
    const pathname = usePathname()

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon


                return (
                    // TailwindCSS is so fun
                    <Link href={link.href[0]} key={link.name}
                          className={cn(`flex h-[48px] grow items-center justify-center gap-2
                          rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3`,
                              (link.href.includes(pathname)) ? 'bg-primary text-primary-foreground' :
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
