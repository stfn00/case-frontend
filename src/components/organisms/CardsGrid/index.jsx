import { useContext } from 'react'
import PropTypes from 'prop-types'

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Col, Container, Row } from '@/components/atoms/GridSystem'

import * as S from './styles'
import Card from '@/components/molecules/Card'

const CardsGrid = ({ sectionID, items }) => {
  const { selectedColorScheme } = useContext(SectionThemeContext)

  return items && items.length > 0 ? (
    <S.CardsGrid as="section" id={sectionID} colorScheme={selectedColorScheme}>
      <Container>
        <Row>
          {items.map((item, idx) => (
            <Col xs={12} lg={4} key={`cards-grid-item-${idx}-${item.id}`}>
              <Card {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </S.CardsGrid>
  ) : null
}

CardsGrid.propTypes = {
  sectionID: PropTypes.string,
  items: PropTypes.array,
}

export default CardsGrid
