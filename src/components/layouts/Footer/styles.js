import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.rem(52)};
  padding: ${({ theme }) => theme.rem(52, 16)};
  background-color: ${({ theme }) => theme.colors.dark.surface.background};
`

export const FooterLogo = styled.div``

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.rem(24)};
`
