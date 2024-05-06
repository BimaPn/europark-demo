import Link from "next/link"
import { FaEye } from "react-icons/fa"

const LinkTickeDetail = ({ticketId}:{ticketId:string}) => {
  return (
    <Link
    href={`/tickets/${ticketId}`}
    className="w-8 aspect-square rounded-lg bg-blue-100 text-blue-600 flexCenter">
      <FaEye className="text-[18px]"/>
    </Link> 
  )
}

export default LinkTickeDetail 
