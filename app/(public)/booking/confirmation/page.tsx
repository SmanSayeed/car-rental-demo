"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, FileText, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import carsData from "@/lib/data/cars.json"

function ConfirmationContent() {
    const searchParams = useSearchParams()
    const carId = searchParams.get("car")
    const days = searchParams.get("days")
    const extraKm = searchParams.get("extraKm")
    const total = searchParams.get("total")

    const car = carsData.cars.find((c) => c.id === carId)

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    {/* Success Icon */}
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-accent" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Booking Confirmed!
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Thank you for your reservation. This is a demo confirmation page.
                    </p>

                    {/* Booking Summary */}
                    <Card className="mb-8 text-left">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Booking Summary</h2>

                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">Vehicle</span>
                                    <span className="font-medium">{car?.name || "Selected Car"}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">Duration</span>
                                    <span className="font-medium">{days || 0} day{Number(days) !== 1 ? "s" : ""}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">Included Kilometres</span>
                                    <span className="font-medium">{Number(days || 0) * 50} km</span>
                                </div>
                                {Number(extraKm) > 0 && (
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">Extra Kilometres</span>
                                        <span className="font-medium">{extraKm} km</span>
                                    </div>
                                )}
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">Total Authorised Kilometres</span>
                                    <span className="font-medium text-primary">{(Number(days || 0) * 50) + Number(extraKm || 0)} km</span>
                                </div>
                                <div className="flex justify-between py-3">
                                    <span className="font-semibold">Total Amount</span>
                                    <span className="text-xl font-bold text-primary">CHF {Number(total || 0).toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Steps */}
                    <Card className="mb-8 text-left">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold text-foreground mb-4">What Happens Next</h2>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Rental Contract</p>
                                        <p className="text-sm text-muted-foreground">
                                            In a real booking, your rental contract would be automatically generated
                                            and sent to your email after payment.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Confirmation Email</p>
                                        <p className="text-sm text-muted-foreground">
                                            You would receive a confirmation email with all booking details
                                            and pickup instructions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Demo Notice */}
                    <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30 mb-8">
                        <p className="text-sm text-orange-600 dark:text-orange-400">
                            <strong>Demo Mode:</strong> This is a prototype demonstration. No actual booking
                            has been made and no payment has been processed.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/fleet">
                            <Button variant="outline" size="lg">
                                Browse More Cars
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="gradient" size="lg">
                                Back to Home
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default function BookingConfirmationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen py-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading confirmation...</p>
                </div>
            </div>
        }>
            <ConfirmationContent />
        </Suspense>
    )
}
