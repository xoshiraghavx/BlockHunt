"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "@/app/public/hero.png";
import { Box } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/config/firebase";

export default function HeroSection(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
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
    <motion.div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl p-8 h-[30rem] bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
      <div className="lg:w-2/6 relative mb-8 lg:mb-0">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Image src={HeroImage} alt="hero" width={400} height={200} className="rounded-lg shadow-md" />
        </motion.div>
      </div>
      <div className="lg:w-3/4 text-center flex flex-col justify-center items-center">
        <motion.div className="text-white flex bg-gray-50 w-fit bg-opacity-10 rounded-full px-4 py-2 items-center justify-center mb-8 gap-2" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box />
          BlockHunt
        </motion.div>
        <motion.h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Join the waitlist
        </motion.h1>
        <motion.p className="text-sm text-white mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id ratione reiciendis repudiandae explicabo reprehenderit optio perferendis esse quasi excepturi totam nostrum voluptates soluta unde culpa consequuntur et corporis cupiditate non, quibusdam voluptatibus. Rem optio similique amet nemo soluta quaerat
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <input type="email" id="email" name="email" placeholder="Enter your email" className="rounded-full bg-transparent border border-gray-600 text-white w-[20vw] px-4" value={email} onChange={handleChange} required />
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 rounded-full" onClick={handleSubmit}>
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}