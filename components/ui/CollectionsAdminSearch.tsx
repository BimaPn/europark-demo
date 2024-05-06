"use client"

import Search from "./Search"


const CollectionsAdminSearch = () => {

  const searchTicket = (query:string) => {
    // setCollections(null)
    // ApiClient().get(`/api/collections/search/admin?name=${query}`)
    // .then((res) => {
    //   setCollections(res.data.collections)
    //   setPaginate(res.data.paginate)
    // })
    // .catch((err) => {
    //   console.log(err.response.data)
    // })
  }
  return (
    <Search onSearch={searchTicket} placeholder="Cari Koleksi" />
  )
}

export default CollectionsAdminSearch
