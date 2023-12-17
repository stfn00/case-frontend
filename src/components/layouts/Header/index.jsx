'use client'

import { Container, Visible } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header as={Container} forwardedAs="header">
      <S.HeaderLogo>
        <Typography content="Logo" inheritedColorScheme="dark" />
      </S.HeaderLogo>
      <Visible breakpoints={['lg', 'xl', 'xxl']}>
        <S.HeaderMenu>
          <Button label="we are" variant="secondary" inheritedColorScheme="dark" />
          <Button label="we do" variant="secondary" inheritedColorScheme="dark" />
          <Button label="careers" variant="secondary" inheritedColorScheme="dark" />
          <Button label="contact us" variant="secondary" inheritedColorScheme="dark" />
        </S.HeaderMenu>
      </Visible>
    </S.Header>
  )
}

export default Header
