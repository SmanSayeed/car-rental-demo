"use client"

import { motion } from "framer-motion"
import siteConfig from "@/lib/data/site-config.json"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p className="text-muted-foreground text-lg mb-8">
                            Last updated: January 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground">
                                {siteConfig.company.name} ("we", "our", or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information when you
                                use our car rental services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                            <p className="text-muted-foreground mb-4">We collect information that you provide directly to us, including:</p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Personal identification information (name, email address, phone number)</li>
                                <li>Driver's licence details</li>
                                <li>Payment information</li>
                                <li>Rental history and preferences</li>
                                <li>Vehicle mileage and usage data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Process and manage your car rental bookings</li>
                                <li>Generate rental contracts and invoices</li>
                                <li>Calculate kilometre usage and any additional charges</li>
                                <li>Send booking confirmations and important updates</li>
                                <li>Improve our services and customer experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate technical and organizational measures to protect your personal
                                data against unauthorized access, alteration, disclosure, or destruction. All payment
                                information is processed through secure, encrypted channels.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                            <p className="text-muted-foreground">
                                We retain your personal data for as long as necessary to fulfill the purposes for which
                                it was collected, including to satisfy legal, accounting, or reporting requirements.
                                Rental records are kept for a minimum of 10 years as required by Swiss law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                            <p className="text-muted-foreground mb-4">Under Swiss data protection law, you have the right to:</p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Data portability</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong className="text-foreground">{siteConfig.company.name}</strong><br />
                                {siteConfig.contact.address.street}<br />
                                {siteConfig.contact.address.postal_code} {siteConfig.contact.address.city}<br />
                                Email: {siteConfig.contact.email}<br />
                                Phone: {siteConfig.contact.phone}
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
