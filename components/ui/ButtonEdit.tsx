
"use client"
import { ButtonHTMLAttributes } from "react"
import { BiSolidEdit } from "react-icons/bi"

const ButtonEdit = ({className,callback,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {callback:()=>void,className?:string}) => {
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    callback();
  }
  return (
    <button
    onClick={onClick}
    {...props}
    className="w-8 aspect-square rounded-lg bg-blue-100 text-blue-600 flexCenter">
      <BiSolidEdit className="text-[19px]" />
    </button> 
  )
}

export default ButtonEdit
