'use client'

import React from 'react'

import SectionThemeProvider from '@/contexts/SectionTheme'

import * as Components from '@/components/organisms'

const componentsDispatcher = {
  Hero: 'Hero',
  Banner: 'Banner',
  CardsGrid: 'CardsGrid',
}

const SectionBuilder = ({ data }) => (
  data && data.length &&
    data.map((props, index) => {
      const Component = Components[componentsDispatcher[props.type]]
      const key = `Section${props.type}${index + 1}`

      return Component ? (
        <SectionThemeProvider key={key} colorScheme={props.colorScheme}>
          <Component {...props} />
        </SectionThemeProvider>
      ) : null
    })
)

export default SectionBuilder
