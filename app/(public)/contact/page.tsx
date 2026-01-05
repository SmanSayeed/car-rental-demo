"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import siteConfig from "@/lib/data/site-config.json"

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact Us</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
                        We'd Love to Hear From You
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions about our service or need help with a booking?
                        Get in touch and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                First Name *
                                            </label>
                                            <Input placeholder="Marc" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Last Name *
                                            </label>
                                            <Input placeholder="Weber" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <Input type="email" placeholder="marc@example.com" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone
                                        </label>
                                        <Input type="tel" placeholder="+41 79 123 45 67" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Subject *
                                        </label>
                                        <select className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                            <option value="">Select a topic</option>
                                            <option value="booking">Booking Inquiry</option>
                                            <option value="pricing">Pricing Question</option>
                                            <option value="support">Customer Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            required
                                            className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        />
                                    </div>
                                    <Button variant="gradient" size="lg" className="w-full">
                                        Send Message
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">
                                        We typically respond within 24 hours during business days.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <a
                                            href={`mailto:${siteConfig.contact.email}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {siteConfig.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <a
                                            href={`tel:${siteConfig.contact.phone}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {siteConfig.contact.phone}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {siteConfig.contact.address.street}<br />
                                            {siteConfig.contact.address.postal_code} {siteConfig.contact.address.city}<br />
                                            {siteConfig.contact.address.country}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                                        <div className="text-sm text-muted-foreground space-y-1">
                                            <p>Mon - Fri: {siteConfig.contact.hours.weekdays}</p>
                                            <p>Saturday: {siteConfig.contact.hours.saturday}</p>
                                            <p>Sunday: {siteConfig.contact.hours.sunday}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
