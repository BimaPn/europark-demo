import Link from "next/link"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const AdminNavbar = ({className}:{className?:string}) => {
  return (
    <nav className={`w-full flexBetween px-8 py-4 bg-white ${className}`}>
      <div className="font-semibold flexCenter gap-1 text-blue-700">
        <HiMiniBuildingLibrary className="text-[26px] -mt-[3px]"/>
        <span className="text-xl">EuroPark</span>
      </div>
      <Link href={`/admin/dashboard/home`} className="text-blue-600">Dashboard</Link>
    </nav>
  )
}

export default AdminNavbar 
