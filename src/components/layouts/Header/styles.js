import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.rem(40, 0, 0)};
  z-index: ${({ theme }) => theme.layers.header};
`

export const HeaderLogo = styled.div``

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.rem(24)};
`
