import React, { useContext } from 'react'
import { SectionThemeContext } from '@/contexts/SectionTheme'

import * as S from './styles'

const Typography = ({ children, content, ...props }) => {
  const { selectedColorScheme = 'light' } = useContext(SectionThemeContext) || {}

  const renderContent = () =>
    typeof children === 'string' ? (
      <S.Typography
        {...props}
        colorScheme={selectedColorScheme}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    ) : (
      <S.Typography {...props} colorScheme={selectedColorScheme}>
        {content || children}
      </S.Typography>
    )

  return renderContent()
}

export default Typography
