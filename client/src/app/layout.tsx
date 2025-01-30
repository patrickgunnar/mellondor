import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./_components/dashboard-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mellondor | Project Management App - Styled With Galadriel CSS",
    description:
        "Where Collaboration Blossoms in the Light of Wisdom | Styled With Galadriel CSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} @layout:app::body`}>
                <DashboardWrapper>{children}</DashboardWrapper>
            </body>
        </html>
    );
}
