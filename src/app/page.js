import ThemeProvider from '@/contexts/Theme'

import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

import SectionBuilder from '@/components/organisms/SectionBuilder'

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
  {
    type: 'CardsGrid',
    sectionID: crypto.randomUUID(),
    colorScheme: 'gray',
    items: [
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test',
          src: '/images/card-play-harder.png'
        },
        title: {
          typo: 'paragraphLG',
          content: 'PLAY HARDER',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.',
        },
        cta: {
          label: 'READ MORE',
          variant: 'primary'
        }
      },
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test',
          src: '/images/card-simplicity.png'
        },
        title: {
          typo: 'paragraphLG',
          content: 'SIMPLICITY',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.',
        },
        cta: {
          label: 'READ MORE',
          variant: 'primary'
        }
      },
      {
        id: crypto.randomUUID(),
        image: {
          alt: 'Test',
          src: '/images/card-innovation.png'
        },
        title: {
          typo: 'paragraphLG',
          content: 'INNOVATION',
        },
        paragraph: {
          typo: 'paragraphSM',
          content: 'Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.',
        },
        cta: {
          label: 'READ MORE',
          variant: 'primary'
        }
      },
    ]
  },
  {
    type: 'Banner',
    sectionID: 'we-are',
    colorScheme: 'dark',
    variant: 'right',
    title: {
      typo: 'display2XL',
      content: 'we<br />are.',
    },
    paragraph: {
      typo: 'paragraphSM',
      content: 'Consectetur adipiscing elit.<br />Nulla condimentum tortor sem.',
    },
    cta: {
      label: 'THE PLAYERS',
    },
    image: {
      alt: 'Test',
      src: '/images/banner-we-are.jpg'
    }
  },
  {
    type: 'Banner',
    sectionID: 'we-do',
    colorScheme: 'light',
    variant: 'left',
    title: {
      typo: 'display2XL',
      content: 'we<br />do.',
    },
    paragraph: {
      typo: 'paragraphSM',
      content: 'Consectetur adipiscing elit.<br />Nulla condimentum tortor sem.',
    },
    cta: {
      label: 'THE PROJECTS',
    },
    image: {
      alt: 'Test',
      src: '/images/banner-we-do.jpg'
    }
  },
  {
    type: 'Banner',
    sectionID: 'careers',
    colorScheme: 'dark',
    variant: 'right',
    title: {
      typo: 'display2XL',
      content: 'careers.',
    },
    paragraph: {
      typo: 'paragraphSM',
      content: 'Consectetur adipiscing elit.<br />Nulla condimentum tortor sem.',
    },
    cta: {
      label: 'THE POSITIONS',
    },
    image: {
      alt: 'Test',
      src: '/images/banner-careers.jpg'
    }
  }
]

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <SectionBuilder data={sections} />
      <Footer />
    </ThemeProvider>
  )
}
