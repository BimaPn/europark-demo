import { integerToRupiah } from "@/helper/convert";

export const stats = [
  {
    label: "Pengunjung hari ini",
    total: 3
  },
  {
    label: "Tiket terjual bulan ini",
    total: 2
  },
  {
    label: "Penghasilan tahun ini.",
    total: `Rp. ${integerToRupiah(7200000)}` 
  },
  {
    label: "Total koleksi museum",
    total: 20
  }
]
