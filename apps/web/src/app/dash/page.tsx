import React from 'react';
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function DashboardPage() {
    const sesh = await auth()

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const userEmail = sesh?.user?.email!
    const user = await prisma.user.findUnique({
        where: {email: userEmail}
    })


    return (
        <div>
            <h1 className='text-secondary'>Hello from the dashboard index page! Your name should be {user?.name}</h1>
        </div>
    );
}

export default DashboardPage;
