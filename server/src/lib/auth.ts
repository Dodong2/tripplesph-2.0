import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { admin } from "better-auth/plugins";
import prisma from "../db/prisma.js";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_I!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }
    },
    
    plugins: [
        admin({
            defaultRole: "user",
            adminRoles: ["admin", "super_admin"],
        })
    ],


    trustedOrigins: [process.env.CLIENT_URL!],
})