"use client"
import { navigations } from "@/constants/list"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const SidebarNav = ({isDark=false}:{isDark?:boolean}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible"
  },[isOpen])

  const checkColor = () => {
    if(isDark) return "white"
    return isOpen ? "white" : "black"
  }

  const lineLeftTransition = {
    rotate: isOpen ? "45deg" : "0deg",
    backgroundColor: checkColor(),
    transition : {
      duration: .3,
      damping: 1
    }
  }
  const lineRightTransition = {
    rotate: isOpen ? "-45deg" : "0deg",
    backgroundColor: checkColor(),
    transition : {
      duration: .3,
      damping: 1
    }
  }

  return (
    <div className="w-[25px] aspect-square relative z-[2000]">
      <button onClick={() => setIsOpen(prev => !prev)} className='absolute top-0 left-0 z-[2000] w-[21px] aspect-[4/3.3] grid grid-cols-1 grid-rows-3 '>
        <motion.div
        animate={lineLeftTransition} 
        className='bg-black min-w-full h-1/2 rounded-full origin-top-left'/>
        <motion.div animate={{ opacity: isOpen ? "0" : "1"  }} className={`${isDark ? "bg-white" : "bg-black"} min-w-full h-1/2 rounded-full self-center`}/>
        <motion.div animate={lineRightTransition}
        className='bg-black min-w-full h-1/2 rounded-full origin-bottom-left self-end'/>
      </button>
      <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
          initial={{ translateX: "100%" }} 
          animate={{ translateX: "0%", transition:{duration:.4, damping:1} }} 
          exit={{ translateX: "100%", transition:{duration:.4, damping:1}  }} 
          className="w-[75vw] h-screen fixed top-0 right-0 z-[1600] bg-black"
          >
            <NavList />
          </motion.div>
          <motion.div 
          initial={{ opacity: "0" }} 
          animate={{ opacity: ".5", transition:{duration:.4 } }} 
          exit={{ opacity: "0" }}
          onClick={() => setIsOpen(false)} className="fixed inset-0 z-[1000] bg-black" />
          </>
      )}
      </AnimatePresence>
    </div>
  )
}

const NavList = () => {
  return (
    <div className="px-5 py-12 flex flex-col gap-10">
      <ul className="flex flex-col gap-1 font-semibold text-white">
      {navigations.map((item,i) => (
        <li key={i} className="border-b border-gray-600 py-3 hover:text-primary">
          <Link href={item.link}>{item.label}</Link>
        </li>
      ))}
      </ul>
      <Link
      href={`/tickets/buy`}
      className="block text-center py-[6px] font-medium rounded-lg bg-primary hover:opacity-75"
      >
      <span className="!text-black">Beli Tiket</span>
      </Link>
    </div>
  )
}

export default SidebarNav
