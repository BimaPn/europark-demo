"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { childrenViewport, parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions";

const Welcome = () => {

  return (
    <motion.section
    variants={parentVariant} 
    initial="hidden"
    whileInView={`visible`}
    viewport={viewport} 
    className="max-w-[1920px] mx-auto flexCenter gap-8 sm:gap-12 md:gap-16 section flex-col">
      <motion.div
      variants={parentVariant} 
      className="flex md:flex-row flex-col md:text-start text-center justify-between gap-3 sm:gap-6 md:gap-10 px-3 ss:px-4 sm:px-7 md:px-9
">
        <motion.div variants={slideUpVariant} className="basis-[60%] h-fit">
          <span className="section-title font-title">Selamat Datang Di Museum Seni Terbaik di Indonesia</span>
        </motion.div>
        <motion.div variants={slideUpVariant}  className="basis-[40%] leading-[32px] h-fit">
          <span className="text-base sm:text-lg md:text-xl">
          Europark adalah museum pertama di Indonesia yang memiliki seni lukisan legendaris dan terbaik di dunia. <span className="hidden sm:inline">Temukan koleksi lukisan yang beragam dan memiliki kisah yang unik</span></span>
        </motion.div>
      </motion.div>
    
      
      <div className="w-full px-1 sm:px-3">
        <motion.div 
        variants={{
          visible: { opacity:1, transition:{delay: .7} },
          hidden: {opacity:0}
        }}
        initial="hidden"
        whileInView={`visible`}
        viewport={{
          once: true,
          margin: "0% 0% -40% 0%"  
        }} 
        className="w-full">
          <motion.div 
          variants={{
            visible: {opacity: 1},
            hidden: {opacity: 0},
          }}
          className="bg-[url('/images/about/about_small.jpg')] sm:bg-[url('/images/about/about_wide.jpg')] background-cover w-full bg-fixed aspect-[3/4] xs:aspect-video md:aspect-[2.75/1] rounded-xl"
          />
        </motion.div>
      </div>


    </motion.section>
  )
}


export default Welcome
