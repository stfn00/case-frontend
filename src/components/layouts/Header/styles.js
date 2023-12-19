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

  ${({ theme }) => theme.mediaQuery.md(`
    position: absolute;
    top: 80px;
    right: 16px;
    flex-direction: column;
    align-items: flex-end;
    padding: ${theme.rem(8)};
    gap: ${theme.rem(8)};
  `, true)}

  ${({ isSticky, $isMenuOpen }) => (isSticky || $isMenuOpen) && css`
    background-size: 100% 100%;
  `}

  button, a {
    ${({ theme, $isMenuOpen }) => theme.mediaQuery.md(`
      ${$isMenuOpen ? `
        opacity: 1;
        transition: opacity ${theme.timing.fast} 0.2s;
      ` : `
        opacity: 0;
      `}
    `, true)}
  }
`
