"use client"
import { pricing } from "@/constants/pricing"
import { createContext, useContext, useState } from "react"

type PriceContext = {
  prices: Pricing[]
  changePrices: (pricing: Pricing[]) => void
}

const priceContext = createContext<PriceContext | null>(null)

const PriceProvider = ({children}:{children: React.ReactNode}) => {
  const [prices, setPrices] = useState<Pricing[]>(pricing)

  const changePrices = (pricing: Pricing[]) => {
    setPrices(pricing)
  }
  return (
    <priceContext.Provider value={{ prices, changePrices }}>
    {children}
    </priceContext.Provider>
  )
}

export const usePricing = () => {
  return useContext(priceContext) as PriceContext
}

export default PriceProvider
