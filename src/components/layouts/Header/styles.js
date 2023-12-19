import styled, { css } from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: ${({ theme }) => theme.rem(40)};
  z-index: ${({ theme }) => theme.layers.header};
`

export const HeaderLogo = styled.div``

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.rem(24)};
  padding: ${({ theme }) => theme.rem(0, 8)};
  background-image: linear-gradient(0deg, blue, blue);
  background-position: left 0%;
  background-repeat: no-repeat;
  background-size: 100% 0%;
  transition: background ${({ theme }) => theme.timing.fast};

  ${({ isSticky }) => isSticky && css`
    background-size: 100% 100%;
  `}
`
