import Link from "next/link"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const AdminNavbar = ({className}:{className?:string}) => {
  return (
    <nav className={`w-full flexBetween ss:px-4 sm:px-8 py-[12px] bg-white ${className}`}>
      <Link href={`/`} className="flexCenter gap-1 text-blue-600">
        <HiMiniBuildingLibrary className="text-[26px] -mt-[3px]"/>
        <span className="text-[20px] ss:text-[22px] font-bold">EuroPark</span>
      </Link>
      <Link href={`/admin/dashboard/home`} className="text-blue-600 hidden ss:block">Dashboard</Link>
    </nav>
  )
}

export default AdminNavbar 
