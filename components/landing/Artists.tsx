"use client"
import Image from "next/image"
import ArtistCard from "../ArtistCard"
import { motion, useAnimation, useInView } from "framer-motion"
import { 
  cardSlideUpVariant,
  cardsParentVariant,
  childrenViewport,
  parentVariant,
  slideUpVariant,
  viewport
  } from "@/constants/framerOptions"
import { useEffect, useRef } from "react"
import { artist1, artist2 } from "@/constants/artistArtworks"
import { artists } from "@/constants/collections"

const Artists = () => {
  const control = useAnimation();
  const parent = useRef(null)
  const inView = useInView(parent,{margin: "0% 0% -50% 0%", once:false});
  useEffect(() => {
     if(inView) {
       control.start("visible")
     }else{
       control.start("hidden")
     }
  },[inView, control]);

  return (
    <motion.section
    ref={parent}
    variants={cardsParentVariant}
    initial="hidden"

    animate={control}
    className="boxWidth section !bg-transparent flex flex-col gap-4 xs:gap-1 sm:gap-6 text-white">
      <div 
      className="min-h-[150px] xs:min-h-[130px] ss:min-h-[100px] sm:min-h-[100px] overflow-hidden relative">
        <div className="flex flex-col gap-1 absolute top-0 left-0">
          <motion.span variants={slideUpVariant} className="section-title font-title">Lukisan dari Seniman Terbaik</motion.span>
          <motion.span variants={slideUpVariant}>Temukan lukisan-lukisan dari seniman terbaik didunia</motion.span>
        </div>

      </div>

      <motion.div
      variants={parentVariant} 
      viewport={childrenViewport}
      initial="hidden"
      whileInView={`visible`}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {artists.map((item, i) => (
          <motion.div key={i} variants={cardSlideUpVariant} 
          className="cursor-pointer"
            ><ArtistCard artworks={item.artworks} name={item.name} avatar={item.avatar} lifetime={item.lifetime} />
          </motion.div >  
        ))} 
      </motion.div>  
    </motion.section>
  )
}


export default Artists
