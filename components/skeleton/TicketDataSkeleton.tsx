import Skeleton from "@/components/skeleton/Skeleton"
import {  Td, TdActions, Tr } from "@/components/ui/Table"

const TicketDataSkeleton = ({count=1}:{count?:number}) => {
  return Array(count).fill(0).map((_,index) => (
    <Tr key={index}>
      <Td> 
        <Skeleton className="w-1/2 size-sm my-2" />
      </Td>
      <Td>
        <Skeleton className="w-1/2 size-sm my-2" />
      </Td>
      <Td>
        <Skeleton className="w-1/2 size-sm my-2" />
      </Td>
      <Td>
        <Skeleton className="w-1/2 size-sm my-2" />
      </Td>
      <Td>
        <Skeleton className="w-1/2 size-sm my-2" />
      </Td>
      <TdActions>
      <span></span>
      </TdActions>
    </Tr>
    )
  )
}

export default TicketDataSkeleton
