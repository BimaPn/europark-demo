"use client"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

const CollectionsSearch = ({onSearch, className}:{onSearch:(query:string)=>void, className?:string}) => {
  const [query, setQuery] = useState<string>("")

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  useEffect(() => {
    onSearch(query)
  },[query])
  return (
    <div className={`flex items-center border-b-2 border-gray-500 ${className}`}>
      <input 
      type="text"
      value={query}
      onChange={onChange}
      className="w-full bg-transparent py-[10px] focus:outline-none placeholder:text-gray-500"
      placeholder="Cari koleksi..." 
      />
      <div className="w-8 aspect-square flexCenter">
        <FiSearch className="text-[22px] text-gray-600" />
      </div>
    </div>  
  )
}

export default CollectionsSearch
