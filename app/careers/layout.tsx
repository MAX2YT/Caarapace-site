import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Caarapace | Join Our Software Development Team",
    description: "Join Caarapace and build the future of software. We're hiring web developers, mobile developers, digital marketers, and more. Apply now for exciting opportunities in Chennai.",
    keywords: [
        "software developer jobs",
        "web developer careers",
        "Chennai IT jobs",
        "software company careers",
        "tech jobs India",
        "Caarapace careers"
    ],
    alternates: {
        canonical: "https://caarapace.com/careers",
    },
    openGraph: {
        title: "Careers at Caarapace | Join Our Team",
        description: "Build the future of software with us. Explore exciting career opportunities.",
        url: "https://caarapace.com/careers",
        type: "website",
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
