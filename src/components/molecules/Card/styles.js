import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.rem(24, 0)};
`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 4 / 1;

  img {
    object-fit: cover;
    object-position: center;
  }
`
export const CardTitle = styled.div`
  color: #FFFFFF;
  letter-spacing: ${({ theme }) => theme.rem(4)};
  z-index: 1;
`

export const CardContent = styled.div`
  width: 100%;
  flex: 1;
  padding: ${({ theme }) => theme.rem(48)};
  background-color: #FFFFFF;
  color: #000000;
  text-align: center;
`

export const CardFooter = styled.div`
  width: 100%;
`
