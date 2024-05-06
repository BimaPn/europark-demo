"use client"
import { ticketQuantities } from "@/constants/ticket";
import { createContext, useState } from "react"

export const ticketPurchaseContext = createContext<TicketPurchaseContext | null>(null);

const TicketPurchaseProvider = ({children}:{children:React.ReactNode}) => {
  const [ticketInformationData, setTicketInformationData] = useState<TicketInformationForm>({})
  const [ticketCheckoutData, setTicketCheckoutData] = useState<TicketCheckoutForm>({
    email: "",
    name: "",
    whatsapp_number: "",
    identity_card_picture: "",
  })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxQuantity, setMaxQuantity] = useState<number>(15)
  const [ticketQuantity, setTicketQuantity] = useState<TicketQuantity[]>(ticketQuantities)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
  const [isDone, setIsDone] = useState<boolean>(false)

  const resetFormData = () => {
    setTicketQuantity([])
    setTicketInformationData({})
    setTicketCheckoutData({
      email: "",
      name: "",
      whatsapp_number: "",
      identity_card_picture: "",
    })
    setCurrentPage(1)
  }

  const getTicketQuantity = () => {
    let result: ticketQuantity[] = []
    ticketQuantity.forEach((quantity) => {
      if(quantity.quantity > 0) {
        result.push({
          type: quantity.type,
          quantity: quantity.quantity,
          total_price: (quantity.quantity * quantity.price)
        })
      }
    })
    return result
  }
  return (
    <ticketPurchaseContext.Provider
    value={{ ticketInformationData, setTicketInformationData, ticketQuantity, setTicketQuantity,
    setTicketCheckoutData, ticketCheckoutData, currentPage, setCurrentPage, maxQuantity, setMaxQuantity,
    disableSubmit, setDisableSubmit, isDone, setIsDone, resetFormData, getTicketQuantity }}>
      {children}
    </ticketPurchaseContext.Provider>
  )
}

export default TicketPurchaseProvider
