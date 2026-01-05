"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Car, Fuel, Users, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import carsData from "@/lib/data/cars.json"

interface Car {
    id: string
    name: string
    brand: string
    model: string
    year: number
    category: string
    image_url: string
    daily_rate: number
    currency: string
    fuel_type: string
    transmission: string
    seats: number
    featured: boolean
}

export default function FleetSection() {
    const featuredCars = carsData.cars.filter((car: Car) => car.featured).slice(0, 4)

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Fleet</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                        Premium Vehicles for Every Journey
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Choose from our carefully curated selection of premium vehicles. Each car includes 50 km per day
                        with transparent pricing for extra kilometres.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCars.map((car: Car, index: number) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/fleet/${car.id}`}>
                                <Card className="h-full hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden">
                                    <div className="aspect-[4/3] bg-muted relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={car.image_url}
                                            alt={car.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-background/90 text-xs font-medium z-10">
                                            {car.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-5">
                                        <div className="mb-3">
                                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {car.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{car.brand} {car.year}</p>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3.5 h-3.5" />
                                                {car.seats}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Fuel className="w-3.5 h-3.5" />
                                                {car.fuel_type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Settings className="w-3.5 h-3.5" />
                                                {car.transmission}
                                            </span>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div>
                                                <p className="text-2xl font-bold text-foreground">
                                                    {car.currency} {car.daily_rate}
                                                </p>
                                                <p className="text-xs text-muted-foreground">per day</p>
                                            </div>
                                            <span className="text-xs text-primary font-medium">50 km incl.</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <Link href="/fleet">
                        <Button variant="outline" size="lg">
                            View All Vehicles
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
