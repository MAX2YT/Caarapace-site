import AnimatedHero from "@/components/animated-hero";
import { Briefcase, Heart, Rocket, GraduationCap } from 'lucide-react'

export default function CareersPage() {
    const benefits = [
        {
            icon: Briefcase,
            title: 'Competitive Compensation',
            description: 'Industry-leading salaries and comprehensive benefits packages.',
        },
        {
            icon: Heart,
            title: 'Work-Life Balance',
            description: 'Flexible hours and remote work options to support your lifestyle.',
        },
        {
            icon: Rocket,
            title: 'Career Growth',
            description: 'Continuous learning opportunities and clear advancement paths.',
        },
        {
            icon: GraduationCap,
            title: 'Learning & Development',
            description: 'Access to courses, conferences, and mentorship programs.',
        },
    ]

    const openPositions = [
        {
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Hybrid',
            type: 'Full-time',
        },
        {
            title: 'Product Manager',
            department: 'Product',
            location: 'Remote',
            type: 'Full-time',
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Animated Hero */}
            <AnimatedHero
                leftText="Build"
                rightText="Together"
                centralImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                bottomImages={[
                    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", alt: "Team meeting", label: "Collaborative Culture" },
                    { src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=400&fit=crop", alt: "Office workspace", label: "Modern Workspace" },
                    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", alt: "Team collaboration", label: "Innovation Together" }
                ]}
                subtitle="Join a team of passionate innovators shaping the future"
                darkMode={false}
            />

            <div className="container mx-auto px-6 py-16">
                {/* Benefits Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent hover:border-primary/20 transition-all duration-300">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Icon className="size-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Open Positions */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                                            {position.department}
                                        </span>
                                        <span>{position.location}</span>
                                        <span>•</span>
                                        <span>{position.type}</span>
                                    </div>
                                </div>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-medium border border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto p-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
                    <p className="text-muted-foreground mb-8">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Send Your Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
