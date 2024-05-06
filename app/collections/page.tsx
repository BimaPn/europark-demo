"use client"
import CollectionsSearch from "@/components/CollectionsSearch"
import NotFound from "@/components/NotFound"
import { useCollections } from "@/components/provider/CollectionsProvider"
import CollectionSkeleton from "@/components/skeleton/CollectionSkeleton"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

const Page = () => {
  const { searchCollections } = useCollections()
  const [loaded, setLoaded] = useState<boolean>(false)
  const [collections, setCollections] = useState(searchCollections(""))

  useEffect(() => {
    setLoaded(true)
  },[])

  const onSearch = async (query:string) => {
    setCollections(searchCollections(query))
  }
  return (
    <section className="boxWidth min-h-[90vh]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-2xl sm:text-[28px]">Koleksi Museum</span>
          <span className="text-sm ss:text-base">Temukan koleksi-koleksi terbaik dari museum kami.</span>
        </div>
        <CollectionsSearch onSearch={onSearch} className="w-full ss:w-[60%] sm:w-[40%]" /> 
      </div>

    <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 ss:gap-4 sm:gap-5 mt-9">
      {loaded && collections.map((item, i) => (
      <Link key={item.id} href={`/collections/${item.id}`}>
        <CollectionItem 
        key={item.id}
        thumbnail={item.images[0]} name={item.name} year={item.discovery_year} />
      </Link>
      ))}
      {!loaded && <CollectionSkeleton count={5}/>}
    </div>
    {(collections.length <= 0) && (
      <div className="w-full flexCenter py-16">
        <NotFound />
      </div>
    )}
    </section>  
  )
}

const CollectionItem = ({thumbnail, name, year}:{thumbnail:string, name:string, year:string}) => {
  return (
    <div className="flex flex-col gap-1 ss:gap-2 hover:scale-[1.03] transition-transform duration-500 cursor-pointer group">
      <div className="w-full aspect-[3/4.5] relative overflow-hidden rounded-md">
        <Image 
        src={thumbnail}
        alt={name}
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm ss:text-base">{name}</span>
        <span className="text-xs text-gray-700">{year}</span>
      </div>
    </div>
  )
}

export default Page
