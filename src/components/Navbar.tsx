// src/components/Navbar.tsx

"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import '../app/globals.css' // Correct
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { user, isLoaded } = useUser()

  React.useEffect(() => {
    if (isLoaded) {
      if (user) {
        console.log('User is signed in:', user)
      } else {
        console.log('User is not signed in')
      }
    }
  }, [user, isLoaded])

  return (
    <header>
      <nav className="container flex h-16 items-center bg-white">
        {/* Logo and Navigation Links */}
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="h-6 w-6 rounded-lg bg-primary" />
            <span className="font-bold">Testify</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
             Dashboard
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="mb-8 flex items-center space-x-2">
              <span className="h-6 w-6 rounded-lg bg-primary" />
              <span className="font-bold">Company</span>
            </Link>
            <div className="flex flex-col space-y-4 text-sm">
              <Link href="#features" className="transition-colors hover:text-foreground/80">
                Features
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Authentication and Theme Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center gap-2">
            <SignedOut>
              {/* Sign In Button */}
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              {/* Get Started Button */}
              <Button size="sm" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              {/* User Button */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  )
}