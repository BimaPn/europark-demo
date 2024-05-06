"use client"

import Search from "./Search"


const CollectionsAdminSearch = ({search}:{search:(query: string) => void}) => {
  return (
    <Search onSearch={search} placeholder="Cari Koleksi" />
  )
}

export default CollectionsAdminSearch
