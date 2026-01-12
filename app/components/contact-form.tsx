"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

const OWNER_EMAIL = "info@unitedsheildremodeling.com" // TODO: change to your address (e.g., info@yourdomain.com)

type FormDataShape = {
  name: string
  phone: string
  email: string
  city: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataShape>({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const buildMailtoHref = (to: string, subject: string, body: string) => {
    const params = new URLSearchParams({
      subject,
      body,
    })
    // Some mail clients prefer CRLF newlines; encode after joining:
    const href = `mailto:${to}?${params.toString()}`
    return href
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    // Compose subject & body
    const subject = `New Contact Request from ${formData.name || "Website Visitor"}`
    const lines = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `City/ZIP: ${formData.city}`,
      `Project Type: ${labelForProjectType(formData.projectType)}`,
      `Budget: ${labelForBudget(formData.budget)}`,
      `Timeline: ${labelForTimeline(formData.timeline)}`,
      "",
      "Message:",
      formData.message || "(none)",
    ]
    const body = lines.join("\r\n")

    // Kick user to their mail client with prefilled message
    const href = buildMailtoHref(OWNER_EMAIL, subject, body)
    window.location.href = href

    // Small delay to avoid re-enable flicker if mail client returns focus instantly
    setTimeout(() => setIsSubmitting(false), 800)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-center">Request Your Free Estimate</CardTitle>
        <p className="text-muted-foreground text-center">
          Fill out the form below and we&apos;ll contact you within 24 hours to schedule your consultation.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="city">City/ZIP</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g., Conroe, TX 77385"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectType">Project Type</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Remodel</SelectItem>
                  <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
                  <SelectItem value="flooring">Flooring</SelectItem>
                  <SelectItem value="addition">Addition</SelectItem>
                  <SelectItem value="full-home">Full Home Makeover</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-plus">$100,000+</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
              <SelectTrigger>
                <SelectValue placeholder="When would you like to start?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-plus-months">6+ months</SelectItem>
                <SelectItem value="planning">Just planning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Tell us about your project</Label>
            <Textarea
              id="message"
              placeholder="Describe your vision, specific needs, or any questions you have..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full text-lg py-3" disabled={isSubmitting}>
            {isSubmitting ? (
              "Opening your email app..."
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send My Request
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by United Shield Remodeling regarding your project. We
            respect your privacy and will never share your information.
          </p>

          {/* Noscript/basic fallback: visible if JS blocked */}
          <noscript>
            <p className="text-sm mt-2">
              JavaScript is disabled. You can{" "}
              <a
                href={`mailto:${OWNER_EMAIL}?subject=Project%20Inquiry&body=Please%20include%20your%20name%2C%20phone%2C%20and%20project%20details.`}
                className="underline"
              >
                email us directly
              </a>
              .
            </p>
          </noscript>
        </form>
      </CardContent>
    </Card>
  )
}

/* ---- helpers for label text ---- */
function labelForProjectType(v: string) {
  switch (v) {
    case "kitchen":
      return "Kitchen Remodel"
    case "bathroom":
      return "Bathroom Remodel"
    case "flooring":
      return "Flooring"
    case "addition":
      return "Addition"
    case "full-home":
      return "Full Home Makeover"
    case "other":
      return "Other"
    default:
      return ""
  }
}

function labelForBudget(v: string) {
  switch (v) {
    case "under-25k":
      return "Under $25,000"
    case "25k-50k":
      return "$25,000 - $50,000"
    case "50k-100k":
      return "$50,000 - $100,000"
    case "100k-plus":
      return "$100,000+"
    case "not-sure":
      return "Not sure yet"
    default:
      return ""
  }
}

function labelForTimeline(v: string) {
  switch (v) {
    case "asap":
      return "As soon as possible"
    case "1-3-months":
      return "1-3 months"
    case "3-6-months":
      return "3-6 months"
    case "6-plus-months":
      return "6+ months"
    case "planning":
      return "Just planning"
    default:
      return ""
  }
}