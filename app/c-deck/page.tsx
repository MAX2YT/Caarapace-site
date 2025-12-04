import AnimatedHero from "@/components/animated-hero";
import AlternatingFeatures from "@/components/ui/alternating-features";

export default function CDeckPage() {
    return (
        <div className="min-h-screen">
            {/* Animated Hero */}
            <AnimatedHero
                leftText="CDeck"
                rightText="ERP"
                centralImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop"
                bottomImages={[
                    { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop", alt: "Team collaboration", label: "Team Dashboard" },
                    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", alt: "Analytics", label: "Real-time Analytics" },
                    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", alt: "Business growth", label: "Growth Tracking" }
                ]}
                subtitle="A powerful CRM platform designed to streamline operations"
                darkMode={false}
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
