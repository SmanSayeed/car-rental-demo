"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Car } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { Button } from "./ui/button"
import siteConfig from "@/lib/data/site-config.json"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = siteConfig.navigation.main

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border bg-background/80">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center">
                            <Car className="w-6 h-6 text-white" />
                        </div> */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={siteConfig.company.logo}
                            alt={siteConfig.company.name}
                            className="h-10 w-auto object-contain rounded-lg"
                        />
                        <span className="text-xl font-bold text-foreground hidden sm:block">
                            {siteConfig.company.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg transition-colors font-medium ${isActive(item.href)
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground hover:bg-muted"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link href="/fleet" className="hidden md:block">
                            <Button variant="gradient">Book Now</Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle mobile menu"
                            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} className="text-foreground" />
                            ) : (
                                <Menu size={24} className="text-foreground" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-border bg-background/95 glass-effect">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg transition-colors font-medium ${isActive(item.href)
                                        ? "bg-primary/10 text-primary"
                                        : "text-foreground hover:bg-muted"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/fleet" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="gradient" className="w-full mt-2">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer for fixed header */}
            <div className="h-[72px]" />
        </>
    )
}
