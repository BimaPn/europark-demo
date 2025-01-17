'use client'
import { theme } from '@/theme/theme'
import { ChakraProvider as Provider } from '@chakra-ui/react'

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>
}
