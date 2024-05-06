"use client"
import { tickets as initial } from "@/constants/ticket"
import { createContext, useContext, useState } from "react"

type TicketsContext = {
  tickets: Ticket[]
  addTicket: (ticket: Ticket) => void
  searchTickets: (query: string) => Ticket[] 
  findTicket: (ticketId: string) => Ticket | null
}

const ticketsContext = createContext<TicketsContext | null>(null)

const TicketsProvider = ({children}:{children: React.ReactNode}) => {
  const [tickets, setTickets] = useState<Ticket[]>(initial)
  
  const addTicket = (ticket: Ticket) => {
    setTickets((prev) => [ticket, ...prev])
  }
  
  const searchTickets = (query: string) => {
    const regex = new RegExp(query, 'i'); 
    return tickets.filter(ticket => regex.test(ticket.name));
  }

  const findTicket = (ticketId: string) => {
    const result = tickets.find((ticket) => ticket.id === ticketId)
    if(!result) {
      return null
    }
    return result
  }

  return (
    <ticketsContext.Provider value={{ tickets, addTicket, searchTickets, findTicket }}>
      {children}
    </ticketsContext.Provider>
  )
}

export const useTickets = () => {
  return useContext(ticketsContext) as TicketsContext
}

export default TicketsProvider
