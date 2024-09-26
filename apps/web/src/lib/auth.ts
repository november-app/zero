import NextAuth, { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
// import Resend from 'next-auth/providers/resend'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const config: NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
