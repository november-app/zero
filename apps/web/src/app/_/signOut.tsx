import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
    return (
        <form action={async () => {
            "use server"
            await signOut({ redirectTo: '/'})
        }}>
            <Button variant='secondary'>
                Sign out
            </Button>
        </form>
    )
}
