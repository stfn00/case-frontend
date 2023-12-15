import PropTypes from 'prop-types'
import { ColorSchemeTypes } from '@/utils/prop-types'

import * as S from './styles'

const Hero = ({ colorScheme }) => {
  
  return (
    <S.Hero colorScheme={colorScheme}>
      Hero
    </S.Hero>
  )
}

Hero.propTypes = {
  colorScheme: ColorSchemeTypes,
}

export default Hero
