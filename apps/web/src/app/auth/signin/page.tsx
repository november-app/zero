import { Button } from '@/components/ui/button';
import Logo from "@/components/logo";
import { signIn } from "@/lib/auth"; // assuming you have shadcn-ui button component

export default function SignIn() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-background">
            <div className="max-w-md w-full bg-background p-8 rounded-lg shadow-lg">
                {/* Logo on Top */}
                <div className="flex justify-center mb-6">
                    <Logo width={80} height={80}/>
                </div>

                {/* Sign-In Form */}
                <h2 className="text-center text-2xl font-bold text-foreground mb-8">Sign in to your
                    account</h2>

                <form action={async () => {
                    "use server"
                    await signIn("google", {redirectTo: "/dash"})
                }}>
                    <Button
                        className="w-full bg-primary text-primary-foreground mb-6"
                    >
                        Sign in with Google
                    </Button>
                </form>

                <div className="text-center text-sm text-foreground">
                    <p>
                        By clicking continue, you agree to our{" "}
                        <a href="/terms" className="underline">Terms of Service</a> and{" "}
                        <a href="/privacy" className="underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
