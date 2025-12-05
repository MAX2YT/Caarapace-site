export default function ModernIntroSection() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            {/* Decorative elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#BD0F46] rounded-full"></div>
            <div className="hidden sm:block absolute top-32 right-32 w-2 h-2 sm:w-3 sm:h-3 bg-[#BD0F46]/60 rounded-sm transform rotate-45"></div>
            <div className="hidden sm:block absolute top-40 right-16 w-1 h-6 sm:w-2 sm:h-8 bg-[#BD0F46]/80"></div>
            <div className="hidden sm:block absolute top-48 right-24 w-4 h-1 sm:w-6 sm:h-2 bg-[#BD0F46]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Software That Works
                            <br className="hidden sm:block" />
                            <span className="block sm:inline">For The Digital Generation</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify">
                            We're Caarapace, and we build software that doesn't suck. Scalable, clean, and tailored to what you actually need—not some cookie-cutter template. Our crew uses the latest tech to create apps that feel smooth and work seamlessly. From the first idea to launch day, we've got your back.
                        </p>
                    </div>

                    <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
                        {/* Caarapace Mascot Logo */}
                        <div className="relative transform rotate-6 sm:rotate-12 hover:rotate-0 hover:scale-125 transition-transform duration-300">
                            <video
                                src="/crabintro.mp4"
                                autoPlay
                                muted
                                loop
                                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                            />
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#BD0F46]/70 rounded-lg transform rotate-45"></div>
                        <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#BD0F46] rounded-full"></div>
                        <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-12 bg-[#BD0F46]/80"></div>

                        {/* Scattered decorative elements */}
                        <div className="hidden sm:block absolute top-8 right-8 w-2 h-2 bg-[#BD0F46]/60"></div>
                        <div className="hidden sm:block absolute bottom-12 left-8 w-3 h-3 bg-[#BD0F46] rounded-full"></div>
                        <div className="hidden sm:block absolute top-16 left-12 w-2 h-6 bg-[#BD0F46]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
