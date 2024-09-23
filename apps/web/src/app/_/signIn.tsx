import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
    return (
        <form action={async () => {
            "use server"
            await signIn("google", {redirectTo: "/dash"})
        }}>
            <Button variant='secondary'>
                Sign in
            </Button>
        </form>
    )
}
