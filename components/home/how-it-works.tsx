"use client"

import { motion } from "framer-motion"
import { MousePointer2, CreditCard, FileCheck, Car } from "lucide-react"

const steps = [
    {
        icon: MousePointer2,
        title: "Select Your Car",
        description: "Browse our premium fleet and choose the perfect vehicle for your journey.",
        color: "from-blue-500 to-indigo-500",
    },
    {
        icon: CreditCard,
        title: "Book & Pay Online",
        description: "Choose your dates, add extra km if needed, and pay securely online.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: FileCheck,
        title: "Receive Contract",
        description: "Get your rental contract automatically via email right after payment.",
        color: "from-purple-500 to-violet-500",
    },
    {
        icon: Car,
        title: "Pick Up & Drive",
        description: "Collect your car and enjoy your trip across beautiful Switzerland.",
        color: "from-orange-500 to-amber-500",
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Process</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Rent a car in four simple steps. Our streamlined process makes car rental quick and hassle-free.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`w-24 h-24 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <step.icon className="w-10 h-10 text-white" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
