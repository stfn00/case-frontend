import Image from 'next/image'
import PropTypes from 'prop-types'

import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Card = ({ image, title, paragraph, cta }) => {
  return (
    <S.Card className="card">
      <S.CardHeader>
        <Image {...image} fill />
        <S.CardTitle as={Typography} {...title} />
      </S.CardHeader>
      <S.CardContent>
        <Typography {...paragraph} />
      </S.CardContent>
      <S.CardFooter>
        <Button {...cta} fullWidth />
      </S.CardFooter>
    </S.Card>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.shape({
    content: PropTypes.string,
    typo: PropTypes.string,
  }),
  paragraph: PropTypes.shape({
    content: PropTypes.string,
    typo: PropTypes.string,
  }),
  cta: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  }),
}

export default Card
