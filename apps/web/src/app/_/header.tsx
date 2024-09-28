import { ModeToggle } from "@/components/theme/toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
    return (
        <header className="bg-background shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Logo height={48} width={48} />
                    </div>

                    {/* Sign In button (aligned to the right) */}
                    <div className="absolute right-0 flex items-center space-x-4">
                        <ModeToggle />

                        <Link href='/auth/signin'>
                            <Button variant='secondary'>
                                Sign in
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
