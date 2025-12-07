import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services - Custom Software Development | Caarapace",
    description: "Professional software development services including web applications, mobile apps, custom software, and digital transformation. Partner with Caarapace for your next project.",
    keywords: [
        "software development services",
        "web application development",
        "mobile app development",
        "custom software",
        "digital transformation",
        "IT services Chennai"
    ],
    alternates: {
        canonical: "https://caarapace.com/services",
    },
    openGraph: {
        title: "Our Services - Caarapace Software Development",
        description: "Professional software development services tailored to your needs.",
        url: "https://caarapace.com/services",
        type: "website",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
