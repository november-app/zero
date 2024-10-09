'use client'

import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    name: z.string(),
})

function AddCollegeForm() {
    const form = useForm<z.infer<typeof formSchema>()
}

export default AddCollegeForm;
