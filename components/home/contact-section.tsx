"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import siteConfig from "@/lib/data/site-config.json"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We're here to help. Send us a message or visit us at our location.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                First Name
                                            </label>
                                            <Input placeholder="Marc" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Last Name
                                            </label>
                                            <Input placeholder="Weber" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email
                                        </label>
                                        <Input type="email" placeholder="marc@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone
                                        </label>
                                        <Input type="tel" placeholder="+41 79 123 45 67" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        />
                                    </div>
                                    <Button variant="gradient" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                                    <a
                                        href={`mailto:${siteConfig.contact.email}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                                    <a
                                        href={`tel:${siteConfig.contact.phone}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {siteConfig.contact.phone}
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Mon-Fri: {siteConfig.contact.hours.weekdays}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        {siteConfig.contact.address.street}<br />
                                        {siteConfig.contact.address.postal_code} {siteConfig.contact.address.city}<br />
                                        {siteConfig.contact.address.country}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
