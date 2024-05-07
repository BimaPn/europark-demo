"use client"
import { createContext, useContext, useState } from "react"

type ShowButtonContext = {
  isOpen: boolean
  changeOpen: (condition: boolean) => void
}
const showButtonContext = createContext<ShowButtonContext | null>(null)

const ShowButtonUp = ({children}:{children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const changeOpen = (condition: boolean) => {
    setIsOpen(condition)
  }
  return (
    <showButtonContext.Provider value={{ isOpen, changeOpen }}>
      {children}
    </showButtonContext.Provider>
  )
}

export const useShowButton = () => {
  return useContext(showButtonContext) as ShowButtonContext
}

export default ShowButtonUp
