import Link from 'next/link';
import { ModeToggle } from "@/components/theme/toggle";

const Header = () => {
    return (
        <header className="w-full fixed top-0 left-0 bg-transparent z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Centered */}
                <div className="flex-1 flex justify-center">
                    <Link href="/">
                        <img
                            src="/logo.svg"  // Replace this with your logo path
                            alt="novo logo"
                            className="h-8"
                        />
                    </Link>
                </div>

                {/* Sign In Button Right */}
                <div className="flex-1 flex justify-end">
                    <Link href="/signin" className="text-black font-medium hover:text-indigo-600 transition">
                        Sign In →
                    </Link>
                </div>

                <ModeToggle />
            </div>
        </header>
    );
};

export default Header;
