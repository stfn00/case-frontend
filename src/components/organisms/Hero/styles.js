import styled from 'styled-components'

export const Hero = styled.div`
  position: relative;
`

export const HeroText = styled.div`
  width: 230px;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
  background-color: transparent;
  z-index: 1;

  ${({ theme }) => theme.mediaQuery.lg(`
    left: 25%;
    transform: translate(-50%, -50%);
  `)}
`

export const HeroImage = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  
  ${({ theme }) => theme.mediaQuery.md(`
    aspect-ratio: 16 / 9;
  `)}

  img {
    object-fit: cover;
    object-position: 25%;

    ${({ theme }) => theme.mediaQuery.md(`
      object-position: center;
    `)}
  }
`

export const NavigationButton = styled.div`
  z-index: 1;

  ${({ theme }) => theme.mediaQuery.sm(`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `)}
`

export const ButtonPrev = styled(NavigationButton)`
  left: 8px;

  ${({ theme }) => theme.mediaQuery.sm(`
    left: 24px;
  `)}
`

export const ButtonNext = styled(NavigationButton)`
  right: 8px;

  ${({ theme }) => theme.mediaQuery.sm(`
    right: 24px;
  `)}
`
