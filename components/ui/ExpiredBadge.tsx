
const ExpiredBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit text-xs text-white font-medium px-[6px] py-1 rounded-md bg-blue-400">
      {children ? children : "Kadaluarsa"}
    </div>
  )
}

export default ExpiredBadge
