'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-sand">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="focus-ring flex h-20 w-20 items-center justify-center rounded-full bg-sand/90 text-ocean-deep shadow-soft"
          aria-label="Play experience video"
        >
          <Play className="ml-1 h-8 w-8" fill="currentColor" />
        </motion.button>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl"
        >
          Feel the Beach. Taste the Moment. Ride the Waves.
        </motion.h2>
      </div>
    </section>
  )
}
