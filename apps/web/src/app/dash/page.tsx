import React from 'react';
import { authUser } from "@/lib/utils";
import { redirect } from "next/navigation";

async function DashboardPage() {
    const user = await authUser()
    if (!user) redirect('/auth/signin')

    return (
        <div>
            <h1 className='text-foreground'>Hello from the dashboard index page! Your name should be {user?.name}</h1>
        </div>
    );
}

export default DashboardPage;
