import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

function HeroSection() {
    return (
        <div className='bg-background relative isolate px-6 pt-14 lg:px-8 grow'>
            <div className='text-center mx-auto max-w-3xl py-32 '>
                <h1 className='text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                    Organize your college applications effortlessly
                </h1>
                <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                    Stay on top of deadlines, essays, and recommendations—all in one place.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <Link href='/dash'>
                        <Button variant='default'>
                            Sign in to get started
                        </Button>
                    </Link>
                    <Link href='/'>
                        <Button variant='secondary'>
                            Or click this second button
                        </Button>
                    </Link>
                </div>
            </div>
            {/*Lol this just looks like a stain*/}
            {/*<div*/}
            {/*    aria-hidden="true"*/}
            {/*    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"*/}
            {/*>*/}
            {/*    <div*/}
            {/*        style={{*/}
            {/*            clipPath:*/}
            {/*                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*        }}*/}
            {/*        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}

export default HeroSection;
