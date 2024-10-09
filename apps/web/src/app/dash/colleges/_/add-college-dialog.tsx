import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function AddCollegeDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Add college
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-lg'>
                <DialogHeader>
                    <DialogTitle>Add college</DialogTitle>
                    <DialogDescription>Enter college details to add it to your list.</DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='name' className='text-right'>
                            Name
                        </Label>
                        <Input className='col-span-3' id='name' defaultValue='Harvard University' />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='submit'>
                        Add
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCollegeDialog;
