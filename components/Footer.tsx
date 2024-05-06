"use client"
import { collections, navigations, socialMedia } from "@/constants/list"
import { Box, Center, Icon } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
  return (
  <footer className="bg-black pb-5 pt-6 ss:pt-10 px-3 ss:px-4 sm:px-6 text-white">
    <Box className="boxWidth flex flex-col gap-4 md:gap-12">
      <Box className="flex ss:justify-normal justify-between flex-wrap gap-3 ss:gap-0 mb-6 ss:mb-8 md:mb-12">
        <div className="md:w-1/4 ss:w-1/3 w-full">
          <Link href="/" className="font-bold text-3xl md:text-4xl flex items-center gap-1 mb-5 ss:m-0">
              EuroPark
          </Link>
        </div>
        <Box className="w-[40%] ss:w-1/3 md:w-1/4">
          <span className="font-medium">Koleksi</span>
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-300">
            {collections.map(item => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
            ))}
          </ul>
        </Box>
        <Box className="w-[40%] ss:w-1/3 md:w-1/4">
          <span className="font-medium">Navigasi</span>
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-300">
            {navigations.map(item => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
            ))}
          </ul>
        </Box>
        <Box className="md:w-1/4 flex md:items-normal items-center md:items-start flex-col w-full md:m-0 ss:mt-10 mt-5">
          <span className="font-medium">Follow Us</span>
          <ul className="flex items-center justify-start gap-4 mt-2">
            {socialMedia.map(item => (
            <li key={item.link}>
              <Link href={item.link}>
                <Icon as={item.icon} className="text-5xl" />
              </Link>
            </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Center className="text-sm text-center">
        Created at 2023 By Mr.B Citamiang
      </Center>
    </Box>
  </footer>
  )
}

export default Footer
