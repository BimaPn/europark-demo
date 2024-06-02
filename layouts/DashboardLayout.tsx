import TopSideBar from '@/components/dashboard/TopSideBar'
import { authUser } from '@/constants/auth'
import { Box, useColorModeValue } from '@chakra-ui/react'

const DashboardLayout = async ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-screen bg-sky-100'>
      <TopSideBar name={authUser.name} avatar={authUser.avatar} />
      <Box ml={{ base: 0, md: 60 }} className='ss:!p-4 !pt-1'>
        {children}
      </Box>
    </div>
  )
}

export const PageTitle = ({title, className}:{title:string, className?:string}) => {
  return (
    <div className={`mb-4 sm:block hidden text-slate-600 ${className}`}>
      <h1 className='text-[28px] font-semibold'>{title}</h1>
    </div>
  )
}

export default DashboardLayout
