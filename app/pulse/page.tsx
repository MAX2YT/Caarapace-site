import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import PulseAlternatingFeatures from "@/components/ui/pulse-alternating-features";

export default function PulsePage() {
    return (
        <div className="min-h-screen">
            {/* Hero with Scroll Animation */}
            <HeroScrollAnimation
                title="Pulse EMS"
                subtitle="Stay on top of business performance with real-time analytics"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                imageAlt="Analytics dashboard"
            />

            <div className="container mx-auto px-6 py-16">
                {/* Alternating Features Section */}
                <PulseAlternatingFeatures />

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                        <div className="text-muted-foreground">Uptime Guaranteed</div>
                    </div>
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-muted-foreground">Support Available</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto p-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Analytics?</h2>
                    <p className="text-muted-foreground mb-8">
                        Experience the power of data-driven decision making with Pulse Analytics.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Get Started Now
                    </a>
                </div>
            </div>
        </div>
    )
}
