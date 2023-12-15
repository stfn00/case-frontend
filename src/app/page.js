import SectionBuilder from "@/components/organisms/SectionBuilder"
import ThemeProvider from '@/contexts/Theme'

const sections = []

export default function Home() {
  return (
    <ThemeProvider>
      <SectionBuilder data={sections} />
    </ThemeProvider>
  )
}
