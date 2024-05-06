'use client'
import { createContext, useContext, useState } from "react";
import { MdClose } from "react-icons/md";

export type ModalProvider = {
 showModal:boolean
 toggleModal:()=>void
 disabledToggle: boolean
}

export const modalContext = createContext<ModalProvider | null>(null); 

const Modal = ({children, defaultValue=false}:{children:React.ReactNode, defaultValue?:boolean}) => {
  const [showModal,setShowModal] = useState<boolean>(defaultValue);
  const disabledToggle = defaultValue
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  }
  return (
    <modalContext.Provider value={{ showModal, toggleModal, disabledToggle }}>
        {children}
    </modalContext.Provider>
  )
}

export const Trigger = ({children,className}:{children:React.ReactNode,className?:string}) => {
  const { toggleModal } = useContext(modalContext) as ModalProvider;
  const toggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    toggleModal();
  }
  return (
    <button onClick={toggle} className={className}>
      {children}
    </button> 
  )
}

type ModalContent = {
  children:React.ReactNode,
  width:number,
  onClose?: ()=>void,
  className?:string
}

export const Content = ({children,width, ...rest}:ModalContent) => {
  const { showModal, toggleModal, disabledToggle } = useContext(modalContext) as ModalProvider;
  const modalClose = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(rest.onClose) {
      rest.onClose();
      return;
    };
    if(!disabledToggle) {
      toggleModal(); 
    }

  }
  return showModal && (
    <div onClick={modalClose} className="fixed inset-0 bg-black/30 flexCenter backdrop-blur z-[6000]">
      <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width
      }}
      className={`h-full sm:h-[95%] md:h-[90%] bg-white dark:bg-dark-semiDark rounded-none sm:rounded-xl flex flex-col ${rest.className}`}>
        {children}
      </div>   
    </div>
  )
}

export const Header = ({children, title, onClose, className}:{children?:React.ReactNode, title:string, onClose?:()=>void, className?:string}) => {
  const buttonClose = () => {
    onClose && onClose()
  }
  return (
      <div className={`grid grid-cols-3 py-3 px-2 ${className}`}>
          <CloseButton className="!w-8 aspect-square flexCenter" onClose={buttonClose}>
            <MdClose className="text-[22px]" />
          </CloseButton>
        <div className="flexCenter">
          <span>{title}</span>
        </div>
        <span>{children ?? ""}</span>
      </div>
  )
}
export const Body = ({children,className}:{children:React.ReactNode,className ?: string}) => {
    return (
      <div className={`h-full overflow-y-auto custom-scrollbar ${className}`}>
          {children}
      </div>
    )
}

export const Footer = ({children,className}:{children:React.ReactNode,className ?: string}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const CloseButton = ({children, onClose, className}:{children:React.ReactNode, onClose?:()=>void, className?:string}) => {
  const { toggleModal, disabledToggle } = useContext(modalContext) as ModalProvider;
  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClose && onClose() 
    if(!disabledToggle) {
      toggleModal()
    }
  }
  return (
    <button onClick={buttonClick} className={`w-fit ${className}`}>
      {children}
    </button>
  )
}

export default Modal

