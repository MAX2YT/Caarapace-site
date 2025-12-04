import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import MagicBento from "@/components/magic-bento";
import ServicesTimeline from "@/components/ui/services-timeline";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero with Scroll Animation */}
            <HeroScrollAnimation
                title="Our Services"
                subtitle="Ship Fast | Build Smart | Scale Big"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                imageAlt="Team collaboration"
            />

            <div className="container mx-auto px-6 py-16">
                {/* MagicBento Section */}
                <div className="mb-20">
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="190, 11, 69"
                    />
                </div>

                {/* Development Process Timeline */}
                <div className="mb-20">
                    <ServicesTimeline />
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-2xl border border-[#BD0F46]/20 bg-gradient-to-r from-[#BD0F46]/5 to-transparent">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Cool?</h2>
                        <p className="text-slate-600 mb-6 max-w-xl">
                            Let's chat about turning your idea into reality. No sales pitch, just real talk about what we can create together.
                        </p>
                        <a
                            href="mailto:hello@caarapace.com"
                            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-[#BD0F46] text-white hover:bg-[#BD0F46]/90 transition-colors shadow-[0_10px_30px_rgba(189,15,70,0.35)] hover:shadow-[0_14px_40px_rgba(189,15,70,0.45)]"
                        >
                            Hit Us Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
