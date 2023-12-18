import { useContext } from 'react'
import Image from 'next/image'

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Col, Container, Row, SpacerBase } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import * as S from './styles'

const Banner = ({ sectionId, title, paragraph, cta, image, variant }) => {
  const { selectedColorScheme } = useContext(SectionThemeContext)

  return (
    <S.Banner as="section" id={sectionId} colorScheme={selectedColorScheme}>
      <Container fluid noGutter>
        <Row
          reverse={variant === 'right' ? ['lg', 'xl', 'xxl'] : false}
          noGutter
        >
          <Col
            xs={12}
            lg={4}
            justify="center"
            align={variant === 'right' ? 'flex-start' : 'flex-end'}
            $offset={variant === 'right' ? { lg: 1 } : null}
            $order={{ xs: 2, lg: 1 }}
            noGutter
          >
            <S.BannerText variant={variant}>
              {title ? (
                <Typography typo={title?.typo} weight="bold">
                  {title?.content}
                </Typography>
              ) : null}
              {paragraph ? (
                <>
                  <SpacerBase xs={2} />
                  <Typography typo={paragraph?.typo} weight="bold">
                    {paragraph?.content}
                  </Typography>
                </>
              ) : null}
              {cta ? (
                <>
                  <SpacerBase xs={3} />
                  {cta ? (
                    <Button {...cta} variant="primary" iconEnd="arrow-right" />
                  ) : null}
                </>
              ) : null}
            </S.BannerText>
          </Col>
          <Col
            xs={12}
            lg={7}
            $offset={variant === 'right' ? null : { lg: 1 }}
            $order={{ xs: 1, lg: 2 }}
            noGutter
          >
            {image ? (
              <S.BannerImage>
                <Image src={image.src} alt={image.alt} fill />
              </S.BannerImage>
            ) : null}
          </Col>
        </Row>
      </Container>
    </S.Banner>
  )
}

Banner.propTypes = {}

export default Banner
