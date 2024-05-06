"use client"
import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { motion, useAnimation, useInView } from "framer-motion"
import { childrenViewport, imageSlideUpVariant, parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions"
import { useEffect, useRef } from "react"

const collectionsGroup = [
    {
      image: "/images/example4.jpg",
      aspect: "aspect-[3/4]"
    },
    {
      image: "/images/example7.jpg",
      aspect: "aspect-[4/3.8]"
    },
    {
      image:"/images/example2.jpg",
      aspect: "aspect-[3.5/3]"
    }
  ]
const collectionsGroup2 = [
    {
      image: "/images/monalisa.jpg",
      aspect: "aspect-[3/4.2]"
    },
    {
      image: "/images/login.jpg",
      aspect: "aspect-[4/3]"
    },
    {
      image:"/images/example3.jpg",
      aspect: "aspect-[3/4.3]"
    }
  ]
const collectionsGroup3 = [
    {
      image: "/images/example5.jpg",
      aspect: "aspect-[4/3]"
    },
    {
      image: "/images/example6.jpg",
      aspect: "aspect-[3/4.3]"
    },
    {
      image:"/images/example.jpg",
      aspect: "aspect-[3/4.2]"
    }
  ]

const Collections = () => {
  const parent = useRef(null)
  const inView = useInView(parent,{margin: "0% 0% -60% 0%", once:false});
  useEffect(() => {
     if(inView) {
       document.getElementById("main")!.style.backgroundColor = "#FFFFFF"
     }
  },[inView]);

  return (
    <section ref={parent} className="boxWidth section relative">
      <div className="sm:w-[35%] sm:absolute -top-3 left-8 overflow-hidden">
        <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={viewport} 
        className="flex flex-col gap-2 pr-4">
          <motion.span variants={slideUpVariant} className="section-title">Koleksi Seni Museum</motion.span>
        
          <motion.span variants={slideUpVariant} className="text-leading">Temukan beragam koleksi lukisan yang manarik dengan kisah misterius didalamnya.</motion.span>
          <motion.div variants={slideUpVariant} className="flex justify-end">
            <Link href={`/collections`} className="flexCenter gap-1 font-medium">
            Lebih banyak <HiMiniArrowLongRight className="text-xl -mb-[2px]" /></Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full flex justify-end gap-7">
        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7 sm:mt-48">
          {collectionsGroup.map((item, i) => (
            <motion.div
            key={i}
            variants={imageSlideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={childrenViewport} 
            className={`${item.aspect} rounded-lg`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>

        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          {collectionsGroup2.map((item, i) => (
            <motion.div
            key={i}
            variants={imageSlideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={childrenViewport} 
            className={`${item.aspect} rounded-lg`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>
        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          {collectionsGroup3.map((item,i) => (
            <motion.div
            key={i}
            variants={imageSlideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={childrenViewport} 
            className={`${item.aspect} rounded-lg`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>
      </div>
    </section>    
  )
}

export default Collections
