import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
    return (
        <form action={async () => {
            "use server"
            await signOut()
        }}>
            <Button variant='secondary'>
                Sign in
            </Button>
        </form>
    )
}
