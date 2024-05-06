"use client"
import { useContext, useEffect } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import ButtonNavigation from "./ButtonNavigation"
import TicketInformationForm from "./TicketInformationForm"
import TicketPreview from "./TicketPreview"
import TicketCheckout from "./TicketCheckout"

const StartPage = () => {
  const { currentPage, setIsDone } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  useEffect(() => {
    setIsDone(false)
  },[])
  return (
  <>
  {currentPage == 1 && <TicketInformationForm />}
  {currentPage == 2 && <TicketPreview />}
  {currentPage == 3 && <TicketCheckout />}
  </>
  )
}

export default StartPage
