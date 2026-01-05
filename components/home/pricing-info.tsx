"use client"

import { motion } from "framer-motion"
import { Check, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import siteConfig from "@/lib/data/site-config.json"

export default function PricingInfo() {
    const { pricing } = siteConfig

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Transparent Pricing</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                        Simple Kilometre Pricing
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Every rental includes a generous kilometre allowance. Need more? Simply purchase extra km in advance at our preferential rate.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Included KM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full text-center border-primary/50 bg-primary/5">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {pricing.included_km_per_day} km/day
                                </h3>
                                <p className="text-lg font-semibold text-primary mb-2">Included Free</p>
                                <p className="text-sm text-muted-foreground">
                                    Every rental includes 50 km per day at no extra cost
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Extra KM Rate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="h-full text-center border-accent/50 bg-accent/5">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-accent">+</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {pricing.currency} {pricing.extra_km_rate}/km
                                </h3>
                                <p className="text-lg font-semibold text-accent mb-2">Pre-Purchase Rate</p>
                                <p className="text-sm text-muted-foreground">
                                    Add extra kilometres when booking at our best rate
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Excess KM Rate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="h-full text-center border-orange-500/50 bg-orange-500/5">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                                    <AlertCircle className="w-8 h-8 text-orange-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {pricing.currency} {pricing.excess_km_rate}/km
                                </h3>
                                <p className="text-lg font-semibold text-orange-500 mb-2">Excess Rate</p>
                                <p className="text-sm text-muted-foreground">
                                    Charged for any km over your authorised allowance
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        <strong className="text-foreground">Tip:</strong> Plan your trip and pre-purchase extra kilometres
                        during booking to save {pricing.currency} {(pricing.excess_km_rate - pricing.extra_km_rate).toFixed(2)} per km!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
