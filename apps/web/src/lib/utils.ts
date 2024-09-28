import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function authUser() {
    const sesh = await auth()

    if (!sesh || !sesh.user) return undefined

    return prisma.user.findUnique({
        where: { email: sesh?.user?.email as string }
    }) ?? undefined;
}
