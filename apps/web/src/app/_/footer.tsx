import React from 'react';
import Link from "next/link";
import Github from "@/components/icon/github";

function Footer() {
    return (
        <footer className='bg-background py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
                <span className='text-sm text-foreground'>(c) November App 2024</span>
                <div className='flex space-x-6'>
                    <Link href='https://github.com/november-app/zero'>
                        <Github />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
