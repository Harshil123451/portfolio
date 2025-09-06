"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { PhotographyHero } from "@/components/photography-hero"
import { PhotoGallery } from "@/components/photo-gallery"
import { Section } from "@/components/section"
import { siteConfig } from "../../../site.config"

export default function PhotographyPage() {
  return (
    <div className="min-h-screen">
      <PhotographyHero />

      {/* Photo Gallery */}
      <Section id="gallery" className="bg-muted/30">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Photo Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of moments captured through my lens. Click on any photo to view it in full size.
          </motion.p>
        </div>

        <PhotoGallery photos={siteConfig.photos} />
      </Section>

      {/* Contact CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Let's Create Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Interested in a photo shoot or collaboration? I'd love to hear about your vision and create something beautiful together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="/photography/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 h-11 px-8"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
