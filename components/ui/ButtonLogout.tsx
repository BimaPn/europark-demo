import { useRouter } from "next-nprogress-bar"
import { ButtonHTMLAttributes } from "react"

const ButtonLogout = ({className,children,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {children:React.ReactNode,className?:string}) => {
  const router = useRouter()
  const logout = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // ApiClient().post(`/api/auth/logout`)  
      // .then(() => {
      //     signOut({redirect:false}).then(() => {router.push('/admin/login')})
      // })
      // .catch((err) => {
      //   alert(err.response.data.message);
      //   console.log(err);
      // });
  }
  return (
     <button 
     className={`w-full px-4 text-[15px] ${className}`}
     onClick={logout}
      {...props}
      >{children}</button>
  )
}

export default ButtonLogout 
