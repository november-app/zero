import React from 'react';
import { College, columns } from "@/app/dash/colleges/_/table-columns";
import { DataTable } from "@/app/dash/colleges/_/table";

async function getTableData(): Promise<College[]> {
    // TODO: Implement actual data retrieval

    return [
        {
            name: 'Harvard',
            status: 'in progress',
            deadline: new Date('January 1, 2025')
        }
    ]
}

async function CollegesPage() {
    const data = await getTableData()

    return (
        <div className='container mx-auto py-10'>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default CollegesPage;
