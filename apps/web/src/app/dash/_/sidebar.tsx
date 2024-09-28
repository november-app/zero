import React from 'react';
import SidebarLinks from "@/app/dash/_/sidebar-links";
import Logo from "@/components/logo";
import Image from 'next/image'
import SignOutButton from "@/app/_/signOut";

interface SidebarProps {
    userName: string;
    userAvatarURL: string;
}

function Sidebar(props: SidebarProps) {
    return (
        <aside className="w-64 min-h-screen flex flex-col justify-between border-r-2 border-border">
            <div className="flex flex-col space-y-4 p-6">
                <div className="flex justify-center">
                    <Logo width={64} height={64} />
                </div>

                <SidebarLinks />
            </div>

            <div className="p-6 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                    <Image
                        src={props.userAvatarURL}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{props.userName}</p>
                    </div>
                    <SignOutButton />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
