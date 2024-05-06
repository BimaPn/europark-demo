import Link from "next/link"

const Hero = () => {
  return (
    <section className="fixed top-0 left-0 right-0 h-screen flexCenter overflow-hidden">
        <video autoPlay src="/videos/hero.mp4" muted loop className="absolute top-0 left-0 object-cover min-w-full min-h-full brightness-[.4]"/>
      <Content className="absolute left-0 right-0 z-[2000]" />
    </section>
  )
}

export const Content = ({className}:{className?:string}) => {
  return (
    <div className={`flexCenter text-white ${className}`}>
      <div className="flexCenter flex-col gap-6">
        <span className="w-[90%] sm:w-[70%] text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[58px] text-center">Jelajahi Dunia Melalui Seni Kanvas</span>
        <Link href="/collections" className="w-28 md:w-32 flexCenter py-[6px] border-2 border-white rounded-lg">
        Jelajahi
        </Link>
      </div>
    </div>
  )
}

export default Hero
