'use client'

import React, { useState, createContext, useEffect } from 'react'

export const SectionThemeContext = createContext()

const SectionThemeProvider = ({ children, colorScheme = 'light' }) => {
  const [selectedColorScheme, setSelectedColorScheme] = useState(colorScheme)

  useEffect(() => {
    setSelectedColorScheme(colorScheme)
  }, [])

  return (
    <SectionThemeContext.Provider
      value={{ selectedColorScheme, setSelectedColorScheme }}
    >
      {children}
    </SectionThemeContext.Provider>
  )
}

export default SectionThemeProvider
