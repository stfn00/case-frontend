'use client'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header as={Container} forwardedAs="header">
      <S.HeaderLogo>
        <Typography content="Logo" inheritedColorScheme="dark" />
      </S.HeaderLogo>
      <S.HeaderMenu>
        <Button label="we are" variant="secondary" inheritedColorScheme="dark" />
        <Button label="we do" variant="secondary" inheritedColorScheme="dark" />
        <Button label="careers" variant="secondary" inheritedColorScheme="dark" />
        <Button label="contact us" variant="secondary" inheritedColorScheme="dark" />
      </S.HeaderMenu>
    </S.Header>
  )
}

export default Header
