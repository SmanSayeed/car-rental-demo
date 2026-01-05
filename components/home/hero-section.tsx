'use client'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Car, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import siteConfig from "@/lib/data/site-config.json"

const sliderImages = [
    "/assets/slider/5.jpg",
    "/assets/slider/6.jpg",
    "/assets/slider/8.jpg"
]

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    return (
        <section className="relative min-h-[600px] py-12 lg:py-20 flex flex-col justify-center overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 -z-10"
                style={{
                    background: "radial-gradient(circle, oklch(0.65 0.22 260 / 0.4) 0%, transparent 70%)",
                    filter: "blur(100px)",
                }}
            />
            <div
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 -z-10"
                style={{
                    background: "radial-gradient(circle, oklch(0.6 0.22 145 / 0.4) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Content */}
                    <motion.div className="flex flex-col gap-8" variants={itemVariants}>
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                🇨🇭 Premium Swiss Car Rental
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                                Drive Your Dream
                                <span className="block gradient-text">Across Switzerland</span>
                            </h1>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            {siteConfig.company.description}
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Car className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">50 km/day</p>
                                    <p className="text-xs text-muted-foreground">Included free</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Full Insurance</p>
                                    <p className="text-xs text-muted-foreground">Included</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Instant Contract</p>
                                    <p className="text-xs text-muted-foreground">After payment</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4"
                        >
                            <Link href="/fleet">
                                <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                                    Browse Fleet
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    How It Works
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Car Image Slider */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 ease-out border-4 border-white/10 bg-black">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={sliderImages[currentImageIndex]}
                                    alt="Premium Car Rental Switzerland"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 object-cover w-full h-full"
                                />
                            </AnimatePresence>
                            {/* Decorative gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl -z-10" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
