export const Table = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <table className={`w-full border-spacing-2 ${className}`} >
      {children}
    </table>
  )
}

export const Thead = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <thead className={className} >
      {children}
    </thead>
  )
}

export const Tbody = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <tbody className={`text-sm ${className}`} >
      {children}
    </tbody>
  )
}

export const Tr = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <tr className={className} >
      {children}
    </tr>
  )
}

export const Th = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <th className={`text-xs font-medium ${className}`} >
      {children}
    </th>
  )
}

export const Td = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <td className={`text-sm td-custom ${className}`} >
      {children}
    </td>
  )
}

export const TdActions = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <td className={`text-sm td-custom t-default ${className}`} >
      <div className="flexCenter gap-[10px] mx-auto">
        {children}
      </div>
    </td>
  )
}

