'use client'

import { ColumnDef } from "@tanstack/react-table";

export type College = {
    name: string
    status: 'started' | 'completed' | 'in progress'
    deadline: Date
}

export const columns: ColumnDef<College>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'deadline',
        header: 'Deadline',
        cell: ({ row }) => {
            return  <div className=''>{(row.getValue('deadline') as Date).toDateString().slice(3)}</div>
        }
    }
]
