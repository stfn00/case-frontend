import { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Col, Container, Row, SpacerBase } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

gsap.registerPlugin(ScrollTrigger)

import * as S from './styles'

const Banner = ({ sectionID, title, paragraph, cta, image, variant }) => {
  const wrapperRef = useRef(null)
  const imageRef = useRef(null)

  const { selectedColorScheme } = useContext(SectionThemeContext)

  useEffect(() => {
    gsap.fromTo(
      imageRef.current.querySelector('img'),
      {
        autoAlpha: 0,
        scale: 1.05,
      },
      {
        autoAlpha: 1,
        scale: 1,
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

  return (
    <S.Banner as="section" id={sectionID} colorScheme={selectedColorScheme} ref={wrapperRef}>
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
                <Typography typo={title?.typo} weight="bold" className="split-text">
                  {title?.content}
                </Typography>
              ) : null}
              {paragraph ? (
                <>
                  <SpacerBase xs={2} />
                  <Typography typo={paragraph?.typo} weight="bold" className="split-text">
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
              <S.BannerImage ref={imageRef}>
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
