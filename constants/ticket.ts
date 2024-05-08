export const tickets: Ticket[] = [
  {
    id: "dsaSfa34-ahg436", 
    identity_card: "/card/kirill.webp", 
    name: "kirill Antonov",
    email: 'kirill45@gmail.com', 
    visit_date: new Date("04-04-2024"), 
    schedule: "i8.00 - 11.00",
    expired: true,
    whatsapp_number: '6281297638856',
    institute_name: null, 
    institute_address : null,
    quantity: [
      {
        type: "Dewasa",
        quantity: 1,
        total_price: 170000
      }
    ]
  },
  {
    id: "ds4888-hihi999", 
    identity_card: "/card/lukman.jpg", 
    name: "Lukman Wijaya",
    email: 'lukman55@gmail.com', 
    visit_date: new Date("04-24-2024"), 
    schedule: "12.30 - 15.00",
    expired: true,
    whatsapp_number: '6281297637656',
    institute_name: null, 
    institute_address : null,
    quantity: [
      {
        type: "Dewasa",
        quantity: 1,
        total_price: 170000
      },
    ]
  },
  {
    id: "000Sfa34-ahg4yy36", 
    identity_card: "/card/kirill.webp", 
    name: "3",
    email: 'kirill45@gmail.com', 
    visit_date: new Date("04-04-2024"), 
    schedule: "i8.00 - 11.00",
    expired: true,
    whatsapp_number: '6281297638856',
    institute_name: null, 
    institute_address : null,
    quantity: [
      {
        type: "Dewasa",
        quantity: 1,
        total_price: 170000
      }
    ]
  },
  {
    id: "0101018-hihddi999", 
    identity_card: "/card/lukman.jpg", 
    name: "4",
    email: 'lukman55@gmail.com', 
    visit_date: new Date("04-24-2024"), 
    schedule: "12.30 - 15.00",
    expired: true,
    whatsapp_number: '6281297637656',
    institute_name: null, 
    institute_address : null,
    quantity: [
      {
        type: "Dewasa",
        quantity: 1,
        total_price: 170000
      },
    ]
  },
]

export const ticketQuantities = [
  {
    id: 1,
    quantity: 0,
    type: 'Anak-Anak',
    description: 'Dibawah 12 tahun.',
    price: 115000
  },
  {
    id: 2,
    type: 'Pelajar',
    quantity: 0,
    description: 'Memiliki kartu pelajar.',
    price: 150000
  },
  {
    id: 3,
    type: 'Dewasa',
    quantity: 0,
    description: 'Memiliki kartu pelajar.',
    price: 200000
  },
  {
    id: 4,
    type: 'Lansia',
    quantity: 0,
    description: 'Diatas 65 tahun.',
    price: 170000
  },
]
