import HeroSection from "@/components/home/hero-section"
import FleetSection from "@/components/home/fleet-section"
import HowItWorks from "@/components/home/how-it-works"
import PricingInfo from "@/components/home/pricing-info"
import TestimonialsSection from "@/components/home/testimonials"
import FAQSection from "@/components/home/faq-section"
import ContactSection from "@/components/home/contact-section"

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FleetSection />
            <HowItWorks />
            <PricingInfo />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
        </>
    )
}
