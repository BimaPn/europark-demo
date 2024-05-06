import SuccessIcon from '../icons/SuccessIcon'
import ErrorIcon from '../icons/ErrorIcon'
import Link from 'next/link'

type ResponseMessage = {
  type: "success" | "error"
  message: string
  subMessage?: string
}
const ResponseMessageAdmin = ({type, message, subMessage}:ResponseMessage) => {
  return (
    <section className="flexBetween flex-col items-center h-full">
      <div className="flex flex-col items-center">
        {type === "error" ? (
          <ErrorIcon width={230} className="-mt-5"/>
        ) : (
          <SuccessIcon width={230} className="mt-5"/>
        )}
        <span className="font-medium text-xl">{message}</span>
        {subMessage && (
          <div className="mt-6">
            <span className="block w-[80%] text-center mx-auto leading-[28px]">
              {subMessage}
            </span> 
          </div>
        )}
      </div>
      <div className="w-full py-4 px-4 flexCenter">
        <Link
        href={`/admin/dashboard/home`}
        className="w-full xs:basis-[75%] px-4 py-2 bg-blue-500 text-white font-medium rounded-full text-center">
        Dashboard
        </Link>
      </div>
    </section>
  )
}

export default ResponseMessageAdmin
