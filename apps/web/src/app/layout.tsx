import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Provider } from "@/components/theme/provider";

export const metadata: Metadata = {
    title: "November",
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased`}
        >
        <Provider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </Provider>

        </body>

        </html>
    );
}
