'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: { [key: string]: number } = {}

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <motion.div
          className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft[interval]}
        </motion.div>
        <span className="text-xs uppercase">{interval}</span>
      </div>
    )
  })

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {timerComponents.length ? timerComponents : <span>Le temps est écoulé!</span>}
    </div>
  )
}

export default function AIFutureLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-orange-700 opacity-50"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Débloquez votre <span className="text-orange-500">potentiel</span>,
        </h1>
        <p className="text-xl mb-8">
        de résolution de problèmes et rejoignez le Challenge et mettez vos compétences à l&apos;épreuve.
        </p>

        <CountdownTimer targetDate="2024-10-11T14:00:00" />

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/astronaut.png"
            alt="AI Astronaut"
            width={256}
            height={256}
            className="object-contain mx-auto"
          />
        </motion.div>

        <motion.a
          href="https://www.hackerrank.com/orange-challenge"
          className="inline-block mt-8 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          En savoir plus
        </motion.a>
      </motion.div>

      <div className="absolute bottom-4 right-4 z-10">
        <Image
          src="/orange-digital-center-logo.png"
          alt="Orange Digital Center Logo"
          width={80}
          height={80}
        />
      </div>
    </div>
  )
}
