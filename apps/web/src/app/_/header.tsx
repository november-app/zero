import { ModeToggle } from "@/components/theme/toggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="bg-background shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Image src='/logo.svg' alt='novo logo' width={48} height={48}/>
                    </div>

                    {/* Sign In button (aligned to the right) */}
                    <div className="absolute right-0 flex items-center space-x-4">
                        <ModeToggle />
                        <Button variant='secondary'>
                            Sign in
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
