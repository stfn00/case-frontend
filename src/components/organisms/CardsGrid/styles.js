import styled from 'styled-components'

export const CardsGrid = styled.div`
  padding: ${({ theme }) => theme.rem(48, 0)};
  background-color: ${({ theme, colorScheme }) => theme.colors[colorScheme].surface.background};
`
