'use client'

import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTableColumnHeader } from "@/app/dash/colleges/_/table-column-header";

export type College = {
    name: string
    status: 'started' | 'completed' | 'in progress'
    deadline: Date
}

export const columns: ColumnDef<College>[] = [
    {
        accessorKey: 'name',
        header: ({column}) => (
            <DataTableColumnHeader column={column} title={'Name'} />
        )
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'deadline',
        header: 'Deadline',
        cell: ({row}) => {
            return <div className=''>{(row.getValue('deadline') as Date).toDateString().slice(3)}</div>
        }
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const entry = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0 float-right'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4'/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={(() => navigator.clipboard.writeText(entry.name))}>
                            Copy name (Testing)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <Link href='/dash/essays'>
                            <DropdownMenuItem>
                                Open supplementals
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>Open recommendations</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
