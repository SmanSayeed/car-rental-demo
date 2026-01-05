"use client"

import { useState, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    Car, Fuel, Users, Settings, ChevronLeft, Check,
    Gauge, Zap, Timer, Droplet, Calendar, Plus, Minus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import carsData from "@/lib/data/cars.json"
import siteConfig from "@/lib/data/site-config.json"

interface CarType {
    id: string
    name: string
    brand: string
    model: string
    year: number
    category: string
    image_url: string
    daily_rate: number
    currency: string
    included_km_per_day: number
    extra_km_rate: number
    excess_km_rate: number
    fuel_type: string
    transmission: string
    seats: number
    doors: number
    features: string[]
    specifications: {
        engine: string
        power: string
        acceleration: string
        top_speed: string
        fuel_consumption: string
    }
    available: boolean
}

export default function CarDetailPage() {
    const params = useParams()
    const router = useRouter()
    const carId = params.id as string

    const car = carsData.cars.find((c) => c.id === carId) as CarType | undefined

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [extraKm, setExtraKm] = useState(0)

    const { days, includedKm, totalKm, basePrice, extraKmCost, totalPrice } = useMemo(() => {
        if (!startDate || !endDate || !car) {
            return { days: 0, includedKm: 0, totalKm: 0, basePrice: 0, extraKmCost: 0, totalPrice: 0 }
        }

        const start = new Date(startDate)
        const end = new Date(endDate)
        const diffTime = Math.abs(end.getTime() - start.getTime())
        const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))

        const included = diffDays * car.included_km_per_day
        const total = included + extraKm
        const base = diffDays * car.daily_rate
        const extra = extraKm * car.extra_km_rate

        return {
            days: diffDays,
            includedKm: included,
            totalKm: total,
            basePrice: base,
            extraKmCost: extra,
            totalPrice: base + extra,
        }
    }, [startDate, endDate, extraKm, car])

    if (!car) {
        return (
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Car not found</h1>
                    <Link href="/fleet">
                        <Button>Back to Fleet</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleBooking = () => {
        if (!startDate || !endDate) {
            alert("Please select rental dates")
            return
        }
        router.push(`/booking/confirmation?car=${car.id}&days=${days}&extraKm=${extraKm}&total=${totalPrice}`)
    }

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link href="/fleet" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Fleet
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Car Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Car Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="aspect-video rounded-2xl bg-muted border border-border relative overflow-hidden shadow-lg">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={car.image_url}
                                    alt={car.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-background/90 text-sm font-medium z-10">
                                    {car.category}
                                </div>
                            </div>
                        </motion.div>

                        {/* Car Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{car.name}</h1>
                            <p className="text-lg text-muted-foreground mb-6">{car.brand} {car.model} • {car.year}</p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                    <Users className="w-4 h-4 text-primary" />
                                    <span>{car.seats} Seats</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                    <Fuel className="w-4 h-4 text-primary" />
                                    <span>{car.fuel_type}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                    <Settings className="w-4 h-4 text-primary" />
                                    <span>{car.transmission}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                    <Car className="w-4 h-4 text-primary" />
                                    <span>{car.doors} Doors</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Specifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Specifications</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Gauge className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Engine</p>
                                                <p className="font-medium text-sm">{car.specifications.engine}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Power</p>
                                                <p className="font-medium text-sm">{car.specifications.power}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                                <Timer className="w-5 h-5 text-orange-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">0-100 km/h</p>
                                                <p className="font-medium text-sm">{car.specifications.acceleration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                                <Gauge className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Top Speed</p>
                                                <p className="font-medium text-sm">{car.specifications.top_speed}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                                                <Droplet className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Consumption</p>
                                                <p className="font-medium text-sm">{car.specifications.fuel_consumption}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Features</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        {car.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-accent" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Right - Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24">
                            <Card className="border-primary/50">
                                <CardHeader className="pb-4">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-3xl font-bold text-foreground">
                                                {car.currency} {car.daily_rate}
                                            </p>
                                            <p className="text-sm text-muted-foreground">per day</p>
                                        </div>
                                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-lg">
                                            {car.included_km_per_day} km/day incl.
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-5">
                                    {/* Date Selection */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                <Calendar className="w-4 h-4 inline mr-1" />
                                                Pick-up
                                            </label>
                                            <Input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                <Calendar className="w-4 h-4 inline mr-1" />
                                                Return
                                            </label>
                                            <Input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                min={startDate || new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>

                                    {/* Extra KM */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Extra Kilometres (@ {car.currency} {car.extra_km_rate}/km)
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => setExtraKm(Math.max(0, extraKm - 50))}
                                                disabled={extraKm === 0}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </Button>
                                            <Input
                                                type="number"
                                                value={extraKm}
                                                onChange={(e) => setExtraKm(Math.max(0, parseInt(e.target.value) || 0))}
                                                className="text-center"
                                            />
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => setExtraKm(extraKm + 50)}
                                            >
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Excess km at return: {car.currency} {car.excess_km_rate}/km
                                        </p>
                                    </div>

                                    {/* Price Summary */}
                                    {days > 0 && (
                                        <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{days} day{days > 1 ? 's' : ''} × {car.currency} {car.daily_rate}</span>
                                                <span>{car.currency} {basePrice.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Included km</span>
                                                <span className="text-accent">{includedKm} km</span>
                                            </div>
                                            {extraKm > 0 && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Extra {extraKm} km × {car.currency} {car.extra_km_rate}</span>
                                                    <span>{car.currency} {extraKmCost.toFixed(2)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between text-sm pt-2 border-t border-border">
                                                <span className="text-muted-foreground">Total km allowance</span>
                                                <span className="font-medium text-primary">{totalKm} km</span>
                                            </div>
                                            <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                                                <span>Total</span>
                                                <span className="text-primary">{car.currency} {totalPrice.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )}

                                    <Button
                                        variant="gradient"
                                        size="lg"
                                        className="w-full"
                                        onClick={handleBooking}
                                        disabled={!car.available}
                                    >
                                        {car.available ? "Book Now" : "Not Available"}
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center">
                                        Contract sent automatically after payment
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
