import styled, { css } from 'styled-components'

export const Banner = styled.div`
  background-color: ${({ theme, colorScheme }) => theme.colors[colorScheme].surface.background};
`

export const BannerText = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ variant }) => variant !== 'right' && css`
    align-items: flex-end;
    text-align: right;
  `}

  ${({ theme }) => theme.mediaQuery.lg(`
    padding: ${theme.rem(24, 16)};
  `, true)}
`

export const BannerImage = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  
  img {
    object-fit: cover;
    object-position: center;
    opacity: 0;
  }
`
