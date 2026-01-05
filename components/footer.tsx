import Link from "next/link"
import { Car, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import siteConfig from "@/lib/data/site-config.json"

const socialIcons: Record<string, any> = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-muted/50 border-t border-border pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                {siteConfig.company.name}
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            {siteConfig.company.description}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
                        <nav className="flex flex-col gap-2">
                            {siteConfig.navigation.main.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                        <nav className="flex flex-col gap-2">
                            {siteConfig.navigation.footer.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail size={16} />
                                {siteConfig.contact.email}
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Phone size={16} />
                                {siteConfig.contact.phone}
                            </a>
                            <div className="flex items-start gap-2 text-muted-foreground">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <span>
                                    {siteConfig.contact.address.street}<br />
                                    {siteConfig.contact.address.postal_code} {siteConfig.contact.address.city}
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            {Object.entries(siteConfig.social).map(([platform, url]) => {
                                const Icon = socialIcons[platform]
                                if (!Icon) return null
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                        &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <span>50 km/day included</span>
                        <span>•</span>
                        <span>Extra: {siteConfig.pricing.extra_km_rate} CHF/km</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
