"use client"
import { IoSearch } from "react-icons/io5"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import CollectionDataSkeleton from "@/components/skeleton/CollectionDataSkeleton"
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import RoundedImage from "../ui/RoundedImage"
import ButtonEdit from "../ui/ButtonEdit"
import CollectionCreate from "../CollectionCreate"
import { collectionContext } from "../provider/CollectionProvider"
import { collectionUpdateContext } from "../CollectionUpdate"
import { FiSearch } from "react-icons/fi"
import DeleteCollectionButton from "../DeleteCollectionButton"
import { AlertMessageProvider, alertMessageContext } from "../AlertMessage"
import CollectionsAdminSearch from "../CollectionsAdminSearch"
import Skeleton from "../skeleton/Skeleton"
import NotFound from "../NotFound"
import Link from "next/link"

const CollectionsData = () => {
  const { collections,
  setCollections, deleteCollection, paginate, setPaginate } = useContext(collectionContext) as CollectionProvider
  const { setId } = useContext(collectionUpdateContext) as CollectionUpdateProvider
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider

  useEffect(() => {
    ApiClient().get(`/api/collections/get/admin`)
    .then((res) => {
      setCollections(res.data.result)
      setPaginate(res.data.paginate)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])

  const fetchPaginateData = (page:number) => {
    ApiClient().get(`api/collections/get/admin?page=${page}`)
    .then((res) => {
      setCollections(res.data.result)
      setPaginate(res.data.paginate)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  
  const deleteData = (id:string) => {
    ApiClient().delete(`api/collections/${id}/delete`)
    .then((res) => {
      setAlert({
        success: true,
        message: "Koleksi berhasil di hapus"
      })
      deleteCollection(id)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  const renderCollections = () => {
    return collections!.map((item,index) => (
      <Tr key={index} className="border-b">
        <Td className='flex items-center gap-2'>
          <RoundedImage 
          src={item.thumbnail}
          alt={item.name}
          className='!min-w-[38px] !w-[38px] !rounded-md !z-[0]' />
          <Link href={`/collections/${item.id}`} className='line-clamp-1 hover:underline'>{item.name}</Link>
        </Td>
        <Td>{item.createdBy}</Td>
        <Td>{item.discovery_year}</Td>
        <Td>{item.origin}</Td>
        <TdActions>
          <ButtonEdit callback={() => setId(item.id)} />
          <DeleteCollectionButton onDelete={() => deleteData(item.id)} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="flex flex-col mb-3">
      <div className="w-full px-1 flexBetween mb-4">
        <div>
          <span className="font-medium text-lg sm:text-xl text-slate-600">Daftar Koleksi</span>
        </div>
        <CollectionCreate />
      </div>

      <div>
        <CollectionsAdminSearch /> 
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
        {!collections && <CollectionDataSkeleton count={5} />}
        {collections && renderCollections()}
        </Tbody>
      </Table>
    </div>

    {(collections && collections.length <= 0) && (
      <div className="py-12">
        <NotFound />
      </div>
    )}
    <div className="absolute bottom-0 right-0 px-4 py-4">
      {(collections && paginate) && (
        <ReactPaginate
        pageCount={paginate.lastPage}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={(val) => fetchPaginateData(val.selected+1)}
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
        activeClassName="bg-blue-500 text-white rounded-lg"
        />
      )}
      {(!collections && !paginate) && (
        <Skeleton className="w-[124px] size-lg " />
      )}
    </div>
  </>
  )
}

export default CollectionsData
