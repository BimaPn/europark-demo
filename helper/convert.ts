export const numberToRupiah = (number:number) => {
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

export const dateToString = (date: Date|string) => {
  const time = typeof date === "string" ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US',options).format(time)
}

export const integerToRupiah = (number:number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + ' M';
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + ' Jt';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + ' K';
  } else {
    return number
  }
}

export const dateToTanggal = (date:Date,showDayName=false) => {
  const monthNames = [
    "Januari", "Februari", "Maret",
    "April", "Mei", "Juni", "Juli",
    "Agustus", "September", "Oktober",
    "November", "Desember"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  let formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year;

  if(showDayName) {
    formattedDate = `${dayName(date)}, ` + formattedDate
  }
  return formattedDate;
}

const dayName = (date:Date) => {
    const dayNames = [
    "Minggu", "Senin", "Selasa", "Rabu",
    "Kamis", "Jumat", "Sabtu"
  ];

  return dayNames[date.getDay()];
}
export const numberToMonth = (number:number) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli", 
    "Agustus",
    "September",
    "Oktober",
    "November", 
    "Desember"
  ]
  return months[number-1]
}
