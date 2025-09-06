"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react"

import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "../../site.config"
import { fetchUserRepos, sortRepos } from "@/lib/github"
import { GitHubRepo } from "@/types/github"

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
]

export default function HomePage() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let isMounted = true

    async function loadRepos() {
      try {
        console.log("Loading repos...")
        const fetchedRepos = await fetchUserRepos(siteConfig.githubUsername)
        console.log("Fetched repos:", fetchedRepos)
        
        if (isMounted) {
          const sortedRepos = sortRepos(fetchedRepos, "stars")
          setRepos(sortedRepos.slice(0, 6)) // Show top 6 on home page
        }
      } catch (error) {
        console.error("Failed to load repositories:", error)
        if (isMounted) {
          setRepos([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    // Add a small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      loadRepos()
    }, 100)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Projects */}
      <Section id="projects" className="bg-muted/30">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my recent work in AI, embedded systems, and web development
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                isPinned={siteConfig.pinnedRepos.includes(repo.name as any)}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <a href="/projects">View All Projects</a>
          </Button>
        </motion.div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-1">{skill.name}</h3>
              <Badge variant="outline" className="text-xs">
                {skill.level}
              </Badge>
            </motion.div>
          ))}
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
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can collaborate!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild size="lg">
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteConfig.socials.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
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
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
