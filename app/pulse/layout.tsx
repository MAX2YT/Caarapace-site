import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pulse EMS - HR Management Software | Employee Management System",
    description: "Pulse EMS is a comprehensive HR management software for employee tracking, leave management, performance analytics, and workforce optimization. Streamline your HR operations today.",
    keywords: [
        "HR management software",
        "employee management system",
        "HRMS software",
        "leave management",
        "performance tracking",
        "workforce analytics",
        "HR software India"
    ],
    alternates: {
        canonical: "https://caarapace.com/pulse",
    },
    openGraph: {
        title: "Pulse EMS - HR Management Made Simple",
        description: "Comprehensive HR management software for modern businesses.",
        url: "https://caarapace.com/pulse",
        type: "website",
    },
};

export default function PulseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
