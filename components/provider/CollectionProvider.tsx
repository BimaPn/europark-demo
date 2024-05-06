"use client"
import { createContext, useState } from "react"

export const collectionContext = createContext<CollectionProvider | null>(null)

const CollectionProvider = ({children}:{children:React.ReactNode}) => {
  const [collections,setCollections] = useState<Collection[] | null>(null)
  const [paginate, setPaginate] = useState<Paginate | null>(null)

  const addCollection = (collection: Collection) => {
    setCollections((prev) => [collection, ...prev as Collection[]])
  }
  const updateCollection = (collection: Collection) => {
    if(!collections) return 
    setCollections((prev) => {
      return prev!.map(item => {
        if(item.id === collection.id) {
          item = collection
        }
        return item
      })
    })
  }
  const deleteCollection = (id:string) => {
    if(!collections) return
    setCollections((prev) => {
      return prev!.filter((item) => item.id !== id)
    })
  }
  return (
    <collectionContext.Provider value={{ collections, setCollections, addCollection,
    updateCollection, deleteCollection, paginate, setPaginate }}>
      {children}
    </collectionContext.Provider>
  )
}

export default CollectionProvider
