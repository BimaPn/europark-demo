"use client"
import { collections as initial } from "@/constants/collections"
import { createContext, useContext, useState } from "react"

const collectionsContext = createContext<CollectionsContext | null>(null)

const CollectionsProvider = ({children}:{children: React.ReactNode}) => {
  const [collections, setColletions] = useState<Collection[]>(initial)

  const findCollection = (collectionId: string) => {
    const result = collections.find((collection) => collection.id === collectionId)
    if(!result) {
      return null
    }
    return result
  }
  return (
    <collectionsContext.Provider value={{ collections, findCollection }}>
    {children}
    </collectionsContext.Provider>
  )
}

export const useCollections = () => {
  return useContext(collectionsContext) as CollectionsContext
}

export default CollectionsProvider
