import { BackgroundPaths } from "@/components/ui/background-paths";
import ModernIntroSection from "@/components/ui/a-modern-intro-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ContactForm } from "@/components/ui/contact-form";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <BackgroundPaths title="We Build Software That Actually Slaps" />

            <ModernIntroSection />

            <FeaturesSection />

            <PremiumTestimonials />

            <ContactForm />
        </div>
    );
}

