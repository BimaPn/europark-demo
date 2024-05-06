"use client"
import { createContext, useState } from "react"
import { IoIosCheckmarkCircle } from "react-icons/io"
import { IoCloseCircleSharp } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion"

export const alertMessageContext = createContext<AlertMessageProvider | null>(null)

export type AlertMessageProvider = {
  message: AlertMessageProps | null
  setAlert: (message: AlertMessageProps) => void
}

type AlertMessageProps = {
  success: boolean,
  message: string
}

const AlertMessage = ({children}:{children:React.ReactNode}) => {
  const [message, setMessage] = useState<AlertMessageProps | null>(null)

  const setAlert = (message: AlertMessageProps) => {
    setMessage(message)
    const timeout = setTimeout(() => {
      setMessage(null)
    }, 3200)

    return () => {
      clearTimeout(timeout);
    };
  }
  return (
    <alertMessageContext.Provider value={{ message, setAlert }}>
    {children}

    <AnimatePresence>
      {message && <Overlay message={message} />}
    </AnimatePresence>
    </alertMessageContext.Provider>
  )
}

const Overlay = ({message}:{message:AlertMessageProps}) => {
  return (
    <motion.div 
    initial={{ x: 1000 }} 
    animate={{ x: 0 }}
    exit={{ x: 1000 }}
    transition={{ duration: .5 }}
    className={`fixed top-6 right-6 flex items-center gap-2 px-3 py-3 text-white rounded-lg ${message.success ? 'bg-green-400' : 'bg-red-400'}`}>
      {message.success ? (
        <IoIosCheckmarkCircle className="text-[32px]" />
      ) : (
        <IoCloseCircleSharp className="text-[32px]" />
      )}
      <span className="font-semibold">{message.message}</span>
    </motion.div>  
  )
}

export default AlertMessage
