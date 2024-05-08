"use client"
import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { motion } from "framer-motion"
import { childrenViewport, imageSlideUpVariant, parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions"

const collectionsGroup = [
    {
      image: "/images/example4.jpg",
      aspect: "sm:aspect-[3/5] md:aspect-[3/4.6] lg:aspect-[3/5]"
    },
    {
      image: "/images/example7.jpg",
      aspect: "aspect-[3/3.7] md:aspect-[3/4.6]"
    },
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
      aspect: "sm:aspect-[4/2] md:aspect-[4/3] aspect-[4/3]"
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
  return (
    <section className="boxWidth section relative">
      <div className="sm:w-[38%] md:w-[35%] sm:absolute sm:top-0 md:-top-3 left-8 overflow-hidden">
        <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={viewport} 
        className="flex justify-between sm:justify-start flex-row sm:flex-col gap-2 pr-4 mb-6 sm:mb-0">
          <div className="w-[90%] sm:w-full">
            <motion.span variants={slideUpVariant} className="section-title font-title">Koleksi Museum</motion.span>
            <motion.span variants={slideUpVariant} className="text-leading mt-2 sm:mt-0">Temukan beragam koleksi lukisan yang manarik dengan kisah misterius didalamnya.</motion.span>
          </div>

          <motion.div variants={slideUpVariant} className="hidden sm:flex justify-end">
            <Link href={`/collections`} className="flexCenter gap-1 font-medium">
            Lebih banyak <HiMiniArrowLongRight className="text-sm sm:text-xl -mb-[2px]" /></Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full flex justify-end gap-3 sm:gap-5 md:gap-7">
        <div className="basis-[27%] md:basis-[30%] hidden sm:grid grid-cols-1 h-fit gap-3 sm:gap-5 md:gap-7 sm:mt-56 md:mt-48">
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

        <div className="basis-1/2 sm:basis-[27%] md:basis-[30%] grid grid-cols-1 h-fit gap-3 sm:gap-5 md:gap-7">
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
        <div className="basis-1/2 sm:basis-[27%] md:basis-[30%] grid grid-cols-1 h-fit gap-3 sm:gap-5 md:gap-7">
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
      <motion.div
      variants={imageSlideUpVariant}
      initial="hidden"
      whileInView={"visible"}
      viewport={{
        once: true,
        margin: "0% 0% -20% 0%"  
      }}
      className="!flex sm:!hidden justify-center py-4"
      >
     <Link href={`/collections`} className="flexCenter gap-1 font-medium">
          Lebih banyak <HiMiniArrowLongRight className="text-sm sm:text-xl -mb-[2px]" /></Link>
      </motion.div>
    </section>    
  )
}

export default Collections
