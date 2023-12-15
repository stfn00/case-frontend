import SectionBuilder from "@/components/organisms/SectionBuilder"
import ThemeProvider from '@/contexts/Theme'

const sections = [
  {
    type: 'Hero',
    colorScheme: 'dark',
  },
]

export default function Home() {
  return (
    <ThemeProvider>
      <SectionBuilder data={sections} />
    </ThemeProvider>
  )
}
