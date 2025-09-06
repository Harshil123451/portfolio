"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Camera, Heart, MapPin, Coffee } from "lucide-react"

import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "../../../../site.config"

const photographyFacts = [
  {
    icon: Camera,
    title: "My Style",
    description: "I love capturing candid moments and natural light. My approach is relaxed and authentic.",
  },
  {
    icon: Heart,
    title: "What I Love",
    description: "Golden hour, street photography, portraits, and those quiet moments in between.",
  },
  {
    icon: MapPin,
    title: "Locations",
    description: "Based in Melbourne, but always up for exploring new places and hidden corners.",
  },
  {
    icon: Coffee,
    title: "Vibe",
    description: "Chill sessions, good conversations, and creating memories that feel real.",
  },
]

export default function PhotographyAboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              About My{" "}
              <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
                Photography
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.sections.photography.tagline}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-teal-500/50">
                  📸
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hey there! 👋</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.sections.photography.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe the best photos happen when people feel comfortable and natural. 
                  No forced poses, no awkward moments – just authentic connections and genuine emotions. 
                  Whether it's a portrait session, a casual shoot, or capturing life as it happens, 
                  I'm here to help you tell your story.
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  <span>Available for shoots</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Photography Facts */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              My Photography Style
            </h2>
            <p className="text-lg text-muted-foreground">
              A few things that make my approach unique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographyFacts.map((fact, index) => {
              const Icon = fact.icon
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-amber-500/10">
                          <Icon className="h-5 w-5 text-teal-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{fact.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{fact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Gear & Approach */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              My Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Less gear talk, more connection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">The Process</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>We chat about your vision and what you're hoping to capture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>I scout locations or we explore together</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>Relaxed, natural shooting with minimal direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>You get all the edited photos, no watermarks</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">What to Expect</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Comfortable, pressure-free environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Natural lighting and authentic moments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Quick turnaround on edited photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>High-res files perfect for printing or sharing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Ready to Create?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Let's chat about your vision and make some beautiful memories together.
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
              Let's Collaborate
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
