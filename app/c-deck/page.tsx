import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import AlternatingFeatures from "@/components/ui/alternating-features";

export default function CDeckPage() {
    return (
        <div className="min-h-screen">
            {/* Hero with Scroll Animation */}
            <HeroScrollAnimation
                title="CDeck ERP"
                tagline="Streamline your operations with a CRM that"
                highlightedText="just works."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
                imageAlt="Business analytics dashboard"
            />

            <div className="container mx-auto px-6 py-16">
                {/* Alternating Features Section */}
                <AlternatingFeatures />

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto p-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent mt-12">
                    <h2 className="text-3xl font-bold mb-4">Transform Your Customer Management</h2>
                    <p className="text-muted-foreground mb-8">
                        Join hundreds of businesses already using C-Deck to optimize their operations and boost productivity.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Get Started Today
                    </a>
                </div>
            </div>
        </div>
    )
}
