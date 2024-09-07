'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm Abdullah Arab – turning ideas into apps that matter.
      </h1>
      <p className="text-xl md:text-2xl text-white mb-8">
        Specialized in Flutter and React development, with a knack for creating intuitive user experiences and scalable software solutions.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="#projects">Explore My Work</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  )
}