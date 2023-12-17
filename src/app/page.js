import ThemeProvider from '@/contexts/Theme'

import Header from "@/components/layouts/Header"

import SectionBuilder from "@/components/organisms/SectionBuilder"

const sections = [
  {
    type: 'Hero',
    sectionID: crypto.randomUUID(),
    colorScheme: 'dark',
    items: [
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test 1',
          src: '/images/slide-hello.jpg'
        },
        title: {
          typo: 'display2XL',
          content: 'lorem ipsum.',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.',
        }
      },
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test 2',
          src: '/images/slide-circle.jpg'
        },
        title: {
          typo: 'display2XL',
          content: 'lorem ipsum.',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.',
        }
      },
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test 3',
          src: '/images/slide-play.jpg'
        },
        title: {
          typo: 'display2XL',
          content: 'lorem ipsum.',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.',
        }
      }
    ]
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
