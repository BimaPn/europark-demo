"use client"
import ActiveBadge from "@/components/ui/ActiveBadge"
import ExpiredBadge from "@/components/ui/ExpiredBadge"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import { FaEye, FaTrash } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useState } from "react"
import LinkTickeDetail from "../ui/LinkTicketDetail"
import { FiSearch } from "react-icons/fi"
import Search from "../ui/Search"
import NotFound from "../NotFound"
import { dateToTanggal } from "@/helper/convert"
import { useTickets } from "../provider/TicketsProvider"
import TicketScan from "../TicketScan"
import ChangeTicketPrice from "../ticket/ChangeTicketPrice"

const ITEMS_PER_PAGE = 10

const TicketData = () => {
  const { searchTickets } = useTickets()
  const [tickets, setTickets] = useState(searchTickets(""))
  const [currentPage, setCurrentPage] = useState<number>(1)

  const fetchPaginateData = (page:number) => {
    setCurrentPage(page+1)
  }
  const searchTicket = (query:string) => {
    setTickets(searchTickets(query))
  }

  const renderTickets = () => {
    return tickets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item,index) => (
      <Tr key={index} className="border-b">
        <Td> 
          <span className='line-clamp-1'>{item.name}</span>
        </Td>
        <Td>{item.email}</Td>
        <Td>{item.schedule}</Td>
        <Td>
        {item.expired ? (
        <ExpiredBadge />
        ) : (
        <ActiveBadge />
        )}
        </Td>
        <Td>{dateToTanggal(item.visit_date)}</Td>
        <TdActions>
          <LinkTickeDetail ticketId={item.id} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="flexBetween flex- !items-start">
      <div className="w-fit px-1 mb-[10px]">
        <span className="font-medium text-lg sm:text-xl text-slate-600">Daftar Tiket</span>
      </div>
      <div className="flexCenter gap-2 sm:gap-3">
        <TicketScan />
        <ChangeTicketPrice />
      </div>
    </div>

    <div className="my-2">
      <Search onSearch={searchTicket} placeholder="Cari tiket"/>
    </div>

    <div className="w-full overflow-x-auto">
      <Table className="min-w-[812px] sm:min-w-[964px]">
        <Thead>
          <Tr>
            <Th className="w-1/4 text-start">Nama</Th>
            <Th className="text-start">Email</Th>
            <Th className="text-start">Jadwal</Th>
            <Th className="text-start">Status</Th>
            <Th className="text-start">Tanggal Pembelian</Th>
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
        {tickets && renderTickets()}
        </Tbody>
      </Table>
    </div>

    {(tickets.length <= 0) && (
      <div className="py-12">
        <NotFound />
      </div>
    )}
    <div className="absolute bottom-0 right-0 px-4 py-4">
      {(tickets.length > 0) && (
        <ReactPaginate
        pageCount={Math.ceil(tickets.length/ITEMS_PER_PAGE)}
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
  </>
  )
}

export default TicketData
