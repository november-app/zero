import React from 'react';
import { College, columns } from "@/app/dash/colleges/_/table-columns";
import { DataTable } from "@/app/dash/colleges/_/table";
import { authUser } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import AddCollegeButton from "@/app/dash/colleges/_/add-college-button";

async function getTableData(): Promise<College[]> {
    // TODO: Implement actual data retrieval

    return [
        {
            name: 'Harvard',
            status: 'in progress',
            deadline: new Date('January 1, 2025')
        },
        {
            name: 'MIT',
            status: 'started',
            deadline: new Date('January 15, 2025')
        },
        {
            name: 'Stanford',
            status: 'in progress',
            deadline: new Date('January 1, 2025')
        },
        {
            name: 'Princeton',
            status: 'completed',
            deadline: new Date('November 1, 2025')
        },
        {
            name: 'Alphabet College',
            status: 'completed',
            deadline: new Date('November 15, 2025')
        },
    ]
}

async function CollegesPage() {
    const user = await authUser()
    if (!user) redirect('/auth/signin')

    const data = await getTableData()

    return (
        <>
            <h1 className='text-xl font-bold'>Welcome to your application organizer, {user.name}.</h1>
            <p className='py-3'>You are due for {data.length} applications.</p>

            <AddCollegeButton />

            <div className='container mx-auto py-6'>
                <DataTable columns={columns} data={data}/>
            </div>
        </>
    );
}

export default CollegesPage;
