"use client"
import { useRouter } from "next-nprogress-bar"
import { useTickets } from "../provider/TicketsProvider"
import { useState } from "react"

const ButtonVerify = ({ticketId, className}:{ticketId:string, className?:string}) => {
  const router = useRouter()
  const { verifyTicket } = useTickets()
  const [disabled, setDisabled] = useState(false)
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setDisabled(true)
    const isSuccess = verifyTicket(ticketId)
    if(isSuccess) {
      router.push('verify/success')
    }else {
      router.push('verify/error')
    }
  }
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-blue-500 text-white
    font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >Verifikasi</button>
  )
}

export default ButtonVerify
