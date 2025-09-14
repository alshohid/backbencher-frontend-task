"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  explore: [
    { name: "About Zuno", href: "/about-01" },
    { name: "Learn", href: "/about-02" },
  ],
  company: [
    { name: "Careers", href: "/about-03" },
    { name: "Terms of service", href: "/legal-pages" },
    { name: "Privacy policy", href: "/legal-pages" },
    { name: "Contact us", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/jp.webflow" },
    { name: "TikTok", href: "https://www.instagram.com/jp.webflow" },
    { name: "Twitter", href: "https://www.twitter.com/joaopaulots" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Image src="/zuno-logo.jpg" alt="Zuno" width={120} height={40} className="h-8 w-auto" />
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow us</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
            {isSubmitted && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-800 flex items-center">
                  Thank you! Your submission has been received!
                  <span className="ml-2">✓</span>
                </p>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-3">
              We only share your information in accordance with our{" "}
              <Link href="#" className="text-green-600 hover:underline">
                privacy policy.
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. © Zuno 2025. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large logo background */}
      <div className="absolute bottom-0 right-0 opacity-5">
        <Image src="/zuno-logo-large.jpg" alt="" width={200} height={200} className="h-48 w-48" />
      </div>
    </footer>
  )
}
