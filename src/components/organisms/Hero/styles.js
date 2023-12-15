import styled from 'styled-components'

export const Hero = styled.div`
  background-color: ${({ theme, colorScheme }) => theme.colors[colorScheme].surface.background};
`
