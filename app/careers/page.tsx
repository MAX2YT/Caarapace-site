import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import { Briefcase, Heart, Rocket, GraduationCap } from 'lucide-react'
import {
    HoverSlider,
    HoverSliderImage,
    HoverSliderImageWrap,
    TextStaggerHover
} from "@/components/ui/animated-slideshow"

const OPEN_ROLES = [
    {
        id: "role-1",
        title: "Web Development",
        imageUrl: "/web-development.png",
    },
    {
        id: "role-2",
        title: "Digital Marketing",
        imageUrl: "/digital-marketing.png",
    },
    {
        id: "role-3",
        title: "Application Development",
        imageUrl: "/application-development.png",
    },
    {
        id: "role-4",
        title: "Full Stack Development",
        imageUrl: "/full-stack-development.png",
    },
    {
        id: "role-5",
        title: "Management Roles",
        imageUrl: "/management-roles.png",
    },
    {
        id: "role-6",
        title: "Game Development",
        imageUrl: "game.png",
    },
]

export default function CareersPage() {
    const benefits = [
        {
            icon: Briefcase,
            title: 'Competitive Compensation',
            description: 'Seriously good pay plus benefits that actually matter.',
        },
        {
            icon: Heart,
            title: 'Work-Life Balance',
            description: 'Work when and where you want. Life comes first, always.',
        },
        {
            icon: Rocket,
            title: 'Career Growth',
            description: 'Level up your skills and climb the ladder. We invest in your growth.',
        },
        {
            icon: GraduationCap,
            title: 'Learning & Development',
            description: 'Courses, conferences, mentorship—whatever helps you level up, we got it.',
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero with Scroll Animation */}
            <HeroScrollAnimation
                title="Careers"
                tagline="Join a team that's building"
                highlightedText="the future of software."
                image="careerhero.png"
                imageAlt="Team collaboration"
            />

            <div className="container mx-auto px-6 py-16">
                {/* Benefits Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Why You'll Love Working Here</h2>
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

                {/* Open Roles - Animated Slideshow */}
                <HoverSlider className="min-h-[70vh] place-content-center py-16 px-6 md:px-12 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl mb-20">
                    <h3 className="mb-8 text-xs font-medium uppercase tracking-widest text-primary">
                        / open roles
                    </h3>
                    <div className="flex flex-wrap items-center justify-evenly gap-8 md:gap-16">
                        <div className="flex flex-col space-y-3 md:space-y-5">
                            {OPEN_ROLES.map((role, index) => (
                                <TextStaggerHover
                                    key={role.id}
                                    index={index}
                                    className="cursor-pointer text-3xl md:text-5xl font-bold uppercase tracking-tighter text-gray-900"
                                    text={role.title}
                                />
                            ))}
                        </div>
                        <HoverSliderImageWrap className="rounded-2xl overflow-hidden shadow-2xl">
                            {OPEN_ROLES.map((role, index) => (
                                <div key={role.id}>
                                    <HoverSliderImage
                                        index={index}
                                        imageUrl={role.imageUrl}
                                        src={role.imageUrl}
                                        alt={role.title}
                                        className="size-full max-h-96 object-cover"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </HoverSliderImageWrap>
                    </div>
                </HoverSlider>

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto p-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <h2 className="text-3xl font-bold mb-4">Don't See Your Dream Role?</h2>
                    <p className="text-muted-foreground mb-8">
                        No worries. Send us your resume anyway and we'll keep you on our radar for when the perfect spot opens up.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Apply Now!
                    </a>
                </div>
            </div>
        </div>
    )
}
