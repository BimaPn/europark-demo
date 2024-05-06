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

const artists = [
{
  name: "J.M.W Turner",
  avatar: "/images/artists/turner.jpg",
  lifetime: "1775 M - 1851 M",
  artworks: artist1
},
{
  name: "Rembrandt",
  avatar: "/images/artists/rembrandt.jpg",
  lifetime: "1606 M - 1669 M",
  artworks: artist2
},
{
  name: "Vincent van Gogh",
  avatar: "/images/artists/vangogh.jpg",
  lifetime: "1853 M - 1890 M",
  artworks: artist1
},
{
  name: "Peter Paul Rubens",
  avatar: "/images/artists/peter.jpg",
  lifetime: "1577 M - 1640 M",
  artworks: artist2
}
]

const Artists = () => {
  const control = useAnimation();
  const parent = useRef(null)
  const inView = useInView(parent,{margin: "0% 0% -60% 0%", once:false});
  useEffect(() => {
     if(inView) {
       control.start("visible")
       document.getElementById("main")!.style.backgroundColor = "#000000"
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
          <motion.span variants={slideUpVariant} className="section-title">Lukisan dari Seniman Terbaik</motion.span>
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

const Card = () => {
  return (
    <div>

    </div>
  )
}

export default Artists
