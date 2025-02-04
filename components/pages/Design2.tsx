"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navabr"
import { useState } from "react"
import { FloatingIcons } from "@/components/floating-icon"

export default function Design2() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log("Subscribing email:", email)
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <FloatingIcons/>

      <main className="">
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center ">
          <div className="flex gap-5 flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Welcome to DappHunt!
            </h1>
            <p className=" text-lg text-gray-400 max-w-2xl">
              The place to launch and discover new Web3 products. Join the Wait-list.
            </p>

            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Kindly write your email address here.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
          <Footer />
        </div>
      </main>

    </div>
  )
}

