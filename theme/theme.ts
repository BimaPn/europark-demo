import { Poppins } from 'next/font/google';

import { extendTheme } from '@chakra-ui/react';

const poppins = Poppins({ subsets:["latin"],weight:["400","500", "600", "700"]})

const fonts = {
  heading: poppins.style.fontFamily,
  body: poppins.style.fontFamily,
};

export const theme = extendTheme({
  fonts,
});

