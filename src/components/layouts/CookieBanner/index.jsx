'use client'

import { useState } from 'react'

import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const CookieBanner = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <S.CookieBanner $isOpen={isOpen}>
      <Typography
        typo="paragraphSM"
        content="Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy."
      />
      <Button
        label="OK"
        variant="primary"
        inheritedColorScheme="dark"
        handleClick={handleClose}
      />
    </S.CookieBanner>
  )
}

export default CookieBanner
