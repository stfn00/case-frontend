import { Button } from '@/components/atoms/Button/styles'
import styled, { css } from 'styled-components'

export const CookieBanner = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.rem(32)};
  position: fixed;
  left: 0;
  bottom: 0;
  padding: ${({ theme }) => theme.rem(16)};
  background-color: ${({ theme }) => theme.colors.light.surface.background};
  z-index: ${({ theme }) => theme.layers.cookieBanner};
  transition: transform ${({ theme }) => theme.timing.normal};

  ${({ theme }) => theme.mediaQuery.lg(`
    flex-direction: column;
    gap: ${theme.rem(16)};

    ${Button} {
      width: 100%;
    }
  `, true)}

  ${({ $isOpen }) => !$isOpen && css`
    transform: translateY(100%);
  `}
`
