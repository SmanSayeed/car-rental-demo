"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Car, Fuel, Users, Settings, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import carsData from "@/lib/data/cars.json"

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
    fuel_type: string
    transmission: string
    seats: number
    available: boolean
}

const categories = ["All", "Sedan", "SUV", "Compact", "Electric"]

export default function FleetPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const cars = carsData.cars as CarType[]

    const filteredCars = activeCategory === "All"
        ? cars
        : cars.filter((car) => car.category === activeCategory)

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Fleet</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
                        Choose Your Perfect Ride
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Browse our premium selection of vehicles. Each rental includes 50 km per day with
                        transparent pricing for extra kilometres.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap items-center justify-center gap-2 mb-10"
                >
                    <Filter className="w-5 h-5 text-muted-foreground mr-2" />
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
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
                                        {!car.available && (
                                            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-20">
                                                <span className="text-muted-foreground font-medium">Not Available</span>
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-5">
                                        <div className="mb-3">
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {car.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{car.brand} • {car.year}</p>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3.5 h-3.5" />
                                                {car.seats} seats
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
                                            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                                                50 km incl.
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredCars.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No vehicles found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
