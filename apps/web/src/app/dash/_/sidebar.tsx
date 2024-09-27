import React from 'react';
import SignOutButton from "@/app/_/signOut";
import SidebarLinks from "@/app/dash/_/sidebar-links";

function Sidebar() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <SidebarLinks />

                <div className={`hidden h-auto w-full grow rounded-md md:block`}>
                </div>

                <SignOutButton/>
            </div>
        </div>
    );
}

export default Sidebar;
