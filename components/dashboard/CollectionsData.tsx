"use client"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from "react"
import RoundedImage from "../ui/RoundedImage"
import NotFound from "../NotFound"
import Link from "next/link"
import { useCollections } from "../provider/CollectionsProvider"
import DeleteCollectionButton from "../ui/DeleteCollectionButton"
import CollectionsAdminSearch from "../ui/CollectionsAdminSearch"
import { useAlert } from "../AlertMessage"
import ButtonCollectionEdit from "../ButtonCollectionEdit"
import CollectionUpdate from "../CollectionUpdate"
import CollectionCreate from "../CollectionCreate"

const ITEMS_PER_PAGE = 10

const CollectionsData = () => {
  const { setAlert } = useAlert()
  const { collections, searchCollections, deleteCollection } = useCollections() 
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [query, setQuery] = useState("")

  const fetchPaginateData = (page:number) => {
    setCurrentPage(page+1)
  }
  
  const deleteData = (id:string) => {
     deleteCollection(id)
     setAlert({
       success: true,
       message: "Koleksi berhasil dihapus."
     })
  }
  const renderCollections = () => {
    return collections.filter((coll) => new RegExp(query, 'i').test(coll.name)) 
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item,index) => (
      <Tr key={index} className="border-b">
        <Td className='flex items-center gap-2'>
          <RoundedImage 
          src={item.images[0]}
          alt={item.name}
          className='!min-w-[38px] !w-[38px] !rounded-md !z-[0]' />
          <Link href={`/collections/${item.id}`} className='line-clamp-1 hover:underline'>{item.name}</Link>
        </Td>
        <Td>{item.createdBy}</Td>
        <Td>{item.discovery_year}</Td>
        <Td>{item.origin}</Td>
        <TdActions>
          <ButtonCollectionEdit collectionId={item.id} /> 
          <DeleteCollectionButton onDelete={() => deleteData(item.id)} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <CollectionUpdate>
    <div className="flex flex-col mb-3">
      <div className="w-full px-1 flexBetween mb-4">
        <div>
          <span className="font-medium text-lg sm:text-xl text-slate-600">Daftar Koleksi</span>
        </div>
        <CollectionCreate />
      </div>

      <div>
        <CollectionsAdminSearch search={(query) => setQuery(query)} /> 
      </div>
    </div>

    <div className="w-full overflow-x-auto">
      <Table className="min-w-[732px]">
        <Thead>
          <Tr>
            <Th className="w-1/4 text-start">Nama Koleksi</Th>
            <Th className="text-start">Pembuat</Th>
            <Th className="text-start">Tahun Pembuatan</Th>
            <Th className="text-start">Tempat Asal</Th>
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
        {renderCollections()}
        </Tbody>
      </Table>
    </div>

    {(collections.length <= 0) && (
      <div className="py-12">
        <NotFound />
      </div>
    )}
    <div className="absolute bottom-0 right-0 px-4 py-4">
      {collections.length > 0 && (
        <ReactPaginate
        pageCount={Math.ceil(collections.length/ITEMS_PER_PAGE)}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={(val) => fetchPaginateData(val.selected)}
        previousLabel={
          <div className="w-8 aspect-square flexCenter">
            <IoIosArrowBack />
          </div>
        }
        nextLabel={
          <div className="w-8 aspect-square flexCenter">
            <IoIosArrowForward />
          </div>
        }
        className="flex items-center gap-1" 
        pageClassName="w-8 aspect-square h-fit flexCenter"
        activeClassName="bg-blue-100 rounded-lg"
        />
      )}
    </div>
  </CollectionUpdate>
  )
}

export default CollectionsData
