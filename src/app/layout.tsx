'use client';

import '@/styles/globals.css';
import ClientProvider from '../components/ClientProvider';
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ClientProvider>
            {children}
        </ClientProvider>
        </body>
        </html>
    );
}
