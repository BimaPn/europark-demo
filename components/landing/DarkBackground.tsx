"use client"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import Footer from "../Footer";
import TicketSection from "./TicketSection";
import Artists from "./Artists";

const DarkBackground = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const inView = useInView(parentRef,{margin: "0% 0% -50% 0%", once:false});
  useEffect(() => {
     if(inView) {
       document.getElementById("main")!.style.backgroundColor = "#000000"
     } else{
       document.getElementById("main")!.style.backgroundColor = "#FFFFFF"
     }
  },[inView]);

  return (
    <div ref={parentRef}>
      <Artists />
      <TicketSection />
      <Footer />
    </div>
  )
}

export default DarkBackground
