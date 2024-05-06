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
    className="boxWidth flexCenter gap-8 sm:gap-12 md:gap-16 section flex-col">
      <motion.div
      variants={parentVariant} 
      className="flex md:flex-row flex-col md:text-start text-center justify-between gap-3 sm:gap-6 md:gap-10">
        <motion.div variants={slideUpVariant} className="basis-[60%] h-fit">
          <span className="section-title">Selamat Datang Di Museum Seni Terbaik di Indonesia</span>
        </motion.div>
        <motion.div variants={slideUpVariant}  className="basis-[40%] leading-[32px] h-fit">
          <span className="text-base sm:text-lg md:text-xl">Europark adalah museum pertama di Indonesia yang memiliki seni lukisan legendaris dan terbaik di dunia. Memiliki banyak koleksi lukisan yang beragam dan memiliki kisah yang unik</span>
        </motion.div>
      </motion.div>

      <motion.div 
      variants={parentVariant}
      initial="hidden"
      whileInView={`visible`}
      viewport={childrenViewport} 
      className="w-full flexCenter gap-3 md:gap-5">
        <motion.div 
        variants={slideUpVariant}
        className="bg-[url('/images/about/1.jpg')] background-cover basis-[31.5%] shadow aspect-[10/16] sm:aspect-[3/4] md:aspect-square rounded-lg"/>
        <motion.div 
        variants={slideUpVariant}
        className="bg-[url('/images/about/2.jpg')] bg-no-repeat bg-cover bg-center basis-1/3 shadow aspect-[10/16] sm:aspect-[3/4] md:aspect-square rounded-lg"/>
        <motion.div 
        variants={slideUpVariant}
        className="bg-[url('/images/about/3.jpg')] backgroud-cover basis-[31.5%] aspect-[10/16] sm:aspect-[3/4] md:aspect-square shadow rounded-lg"/>
      </motion.div>

    </motion.section>
  )
}


export default Welcome
