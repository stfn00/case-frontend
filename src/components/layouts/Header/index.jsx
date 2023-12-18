'use client'

import { useState } from 'react'

import useEventListener from '@/hooks/useEventListener'

import { Container, Visible } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  let timeout
  let lastScrollTop = 0

  const handleScroll = () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop && window.scrollY > 100) {
        setIsSticky(true)
      } else if (scrollTop < lastScrollTop) {
        setIsSticky(false)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }, 10)
  }

  useEventListener('scroll', handleScroll)

  return (
    <S.Header as={Container} forwardedAs="header">
      <S.HeaderLogo>
        <Typography content="Logo" inheritedColorScheme="dark" />
      </S.HeaderLogo>
      <Visible breakpoints={['lg', 'xl', 'xxl']}>
        <S.HeaderMenu isSticky={isSticky}>
          <Button label="we are" variant="secondary" inheritedColorScheme="dark" scrollTo="we-are" />
          <Button label="we do" variant="secondary" inheritedColorScheme="dark" scrollTo="we-do" />
          <Button label="careers" variant="secondary" inheritedColorScheme="dark" scrollTo="careers" />
          <Button label="contact us" variant="secondary" inheritedColorScheme="dark" scrollTo="contact-us" />
        </S.HeaderMenu>
      </Visible>
    </S.Header>
  )
}

export default Header
