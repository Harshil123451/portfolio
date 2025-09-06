"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Camera, MapPin, Mail, Instagram, MessageCircle } from "lucide-react"

import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "../../../../site.config"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in",
    value: siteConfig.location,
    href: null,
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "See my latest work",
    value: "@your_instagram",
    href: "https://instagram.com/your_instagram",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat",
    value: "+61 123 456 789",
    href: "https://wa.me/61123456789",
  },
]

export default function PhotographyContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6"
          >
            Let's Create{" "}
            <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Ready to collaborate on a shoot? I'd love to hear about your vision and create something beautiful together.
          </motion.p>
        </div>
      </Section>

      {/* Contact Form */}
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
              Start a Conversation
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell me about your project, ideas, or just say hi!
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </Section>

      {/* Contact Information */}
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
              Other Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick your preferred way to reach out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
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
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                          <CardDescription>{info.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline focus-ring rounded"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* What to Expect */}
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
              What Happens Next?
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's how our collaboration will work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">We Chat</h3>
              <p className="text-muted-foreground">
                Tell me about your vision, style preferences, and what you're hoping to capture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">We Plan</h3>
              <p className="text-muted-foreground">
                I'll suggest locations, timing, and we'll plan the perfect shoot for your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We Create</h3>
              <p className="text-muted-foreground">
                Relaxed, fun shoot with natural moments and authentic emotions.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Response Time */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Response</h3>
            <p className="text-muted-foreground">
              I typically respond within 24 hours. For urgent requests, feel free to reach out via WhatsApp or Instagram.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
