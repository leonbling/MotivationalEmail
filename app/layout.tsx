import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Daily Motivation - One Email, A Completely Different Day",
    description: "Get one powerful motivational sentence delivered to your inbox every day. $1/month, cancel anytime.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}