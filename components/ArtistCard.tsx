"use client"
import Image from "next/image"
import { motion,AnimatePresence, useTransform, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export type Artwork = {
  id: string | number
  image: string
}
export type ArtistInfo = {
  name: string
  avatar: string
  lifetime: string
  artworks: Artwork[]
}

const ArtistCard = ({name, avatar, ...rest}:ArtistInfo & {className?:string}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShowCotent, setIsShowContent] = useState(false)
  const [position, setPosition] = useState(false)

  const checkScreen = () => {
    if(!isOpen) return "260%"
    const screenRatio = window.innerWidth / window.innerHeight
    const isLessRatio = screenRatio < 16/10
    if(isLessRatio) return `${window.innerHeight * 2.6}px`
    else return "100%"
  }
  const delayChange = () => {
    if(!isOpen && !isShowCotent) {
      setIsOpen(!isOpen)
      delayContent()
    }
    if(isOpen && isShowCotent) {
      setIsShowContent(!isShowCotent)
      delayParent() 
    }
  }
  const delayParent = () => {
    const timeout = setTimeout(() => {
      setIsOpen(!isOpen)
    },600)
    return () => clearTimeout(timeout)
  }
  const delayContent = () => {
    const timeout = setTimeout(() => {
      setIsShowContent(!isShowCotent)
    },600)
    return () => clearTimeout(timeout)
  }
  const changePosition = () => {
    setPosition(isOpen ? true : false)
  }
  return (
    <motion.div
    layout
    className={`flexCenter overflow-hidden ${rest.className}
    ${isOpen ? "w-screen h-screen fixed top-0 left-0 !z-[3000] rounded-none":"relative rounded-lg"} ${position ? "z-[3000]":"z-[50]"}
    `}
    transition={{ duration: .6}}
    onClick={delayChange}
    >
      <motion.img src={avatar} layout alt='example'
      className={`aspect-[16/10]`}
      animate={{ filter:`brightness(${isOpen ? "65%":"100%"})` }}
      transition={{ duration: .6}}
      onAnimationComplete={changePosition}
      style={{ minWidth: checkScreen() }}
      />
      <AnimatePresence>
        {isShowCotent && (
          <ArtistCardContent name={name} avatar={avatar} lifetime={rest.lifetime} artworks={rest.artworks} /> 
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ArtistCardContent = ({name, avatar, lifetime, artworks}:{name:string, avatar: string, lifetime: string, artworks: Artwork[]}) => {
   useEffect(() => {
     document.body.style.overflow = "hidden"
     return () => {
       document.body.style.overflow = "auto"
     }
   },[])

  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-end text-white">
      <div className='w-full h-[50%] sm:h-[52%] flex sm:items-center justify-between px-4 py-12 sm:p-0 sm:justify-center flex-col sm:flex-row gap-8'>
        <motion.div
        transition={{ duration: .4, staggerChildren: .3}}
        initial={{ y: -80,opacity:0 }}
        animate={{ y:0,opacity:1 }}
        exit={{ y:-80 }}
        className='sm:basis-1/2 flex sm:pl-8 justify-end sm:gap-3 flex-col'>
          <span className='font-semibold text-[46px]'>{name}</span>
          <span className='font-medium text-sm sm:text-base'>{lifetime}</span>
        </motion.div>

        <motion.div
        transition={{ duration: .6 }}
        initial={{ x:500 }}
        animate={{ x:0 }}
        exit={{ x:500 }}
        className='sm:basis-1/2 flex items-center gap-5 overflow-x-auto'>
          {artworks.map((item, i) => (
            <ContentCard key={i} link={`/collections/${item.id}`} image={item.image} className='min-w-[33.333%] xs:min-w-[20%] sm:min-w-[25%]' />
          ))}
        </motion.div>

      </div>   
    </motion.div>
  )
}

const ContentCard = ({link, image, className}:{link:string,image:string, className?:string}) => {
  return (
    <Link href={link} className={`aspect-[3/4.5] relative ${className}`}>
      <Image 
      src={image} 
      alt={"example"}
      fill
      style={{objectFit:"cover"}}
      className='rounded-lg'
      />
    </Link> 
  )
}

export default ArtistCard
