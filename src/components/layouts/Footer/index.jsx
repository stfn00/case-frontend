'use client'

import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterLogo>
        <Typography content="Logo" typo="paragraphXL" inheritedColorScheme="dark" />
      </S.FooterLogo>
      <S.FooterMenu>
        <Button
          label="we are"
          variant="secondary"
          inheritedColorScheme="dark"
          scrollTo="we-are"
        />
        <Button
          label="we do"
          variant="secondary"
          inheritedColorScheme="dark"
          scrollTo="we-do"
        />
        <Button
          label="careers"
          variant="secondary"
          inheritedColorScheme="dark"
          scrollTo="careers"
        />
        <Button
          label="contact us"
          variant="secondary"
          inheritedColorScheme="dark"
          scrollTo="contact-us"
        />
      </S.FooterMenu>
      <S.FooterMenu>
        <Button
          ariaLabel="Vai alla pagina Facebook"
          iconEnd="fa-brands fa-facebook"
          iconEndSize="big"
          variant="secondary"
          inheritedColorScheme="dark"
        />
        <Button
          ariaLabel="Vai alla pagina Linkedin"
          iconEnd="fa-brands fa-linkedin"
          iconEndSize="big"
          variant="secondary"
          inheritedColorScheme="dark"
        />
        <Button
          ariaLabel="Vai alla pagina Instagram"
          iconEnd="fa-brands fa-instagram"
          iconEndSize="big"
          variant="secondary"
          inheritedColorScheme="dark"
        />
      </S.FooterMenu>
    </S.Footer>
  )
}

export default Footer
