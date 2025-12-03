import AnimatedHero from "@/components/animated-hero";
import { Activity, TrendingUp, Users, Bell } from 'lucide-react'

export default function PulsePage() {
    const features = [
        {
            icon: Activity,
            title: 'Real-time Monitoring',
            description: 'Track your business metrics and KPIs in real-time with intuitive dashboards.',
        },
        {
            icon: TrendingUp,
            title: 'Growth Analytics',
            description: 'Identify trends and opportunities with advanced analytics and forecasting.',
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Keep your team aligned with shared insights and collaborative tools.',
        },
        {
            icon: Bell,
            title: 'Smart Alerts',
            description: 'Get notified about important changes and milestones automatically.',
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Animated Hero */}
            <AnimatedHero
                leftText="Data"
                rightText="Insights"
                centralImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop"
                bottomImages={[
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", alt: "Analytics dashboard", label: "Live Dashboard" },
                    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", alt: "Data visualization", label: "Advanced Analytics" },
                    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop", alt: "Business metrics", label: "Performance Metrics" }
                ]}
                subtitle="Stay on top of business performance with real-time analytics"
                darkMode={false}
            />

            <div className="container mx-auto px-6 py-16">
                {/* Features Grid */}
                <div id="features" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="flex gap-6 p-8 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/20 transition-all duration-300">
                                <div className="flex-shrink-0">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Icon className="size-8 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

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
