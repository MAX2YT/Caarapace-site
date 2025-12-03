import { Code2, Smartphone, Cloud, Zap, Shield, BarChart } from 'lucide-react'

export default function ServicesPage() {
    const services = [
        {
            icon: Code2,
            title: 'Web Development',
            description: 'Modern, scalable web applications built with the latest technologies. From responsive websites to complex web platforms.',
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            description: 'Native iOS and Android applications that deliver exceptional user experiences and drive engagement.',
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and services that grow with your business needs.',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Speed up your applications with advanced optimization techniques and best practices.',
        },
        {
            icon: Shield,
            title: 'Security & Compliance',
            description: 'Enterprise-grade security solutions to protect your data and maintain compliance.',
        },
        {
            icon: BarChart,
            title: 'Analytics & Insights',
            description: 'Data-driven solutions to help you make informed business decisions.',
        },
    ]

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive software solutions tailored to transform your business and drive growth in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                <div className="p-3 rounded-full bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="size-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-muted-foreground mb-6 max-w-xl">
                            Let's discuss how we can help transform your business with our software solutions.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                            Contact Us Today
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
