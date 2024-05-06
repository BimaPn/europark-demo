import { navigations } from "@/constants/list"
import Link from "next/link"
import SidebarNav from "./SidebarNav"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const Navbar = ({className, isDark = false}:{className?:string, isDark?:boolean}) => {
  return (
      <header 
      className={`boxWidth px-3 ss:px-6 py-[14px] ${className}`}>
        <nav className="flexBetween">
          <Link href={`/`} className="flexCenter gap-1">
            <HiMiniBuildingLibrary className="text-[26px] -mt-[3px]"/>
            <span className="text-[20px] ss:text-[22px] font-bold">EuroPark</span>
          </Link>
          <div className="hidden ss:flex items-center gap-5">
            <ul className="flexCenter gap-4 sm:gap-6 items-center font-semibold">
              {navigations.map((item, i) => (
                <li key={i} className='hover:text-primary'>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <Link
            href={`/tickets/buy`}
            className="px-3 py-[6px] font-medium rounded-lg bg-primary hover:opacity-75"
            >
            <span className="!text-black">Beli Tiket</span>
            </Link>
          </div>
          <div className={`ss:hidden block`}>
            <SidebarNav isDark={isDark} />
          </div>
        </nav>
      </header>
  )
}

export default Navbar

