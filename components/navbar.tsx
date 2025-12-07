'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ContactFormDialog } from '@/components/ui/contact-form-dialog'
import ModernRetroButton from '@/components/ui/modern-retro-button'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'C-Deck', href: '/c-deck' },
    { name: 'Pulse', href: '/pulse' },
    { name: 'Careers', href: '/careers' },
]

export function Navbar() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header suppressHydrationWarning>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl backdrop-blur-lg lg:px-5 shadow-lg shadow-primary/5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="Caarapace Home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "block duration-150 font-medium",
                                                    isActive
                                                        ? "text-primary"
                                                        : "text-muted-foreground hover:text-primary"
                                                )}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        "block duration-150",
                                                        isActive
                                                            ? "text-primary font-semibold"
                                                            : "text-muted-foreground hover:text-primary"
                                                    )}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {/* Modern Retro Contact Us Button */}
                                <ContactFormDialog
                                    open={dialogOpen}
                                    onOpenChange={setDialogOpen}
                                    trigger={
                                        <ModernRetroButton
                                            label="Contact Us"
                                            onClick={() => setDialogOpen(true)}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center', className)}>
            <Image
                src="/logo.png"
                alt="Caarapace Logo"
                width={180}
                height={60}
                className="h-8 w-auto"
                loading="eager"
            />
        </div>
    )
}
