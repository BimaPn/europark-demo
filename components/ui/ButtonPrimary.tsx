import { ButtonHTMLAttributes } from "react"

const ButtonPrimary = ({className,children,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {children:React.ReactNode,className?:string}) => {
  return (
     <button 
     className={`px-6 py-[7px] mt-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
      >{children}</button>
  )
}

export default ButtonPrimary
