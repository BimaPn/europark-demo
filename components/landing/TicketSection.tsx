"use client"
import { ticketSectionTitle } from "@/constants"
import { parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const TicketSection = () => {
  const slideUpWordsVariant = {
    visible: {y:0,opacity:1,transition:{duration:.4}},
    hidden: {y:100},
  }
  return (
    <motion.section className="flexCenter flex-col section text-white section gap-7 sm:gap-12">
      <motion.div
      variants={parentVariant} 
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="w-[90%] sm:w-[75%] flexCenter flex-col gap-5 overflow-hidden pb-2">
        <div 
        className="mx-auto flex flex-wrap justify-center gap-[10px] text-center section-title !leading-[32px] sm:!leading-[44px]">
          {ticketSectionTitle.map((item,i) => (
            <motion.span
            variants={slideUpWordsVariant}
            className="block opacity-0" key={i}>{item}</motion.span>
          ))}
        </div>
        <motion.div variants={slideUpVariant} className="text-center"> 
        Jelajahi lukisan-lukisan dengan beragam cerita unik yang misterius didalamnya. Buruan sebelum tiket kehabisan!
        </motion.div>
        <motion.div variants={slideUpVariant} className="mt-3 sm:mt-6">
            <Link
            href={`/tickets/buy`}
            className="px-5 py-2 font-medium rounded-lg bg-primary hover:opacity-50"
            >
            <span className="!text-black">Beli Tiket</span>
            </Link>
        </motion.div>
      </motion.div>
      
      <motion.div
      variants={parentVariant} 
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="min-w-full relative flex gap-8 overflow-hidden scroll-horizontal-parent">
        <span className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[3px] bg-primary" />

        <div className="min-w-full flex gap-8 horizontal-scroll-animation">
          {[1,2,3].map((item) => (
            <div key={item} className="w-1/2 aspect-square relative">
              <Image 
              src={`/images/gallery/${item}.jpg`}
              fill 
              alt="museum picture"
              className="object-cover rounded-xl" />
            </div>
          ))}
        </div>

        <div className="min-w-full flex gap-8 horizontal-scroll-animation">
          {[1,2,3].map((item) => (
            <div key={item} className="w-1/2 aspect-square relative">
              <Image 
              src={`/images/gallery/${item}.jpg`}
              fill 
              alt="museum picture"
              className="object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default TicketSection
