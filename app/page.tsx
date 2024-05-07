"use server"
import Hero from "@/components/landing/Hero"
import Welcome from "@/components/landing/Welcome"
import Collections from "@/components/landing/Collections"
import Artists from "@/components/landing/Artists"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TicketSection from "@/components/landing/TicketSection"
import ButtonUp from "@/components/landing/ButtonUp"
import ShowButtonUp from "@/components/provider/ShowButtonUp"
import DarkBackground from "@/components/landing/DarkBackground"

const Home = () => {
  return (
    <ShowButtonUp>
      <ButtonUp />
      <main>
        <div className="relative h-screen overflow-hidden">
          <Navbar isDark className="fixed top-0 left-0 right-0 z-[20] text-white" />
          <Hero />  
        </div>
        <div id="main" className="relative z-[50] bg-white landing-padding-top">
          <Welcome />
          <Collections />
          <DarkBackground />
        </div>
      </main>
    </ShowButtonUp>
  )
}

export default Home
