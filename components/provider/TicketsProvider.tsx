"use client"
import { tickets as initial } from "@/constants/ticket"
import { createContext, useContext, useState } from "react"

type TicketsContext = {
  tickets: Ticket[]
  addTicket: (ticket: Ticket) => void
}

const ticketsContext = createContext<TicketsContext | null>(null)

const TicketsProvider = ({children}:{children: React.ReactNode}) => {
  const [tickets, setTickets] = useState<Ticket[]>(initial)
  
  const addTicket = (ticket: Ticket) => {
    setTickets((prev) => [ticket, ...prev])
  }

  return (
    <ticketsContext.Provider value={{ tickets, addTicket }}>
      {children}
    </ticketsContext.Provider>
  )
}

export const useTickets = () => {
  return useContext(ticketsContext) as TicketsContext
}

export default TicketsProvider
