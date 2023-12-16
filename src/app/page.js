import ThemeProvider from '@/contexts/Theme'

import Header from "@/components/layouts/Header"

import SectionBuilder from "@/components/organisms/SectionBuilder"

const sections = [
  {
    type: 'Hero',
    colorScheme: 'dark',
  },
]

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <SectionBuilder data={sections} />
    </ThemeProvider>
  )
}
