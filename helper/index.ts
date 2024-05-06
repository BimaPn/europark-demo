type TotalPrice = (array:TicketQuantity[]) => number

export const totalPrice: TotalPrice = (array:TicketQuantity[]) => {
  return array.reduce((accumulator, currentValue) => {
    let total = 0
    if(currentValue.quantity > 0) {
      total = (currentValue.price * currentValue.quantity)
    }
    return accumulator + total 
  }, 0);
}
