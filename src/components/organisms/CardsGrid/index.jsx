import { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Col, Container, Row } from '@/components/atoms/GridSystem'
import Card from '@/components/molecules/Card'

import * as S from './styles'

const CardsGrid = ({ sectionID, items }) => {
  const wrapperRef = useRef(null)
  const { selectedColorScheme } = useContext(SectionThemeContext)

  useEffect(() => {
    gsap.fromTo(
      '.card',
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 50%',
          end: 'top',
        },
      }
    )
  }, [])

  return items && items.length > 0 ? (
    <S.CardsGrid
      as="section"
      id={sectionID}
      colorScheme={selectedColorScheme}
      ref={wrapperRef}
    >
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
