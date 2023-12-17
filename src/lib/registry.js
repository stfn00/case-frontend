'use client'

import { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const StyledComponentsRegistry = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const hiddenStyledProps = [
    'colorScheme',
    'variant',
    'iconEnd',
    'debug',
    'offsetRight',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ]

  const shouldForwardProp = (prop) => !hiddenStyledProps.includes(prop)

  useEffect(() => {
    return () => {
      styledComponentsStyleSheet.instance.clearTag()
    }
  }, [styledComponentsStyleSheet])

  return (
    <StyleSheetManager
      sheet={
        typeof window !== 'undefined'
          ? undefined
          : styledComponentsStyleSheet.instance
      }
      shouldForwardProp={shouldForwardProp}
    >
      {children}
      {useServerInsertedHTML(() =>
        styledComponentsStyleSheet.getStyleElement()
      )}
    </StyleSheetManager>
  )
}

export default StyledComponentsRegistry
