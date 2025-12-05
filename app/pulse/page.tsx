"use client";

import ProductHeroScrollAnimation from "@/components/ui/product-hero-scroll-animation";
import PulseAlternatingFeatures from "@/components/ui/pulse-alternating-features";
import CountUp from "@/components/ui/count-up";
import RollingCounter from "@/components/ui/rolling-counter";

export default function PulsePage() {
    return (
        <div className="min-h-screen">
            {/* Hero with Scroll Animation */}
            <ProductHeroScrollAnimation
                heroTitle="Pulse EMS"
                heroTagline="Real-time analytics that keep you"
                heroHighlightedText="ahead of the game."
                sectionLabel="PULSE EMS"
                headline="HR Management simplified with"
                highlightedText="real-time analytics"
                index=""
                description="Pulse EMS is built for modern event management teams. Track registrations, monitor attendance, and analyze event performance in real-time. Our platform empowers you to make data-driven decisions that maximize your event's impact."

                image="/pulse-hero-image.png"
                imageAlt="Pulse EMS Logo"
            />

            <div className="container mx-auto px-6 py-16">
                {/* Alternating Features Section */}
                <PulseAlternatingFeatures />

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {/* Uptime Guaranteed - CountUp animation */}
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2">
                            <CountUp
                                to={100}
                                from={0}
                                duration={1.5}
                                suffix="%"
                                className="text-primary"
                            />
                        </div>
                        <div className="text-muted-foreground">Uptime Guaranteed</div>
                    </div>

                    {/* Active Users - Rolling Counter */}
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                            <RollingCounter
                                value={500}
                                fontSize={36}
                                places={[100, 10, 1]}
                                suffix="+"
                            />
                        </div>
                        <div className="text-muted-foreground">Active Users</div>
                    </div>

                    {/* Support Available - Static with animated appearance */}
                    <div className="text-center p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-0">
                            <RollingCounter
                                value={24}
                                fontSize={36}
                                places={[10, 1]}
                                suffix=""
                            />
                            <span className="text-primary font-bold" style={{ fontSize: 36 }}>/</span>
                            <RollingCounter
                                value={7}
                                fontSize={36}
                                places={[1]}
                                suffix=""
                            />
                        </div>
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
