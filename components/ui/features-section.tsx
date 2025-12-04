import { Cpu, Lock, Zap, Code2, FileCode, Sparkles } from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl text-gray-900">
                        Why We're Different
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg">
                        We mix tech skills with real business sense to build stuff that actually works. No BS, just solid software built the right way from day one.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl lg:max-w-6xl divide-x divide-y divide-[#BD0D46]/30 border border-[#BD0D46]/30 *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Zap className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Stupid Fast</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            We move quick. Agile sprints mean your product gets to market fast without cutting corners on quality.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Scales With You</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Start small, grow big. Our code scales from startup mode to enterprise level without needing a complete rebuild.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Lock className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Locked Down Tight</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Bank-level security isn't optional. We protect your data and your users' trust from the jump.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Code2 className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Built For You</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Your business isn't like everyone else's, so why should your software be? We build custom solutions that fit your exact needs.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <FileCode className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Zero Headaches</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Clean code, proper docs, best practices. Your team can actually understand, maintain, and build on what we make.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-9 text-[#BD0F46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Latest Tech</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            We use the newest frameworks and tools so your software stays fresh and relevant, not outdated in two years.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
