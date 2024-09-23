import { PrismaClient } from '@prisma/client'

// Ensure single global instance of Prisma Client
const prismaGlobal = globalThis as unknown as { prisma: PrismaClient }
export const prisma = prismaGlobal.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') prismaGlobal.prisma = prisma
