import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import HoverFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Caarapace - Software Development Excellence",
    description: "Caarapace is a leading software development company delivering modern, scalable solutions for businesses. Specializing in web applications, mobile apps, and custom software development.",
    keywords: ["software development", "web development", "mobile apps", "custom software", "Caarapace", "technology solutions"],
    authors: [{ name: "Caarapace" }],
    creator: "Caarapace",
    publisher: "Caarapace",
    metadataBase: new URL('https://caarapace.com'),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://caarapace.com",
        title: "Caarapace - Software Development Excellence",
        description: "Leading software development company delivering modern, scalable solutions for businesses worldwide.",
        siteName: "Caarapace",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Caarapace Software Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Caarapace - Software Development Excellence",
        description: "Leading software development company delivering modern, scalable solutions for businesses.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${inter.variable} font-sans antialiased bg-white`}>
                <Navbar />
                {children}
                <HoverFooter />
            </body>
        </html>
    );
}
