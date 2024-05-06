"use client"
import { Box, BoxProps, CloseButton, Flex, FlexProps } from "@chakra-ui/react"
import { HiMiniBuildingLibrary } from "react-icons/hi2"
import { usePathname } from 'next/navigation'
import { LuUsers } from "react-icons/lu"
import { IoTicketOutline } from "react-icons/io5"
import { MdOutlineCollectionsBookmark } from "react-icons/md"
import { AiOutlineDollar } from "react-icons/ai"
import Link from "next/link"
import { FiHome } from "react-icons/fi"

interface LinkItemProps {
  name: string
  icon: React.ReactNode 
  path: string
}

interface NavItemProps extends FlexProps {
  icon: React.ReactNode
  path: string
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}
const dashboardNavigations = [
  { 
    name: 'Dashboard',
    icon: <FiHome className="text-lg" />,
    path: 'home'
  },
  {
    name: 'Tiket',
    icon: <IoTicketOutline className="text-[20px]" />,
    path: 'tickets'
  },
  { 
    name: 'Koleksi',
    icon: <MdOutlineCollectionsBookmark className="text-[21px]" />,
    path: 'collections'
  },
]

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const pathname = usePathname()
  return (
    <Box
      transition="3s ease"
      className={`bg-white !px-2`}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex  mx="4" justifyContent="space-between" className="my-6 !items-center">
        <div className="flex items-center gap-2">
            <HiMiniBuildingLibrary className="text-3xl" />
            <span className="text-xl font-semibold">EuroPark</span>
        </div>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <div className="flex flex-col gap-1">
        {dashboardNavigations.map((link) => (
          <NavItem 
          key={link.name}
          icon={link.icon}
          path={link.path}
          className={`${pathname.includes(link.path) && "bg-blue-500 font-medium text-white"}`} 
          >
            {link.name}
          </NavItem>
        ))}
      </div>
    </Box>
  )
}

const NavItem = ({ icon, children, path, className, }: {className?:string} & NavItemProps) => {
  return (
    <Link href={`/admin/dashboard/${path}`}>
      <div
      className={`flex items-center gap-1 rounded-lg px-2 py-2 mx-2 cursor-pointer hover:bg-blue-400 hover:text-white ${className}`}
        >
        <div className="w-8 aspect-square flexCenter">
          {icon}
        </div>
        {children}
      </div>
    </Link>
  )
}

export default Sidebar
