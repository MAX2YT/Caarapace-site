import type { Metadata } from "next";
import { BackgroundPaths } from "@/components/ui/background-paths";
import ModernIntroSection from "@/components/ui/a-modern-intro-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ContactForm } from "@/components/ui/contact-form";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Caarapace - Custom Software Development Company | Web & Mobile Apps",
    description: "Caarapace is a leading software development company in Chennai, India. We build scalable web applications, mobile apps, and custom software solutions. Get a free consultation today!",
    keywords: [
        "software development company",
        "web development services",
        "mobile app development",
        "custom software solutions",
        "Chennai software company",
        "IT consulting",
        "enterprise software",
        "SaaS development",
        "Caarapace"
    ],
    alternates: {
        canonical: "https://caarapace.com",
    },
    openGraph: {
        title: "Caarapace - Custom Software Development Company",
        description: "We build software that actually works. Scalable, clean, and tailored to your needs.",
        url: "https://caarapace.com",
        type: "website",
    },
};

// JSON-LD Structured Data for Organization
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Caarapace",
    "url": "https://caarapace.com",
    "logo": "https://caarapace.com/logo.png",
    "description": "Leading software development company delivering modern, scalable solutions for businesses.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-86103-05690",
        "contactType": "sales",
        "email": "info@caarapace.com"
    },
    "sameAs": [
        "https://www.facebook.com/caarapace",
        "https://www.instagram.com/caarapace",
        "https://twitter.com/caarapace"
    ]
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Caarapace",
    "url": "https://caarapace.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://caarapace.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export default function Home() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            <div className="min-h-screen bg-white">
                <BackgroundPaths title="We Build Software That Actually Slaps" />

                <ModernIntroSection />

                <FeaturesSection />

                <PremiumTestimonials />

                <ContactForm />
            </div>
        </>
    );
}
