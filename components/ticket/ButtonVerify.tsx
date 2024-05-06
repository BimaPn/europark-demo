"use client"
import ApiClient from "@/app/api/axios/ApiClient"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ButtonVerify = ({ticketId, className}:{ticketId:string, className?:string}) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const router = useRouter()
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setDisabled(true)
    ApiClient(true).post(`/api/tickets/${ticketId}/verify`)
    .then((res) => {
      router.push("verify/success")
    })
    .catch((err) => {
      router.push("verify/error")
    })
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
