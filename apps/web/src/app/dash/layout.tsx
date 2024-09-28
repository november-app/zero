import React from 'react';
import Sidebar from "@/app/dash/_/sidebar";
import { authUser } from "@/lib/utils";
import { redirect } from "next/navigation";

async function DashboardLayout({children}: { children: React.ReactNode }) {
    const user = await authUser()
    if (!user) redirect('/auth/signin')

    return (
        <div className='flex min-h-screen'>
            <Sidebar userName={user.name!} userAvatarURL={user.image!}/>

            <div className='flex-1 p-6 bg-background'>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
