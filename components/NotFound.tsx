import { MdDoNotDisturb } from "react-icons/md"

const NotFound = () => {
  return (
    <div className="flexCenter flex-col text-gray-500 gap-2">
      <MdDoNotDisturb className="text-[48px]" />
      <span className="font-medium">Tidak Ditemukan</span>
    </div>
  )
}

export default NotFound
