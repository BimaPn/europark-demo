import Image from "next/image"
import RoundedImage from "../ui/RoundedImage"

const ScheduleAndPrice = () => {
  return (
    <section className="min-h-screen flex justify-between gap-4 relative my-12">
      <div className="sm:basis-[45%] h-fit border-2 border-black sticky top-0">
        <div className="h-screen relative">
          <Image src={`/images/example7.jpg`} alt="anjay" fill className="object-cover" />
        </div>
      </div>
      <div className="sm:basis-[55%]">
        <Schedule />
        <Schedule />
      </div>
    </section>
  )
}

const Schedule = () => {
  return (
    <div className="h-screen">
      <span className="font-semibold text-4xl">Jadwal Museum</span>
    </div>
  )
}

export default ScheduleAndPrice
