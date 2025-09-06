"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "../../site.config"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = React.useState<FormStatus>({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, we'll just show success
      // In a real app, you'd send this to Formspree, Netlify Forms, or your own API
      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      })
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or email me directly.' 
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Send me a message</CardTitle>
        <CardDescription>
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="focus-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="focus-ring"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or just say hello!"
              rows={6}
              className="focus-ring resize-none"
            />
          </div>

          {status.type === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-600 dark:text-green-400"
            >
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">{status.message}</span>
            </motion.div>
          )}

          {status.type === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{status.message}</span>
            </motion.div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            className="w-full group"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            Or reach out to me directly at{" "}
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="text-primary hover:underline focus-ring rounded"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
