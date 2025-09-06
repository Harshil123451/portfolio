"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react"

import { siteConfig } from "../../site.config"

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.socials.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: siteConfig.socials.x,
    icon: Twitter,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    name: "Resume",
    href: siteConfig.socials.resumeUrl,
    icon: FileText,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="section-padding container-max-width">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                {siteConfig.sections.professional.tagline}
              </p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.location}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
