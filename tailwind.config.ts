import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
    extend: {
        colors : {
          primary : '#F3B664',
          dark : '#000000',
          semiDark : '#787878',
          netral : '#8C8C8C',
          semiLight : '#EFF2F5',
          light : '#F6F8FC',
        }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'marcellus': ['Marcellus', 'serif'],
    },
    screens : {
      ssm : "352px",
      xs : "480px",
      ss : "556px",
      sm : "768px",
      md : "1024px",
      lg : "1280px",
      xl : "1440px",
      xxl : "1700px"
    }
  },
  plugins: [],
}
export default config
