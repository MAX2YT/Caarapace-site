import { Cpu, Lock, Zap, Code2, FileCode, Sparkles } from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl text-gray-900">
                        Why Choose Caarapace for Your Next Project
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg">
                        We combine technical excellence with business insight to deliver software solutions that drive real results. Our approach ensures your project is built right, from the ground up.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl lg:max-w-6xl divide-x divide-y divide-[#BD0D46]/30 border border-[#BD0D46]/30 *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Lightning Fast Development</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Rapid iterations and agile methodology ensure your product reaches market quickly without compromising quality.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Infinitely Scalable</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Built with growth in mind, our solutions scale seamlessly from startup to enterprise without architectural rewrites.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Lock className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Enterprise Security</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Bank-level security practices and regular audits protect your data and your users' trust from day one.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Code2 className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Fully Customizable</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Every business is unique. We tailor our solutions to fit your exact requirements and workflows perfectly.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <FileCode className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Easy to Maintain</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            Clean, documented code and best practices mean your team can easily maintain and extend the software.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-[#FFF5F8] transition-colors">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-5 text-[#BD0D46]" />
                            <h3 className="text-sm font-semibold text-gray-900">Modern Tech Stack</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            We use cutting-edge technologies and frameworks that ensure your software stays relevant for years.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
