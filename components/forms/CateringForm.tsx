"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CateringForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      eventDate: formData.get("eventDate") as string,
      guestCount: formData.get("guestCount") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to submit")

      toast.success("Inquiry submitted! We'll be in touch soon.")
      e.currentTarget.reset()
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.")
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="catering-name">Name *</Label>
          <Input id="catering-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="catering-email">Email *</Label>
          <Input
            id="catering-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="catering-phone">Phone</Label>
          <Input
            id="catering-phone"
            name="phone"
            type="tel"
            placeholder="(203) 000-0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="catering-eventDate">Event Date *</Label>
          <Input id="catering-eventDate" name="eventDate" type="date" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="catering-guestCount">Guest Count *</Label>
        <Input
          id="catering-guestCount"
          name="guestCount"
          type="number"
          min="1"
          required
          placeholder="25"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="catering-message">Additional Details</Label>
        <Textarea
          id="catering-message"
          name="message"
          rows={4}
          placeholder="Tell us about your event, dietary needs, special requests..."
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full bg-garden-500 hover:bg-garden-600"
      >
        {pending ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
