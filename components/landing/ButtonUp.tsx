"use client"
import { useEffect, useState } from "react";
import { HiMiniArrowUp } from "react-icons/hi2"

const ButtonUp = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const isAtScreenBottom = currentScrollPos + window.innerHeight >= document.body.offsetHeight 
    const isScrollingUp = prevScrollPos > currentScrollPos
setButtonVisible((isScrollingUp || isAtScreenBottom) && currentScrollPos > window.innerHeight);
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    setPrevScrollPos(window.pageXOffset)
  },[])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[prevScrollPos])
  
  const scrollUp = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  return (
    <div className={`fixed ${isButtonVisible ? "bottom-0":"-bottom-32"} right-0 z-[2000] px-8 py-5 button-up-transition delay-100`}>
      <button 
      onClick={scrollUp}
      className="bg-primary text-black text-[26px] p-2 rounded-full shadow-xl">
        <HiMiniArrowUp />
      </button>
    </div>
  )
}

export default ButtonUp
