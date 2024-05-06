"use client"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

const Search = ({onSearch, placeholder, className}:{onSearch:(query:string) => void,placeholder?:string, className?:string}) => {
  const [query, setQuery] = useState<string>("")
  const submit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
  }
  useEffect(() => {
    onSearch(query)
  },[query])
  return (
    <div className={`w-full ss:w-[256px] flex px-1 gap-1 py-1 bg-blue-100/90 text-slate-500 rounded-lg ${className}`}>
      <div className="w-8 aspect-square flexCenter">
        <FiSearch className="text-xl" />
      </div>
      <input 
      type="text" 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full bg-transparent placeholder:text-slate-500 text-[15px] focus:outline-none" 
      placeholder={placeholder} 
      />
    </div>
  )
}

export default Search
