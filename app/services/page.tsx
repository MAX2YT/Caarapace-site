import MagicBento from "@/components/magic-bento";

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="text-[#BD0D46]">Services</span>
                    </h1>
                    <p className="text-lg text-slate-600">
                        Build Fast | Launch Smart | Grow Big
                    </p>
                </div>

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

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-2xl border border-[#BD0D46]/20 bg-gradient-to-r from-[#BD0D46]/5 to-transparent">
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-slate-600 mb-6 max-w-xl">
                            Let's discuss how we can help transform your business with our software solutions.
                        </p>
                        <a
                            href="mailto:hello@caarapace.com"
                            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-[#BD0D46] text-white hover:bg-[#BD0D46]/90 transition-colors shadow-[0_10px_30px_rgba(189,13,70,0.35)] hover:shadow-[0_14px_40px_rgba(189,13,70,0.45)]"
                        >
                            Contact Us Today
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
