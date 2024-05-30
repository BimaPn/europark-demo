"use client"
import Image from "next/image"
import { motion,AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useShowButton } from "./provider/ShowButtonUp"

export type Artwork = {
  id: string
  image: string
  name: string
  year: string
}
export type ArtistInfo = {
  name: string
  avatar: string
  lifetime: string
  artworks: Artwork[]
}

const ArtistCard = ({name, avatar, ...rest}:ArtistInfo & {className?:string}) => {
  const { changeOpen } = useShowButton()
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
      changeOpen(false)
    }
    if(isOpen && isShowCotent) {
      setIsShowContent(!isShowCotent)
      delayParent() 
      changeOpen(true)
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
    className={`flexCenter ${rest.className} overflow-hidden
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [x, setX] = useState<string>("0%")
   useEffect(() => {
     document.body.style.overflow = "hidden"
     containerRef.current?.addEventListener("scroll",(e) => {
      if(containerRef.current) {
        const scrollTop = containerRef.current.scrollTop
        const scrollHeight = containerRef.current.scrollHeight
        const clientHeight = containerRef.current.clientHeight
        const scrollPercentage = Math.floor((scrollTop / (scrollHeight-clientHeight)) * 80)
        setX(`-${scrollPercentage}%`)
      }
     })
     return () => {
       document.body.style.overflow = "auto"
     }
   },[])

  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    ref={containerRef}
    className="absolute inset-0 text-white overflow-auto">
      <div className='w-full h-[180vh] ss:h-[240vh] pl-3 pr-0 sm:px-4 sm:p-0 relative'>
        <div className="sticky top-0 w-full h-screen flex items-end">
          <div className="w-full h-fit flex flex-col sm:flex-row">
            <motion.div
            transition={{ duration: .4, staggerChildren: .3}}
            initial={{ y: -80,opacity:0 }}
            animate={{ y:0,opacity:1 }}
            exit={{ y:-80 }}
            className='sm:basis-1/2 flex justify-center pb-6 xs:pb-8 sm:pb-14 sm:pl-12 lg:pl-16 xl:pl-20 flex-col'>
              <span className='font-semibold text-[30px] xs:text-[35px] sm:text-[35px] md:text-[40px] font-title lg:text-[46px]'>{name}</span>
              <span className='font-medium text-sm sm:text-base font-title'>{lifetime}</span>
            </motion.div>

            <motion.div
            transition={{ duration: .6 }}
            initial={{ x:500 }}
            animate={{ x:0 }}
            exit={{ x:500 }}

            className='sm:basis-[60%] flex pb-8 gap-5 overflow-hidden h-fit'>
              <motion.div style={{ x }}  className="flex flex-nowrap gap-4 sm:gap-6">
                {artworks.map((item, i) => (
                  <ContentCard 
                  key={i} 
                  link={`/collections/${item.id}`} 
                  image={item.image}
                  name={item.name}
                  year={item.year}
                  className='w-40 sm:w-44 md:w-52 xl:w-60' 
                  />
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>   
    </motion.div>
  )
}

const ContentCard = ({link, image, name, year, className}:{link:string,image:string, name: string, year: string, className?:string}) => {
  return (
    <div className="flex flex-col gap-1 group">
      <Link href={link} className={`aspect-[3/4.5] overflow-hidden rounded-lg relative ${className}`}>
        <Image 
        src={image} 
        alt={"example"}
        fill
        style={{objectFit:"cover"}}
        className='rounded-lg group-hover:scale-110 group-hover:brightness-90 transition-transform !duration-500'
        />
      </Link> 
      <div className="flex flex-col font-title">
      <span className="font-medium sm:text-lg">{name}</span>
      <span className="font-medium text-xs">{year}</span>
      </div>
    </div>

  )
}

export default ArtistCard
