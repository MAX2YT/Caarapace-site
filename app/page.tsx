import { BackgroundPaths } from "@/components/ui/background-paths";
import ModernIntroSection from "@/components/ui/a-modern-intro-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <BackgroundPaths title="Building the Future with Exceptional Software" />

            <ModernIntroSection />

            <FeaturesSection />

            <ContactForm />
        </div>
    );
}
