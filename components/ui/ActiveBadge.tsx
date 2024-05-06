
const ActiveBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit text-xs text-blue-600 font-medium px-2 py-1 rounded-md bg-blue-100">
      {children ? children : "Aktif"}
    </div>
  )
}

export default ActiveBadge
