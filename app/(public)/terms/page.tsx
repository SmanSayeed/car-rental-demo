"use client"

import { motion } from "framer-motion"
import siteConfig from "@/lib/data/site-config.json"

export default function TermsPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p className="text-muted-foreground text-lg mb-8">
                            Last updated: January 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Rental Agreement</h2>
                            <p className="text-muted-foreground">
                                By renting a vehicle from {siteConfig.company.name}, you agree to these Terms and Conditions.
                                A separate rental contract will be provided upon booking confirmation, which forms part of
                                this agreement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Driver Requirements</h2>
                            <p className="text-muted-foreground mb-4">To rent a vehicle, you must:</p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Be at least 21 years of age (25 for premium vehicles)</li>
                                <li>Hold a valid driving licence for at least 1 year</li>
                                <li>Present a valid ID or passport</li>
                                <li>Provide a credit card in your name for the security deposit</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kilometre Policy</h2>
                            <p className="text-muted-foreground mb-4">
                                Each rental includes {siteConfig.pricing.included_km_per_day} kilometres per day of rental.
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>
                                    <strong>Extra kilometres (pre-purchased):</strong> {siteConfig.pricing.currency} {siteConfig.pricing.extra_km_rate} per km
                                </li>
                                <li>
                                    <strong>Excess kilometres (charged after return):</strong> {siteConfig.pricing.currency} {siteConfig.pricing.excess_km_rate} per km
                                </li>
                            </ul>
                            <p className="text-muted-foreground mt-4">
                                We recommend pre-purchasing extra kilometres if you expect to exceed your allowance,
                                as this offers a lower rate than excess charges.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                            <p className="text-muted-foreground mb-4">
                                Full payment is required at the time of booking. We accept:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Major credit cards (Visa, Mastercard, American Express)</li>
                                <li>TWINT</li>
                                <li>Bank transfer (for bookings made more than 7 days in advance)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cancellation Policy</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Free cancellation:</strong> More than 48 hours before rental start</li>
                                <li><strong>50% refund:</strong> 24-48 hours before rental start</li>
                                <li><strong>No refund:</strong> Less than 24 hours before rental start</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Insurance</h2>
                            <p className="text-muted-foreground">
                                All rentals include comprehensive insurance with a deductible. The standard deductible
                                varies by vehicle category. Additional insurance to reduce or eliminate the deductible
                                is available during booking.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vehicle Use</h2>
                            <p className="text-muted-foreground mb-4">The rented vehicle may not be:</p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Driven outside of Switzerland without prior written consent</li>
                                <li>Used for racing, driving lessons, or commercial purposes</li>
                                <li>Driven by anyone not named on the rental contract</li>
                                <li>Used while under the influence of alcohol or drugs</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Return Conditions</h2>
                            <p className="text-muted-foreground">
                                The vehicle must be returned at the agreed time and location with the same fuel level
                                as at pickup. Late returns will be charged at the daily rate. We record starting and
                                ending mileage to calculate any excess kilometre charges.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These Terms and Conditions are governed by Swiss law. Any disputes shall be subject
                                to the exclusive jurisdiction of the courts of Zurich, Switzerland.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
                            <p className="text-muted-foreground">
                                For questions about these Terms and Conditions, please contact us:
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong className="text-foreground">{siteConfig.company.name}</strong><br />
                                {siteConfig.contact.address.street}<br />
                                {siteConfig.contact.address.postal_code} {siteConfig.contact.address.city}<br />
                                Email: {siteConfig.contact.email}
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
