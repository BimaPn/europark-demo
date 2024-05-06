import { FiHome } from "react-icons/fi";
import { IoTicketOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

export const dashboardNavigations = [
  { 
    name: 'Dashboard',
    icon: <FiHome className="text-lg" />,
    path: 'home'
  },
  {
    name: 'Tiket',
    icon: <IoTicketOutline className="text-[19px]" />,
    path: 'tickets'
  },
  { 
    name: 'Pengunjung',
    icon: <LuUsers className="text-[25px]" />,
    path: 'visitors'
  },
  { 
    name: 'Koleksi',
    icon: <MdOutlineCollectionsBookmark className="text-[21px]" />,
    path: 'collections'
  },
]
