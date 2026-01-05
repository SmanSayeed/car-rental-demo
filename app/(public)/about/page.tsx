"use client"

import { motion } from "framer-motion"
import { Target, Users, Shield, Award, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import siteConfig from "@/lib/data/site-config.json"

const values = [
    {
        icon: Shield,
        title: "Trust & Transparency",
        description: "Clear pricing with no hidden fees. What you see is what you pay.",
    },
    {
        icon: Award,
        title: "Premium Quality",
        description: "Only the finest vehicles, meticulously maintained to Swiss standards.",
    },
    {
        icon: Heart,
        title: "Customer First",
        description: "Your satisfaction is our priority. We're here to make your journey perfect.",
    },
    {
        icon: Zap,
        title: "Fast & Efficient",
        description: "Automated contracts and instant bookings mean less waiting, more driving.",
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 -z-10"
                    style={{
                        background: "radial-gradient(circle, oklch(0.65 0.22 260 / 0.3) 0%, transparent 70%)",
                        filter: "blur(100px)",
                    }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
                            Driving Excellence in{" "}
                            <span className="gradient-text">Swiss Car Rental</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {siteConfig.company.name} was founded with a simple mission: to provide premium car
                            rental experiences with the efficiency and reliability that Switzerland is known for.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Story</span>
                            <h2 className="text-3xl font-bold text-foreground mt-2 mb-6">
                                From Passion to Premium Service
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    We started {siteConfig.company.name} because we believed car rental could be better.
                                    Too often, customers face complicated pricing, hidden fees, and frustrating paperwork.
                                </p>
                                <p>
                                    Our solution? Complete transparency and automation. When you book with us, you know
                                    exactly what you're getting: a premium vehicle with 50 km per day included, clear
                                    pricing for extra kilometres, and an automatic contract delivered right after payment.
                                </p>
                                <p>
                                    Based in Zurich, we serve customers throughout Switzerland with a carefully curated
                                    fleet of the finest German and European vehicles.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
                                <div className="text-center p-8">
                                    <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <p className="text-xl font-semibold text-foreground">Our Mission</p>
                                    <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
                                        Simplify car rental with automation, transparency, and exceptional service.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Values</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                            What We Stand For
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <value.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { value: "500+", label: "Happy Customers" },
                            { value: "50+", label: "Premium Vehicles" },
                            { value: "99%", label: "Satisfaction Rate" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</p>
                                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
