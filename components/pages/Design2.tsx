"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navabr"
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/config/firebase";import { FloatingIcons } from "@/components/floating-icon"
import { MailIcon, MailOpenIcon } from "lucide-react"


export default function Design2() {
  const [email, setEmail] = useState<string>("");
  
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setEmail(e.target.value);
    // };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevents page refresh
    
      if (!email) return alert("Please enter an email address");
      try {
        await addDoc(collection(db, "early-register-users"), {
          email: email,
        });
        alert("Successfully joined the waitlist!");
        setEmail("");
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to join the waitlist. Please try again.");
      }
    };
    
  

  return (
    <div className="flex flex-col ">
      <Navbar />
      <FloatingIcons/>

      <main className="">
        <div className="container mx-auto px-4 sm:mt-[30vh] mt-[25vh] flex flex-col justify-center ">
          <div className="flex gap-5 flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl">
              Welcome to DappHunt!
            </h1>
            <p className=" text-md sm:text-xl text-white max-w-3xl">
              The place to launch and discover new Web3 products. Join the Wait-list.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md sm:gap-2 gap-4 items-center justify-center">
              <Input
                type="email"
                placeholder="Kindly write your email address here.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-700 text-white placeholder:text-gray-400 bg-transparent"
                required
              />
              <Button type="submit" className="w-[35vw] sm:w-[10vw] bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white">
                <span className="text-blue-600">
                  <MailOpenIcon/>
                </span>
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

