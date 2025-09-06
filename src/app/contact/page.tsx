"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "../../../site.config"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email anytime",
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
    icon: Github,
    title: "GitHub",
    description: "Check out my code",
    value: "@Harshil123451",
    href: siteConfig.socials.github,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    value: "LinkedIn Profile",
    href: siteConfig.socials.linkedin,
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow for updates",
    value: "@your-handle",
    href: siteConfig.socials.x,
  },
]

export default function ContactPage() {
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'd love to hear from you!
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
              Send a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible
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
              You can also reach me through these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
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

      {/* Response Time */}
      <Section className="bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Response Time</h3>
            <p className="text-muted-foreground">
              I typically respond to messages within 24 hours. For urgent matters, 
              feel free to reach out via email or LinkedIn.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
