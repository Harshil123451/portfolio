"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, ArrowRight, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "../../site.config"

export function PhotographyHero() {
  return (
    <section className="section-padding py-20 md:py-32">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
              Through My{" "}
              <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
                Lens
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {siteConfig.sections.photography.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            {siteConfig.sections.photography.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600">
              <Link href="#gallery">
                <Camera className="mr-2 h-4 w-4" />
                Explore Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/photography/contact">
                <Instagram className="mr-2 h-4 w-4" />
                Let's Collaborate
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
