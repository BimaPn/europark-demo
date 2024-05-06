"use client"
import { createContext, useState } from "react"

export const ticketPurchaseContext = createContext<TicketPurchaseContext | null>(null);

const TicketPurchaseProvider = ({children}:{children:React.ReactNode}) => {
  const [ticketInformationData, setTicketInformationData] = useState<TicketInformationForm>({})
  const [ticketCheckoutData, setTicketCheckoutData] = useState<TicketCheckoutForm>({
    email: "",
    name: "",
    whatsapp_number: "",
    identity_card_picture: null,
  })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxQuantity, setMaxQuantity] = useState<number>(0)
  const [ticketQuantity, setTicketQuantity] = useState<TicketQuantity[]>([])
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
  const [isDone, setIsDone] = useState<boolean>(false)

  const resetFormData = () => {
    setTicketQuantity([])
    setTicketInformationData({})
    setTicketCheckoutData({
      email: "",
      name: "",
      whatsapp_number: "",
      identity_card_picture: null,
    })
    setCurrentPage(1)
  }
  return (
    <ticketPurchaseContext.Provider
    value={{ ticketInformationData, setTicketInformationData, ticketQuantity, setTicketQuantity,
    setTicketCheckoutData, ticketCheckoutData, currentPage, setCurrentPage, maxQuantity, setMaxQuantity,
    disableSubmit, setDisableSubmit, isDone, setIsDone, resetFormData }}>
      {children}
    </ticketPurchaseContext.Provider>
  )
}

export default TicketPurchaseProvider
