'use client'

import { useContext } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { SectionThemeContext } from '@/contexts/SectionTheme'
import useSwiperRef from '@/hooks/useSwiperRef'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'

import { ButtonForwardingRef } from '@/components/atoms/Button'
import { SpacerBase } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'

import * as S from './styles'

const Hero = ({ sectionId, items = [] }) => {
  const { selectedColorScheme } = useContext(SectionThemeContext)

  const [nextEl, nextElRef] = useSwiperRef()
  const [prevEl, prevElRef] = useSwiperRef()

  return items && items.length > 0 ? (
    <S.Hero as="section" id={sectionId} colorScheme={selectedColorScheme}>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation={{
          prevEl,
          nextEl,
        }}
        grabCursor={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={`hero-slide-${i + 1}-${item?.id}`}>
            <S.HeroText>
              <Typography typo={item?.title?.typo} weight="bold">
                {item?.title?.content}
              </Typography>
              <SpacerBase xs={1} lg={2} />
              <Typography typo={item?.paragraph?.typo}>
                {item?.paragraph?.content}
              </Typography>
            </S.HeroText>
            <S.HeroImage>
              <Image src={item?.image?.src} alt={item?.image?.alt} fill />
            </S.HeroImage>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ButtonPrev>
        <ButtonForwardingRef ref={prevElRef} variant="secondary" iconEnd="chevron-left" iconEndSize="big" />
      </S.ButtonPrev>
      <S.ButtonNext>
        <ButtonForwardingRef ref={nextElRef} variant="secondary" iconEnd="chevron-right" iconEndSize="big" />
      </S.ButtonNext>
    </S.Hero>
  ) : null
}

Hero.propTypes = {
  sectionId: PropTypes.string,
}

export default Hero
