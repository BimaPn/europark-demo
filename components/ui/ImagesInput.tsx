'use client'
import {useState,createContext,useContext,useEffect,useRef, ChangeEvent, ButtonHTMLAttributes} from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
const imagesInputContext = createContext<ImagesInputContext | null>(null)

const ImagesInput = ({children,value,className,onChange}:InputImages) => {
    const removeImage = (index:number) => {
        onChange(value.filter(image => value.indexOf(image) !== index))
    }
  return (
    <imagesInputContext.Provider value={{ value,onChange,removeImage }}>
        <div className={className}>
        {children}
        </div>
    </imagesInputContext.Provider>
  )
}

export const Trigger = ({children, className}:{children : React.ReactNode, className?:string}) => {
    const { value,onChange } = useContext(imagesInputContext) as ImagesInputContext
    const inputRef = useRef<HTMLInputElement>(null)

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (files) {
          let newImages = Array.from(files).map(file => URL.createObjectURL(file))
          onChange([...value, ...newImages]);
        }
    };
  return (
    <button 
    type='button'
    onClick={() => inputRef.current!.click()}
    className={className}
    >
        <input 
        type="file" 
        className='hidden' 
        multiple 
        accept="image/*" 
        onChange={onImageChange} 
        ref={inputRef}/>
        {children}
    </button>
  )
}   

export const Preview = ({children, className}:{children?:React.ReactNode, className?:string}) => {
  const { value, removeImage } = useContext(imagesInputContext) as ImagesInputContext
  return (
    <div className={`min-w-full overflow-x-auto mb-3 ${(children) && 'mb-3'}`}>
      <div className={`flex items-center gap-3 ${className}`}>
        {children}
        {value.map((content, index) => (
          <ImagePreview
            src={content}
            key={index} 
            alt={content}  
            onRemove={() => removeImage(index)} 
            className="aspect-square rounded-lg w-[60px] sm:min-w-24"
          />
        ))}
      </div>
    </div>
  )
}

const ImagePreview = ({src,alt,className,onRemove}:{src:string,alt:string,className?:string,onRemove?:()=> void}) => {
    const imageRemove = (e:React.MouseEvent) => {
        e.preventDefault()
        onRemove && onRemove()
    }
  return(
    <div className={`relative h-fit overflow-hidden ${className}`}>
        <Image
        src={src} 
        alt={alt}
        fill
        style={{objectFit:"cover"}} />
        <div className='absolute top-0 right-0 p-[2px]'>
          <button type='button' onClick={imageRemove} className='text-light px-1 aspect-square rounded-full bg-black/60'>
            <IoClose className='text-xl' />
          </button>
        </div>
    </div>
  )
}

export default ImagesInput
