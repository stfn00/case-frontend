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
        {items.map((item, idx) => (
          <SwiperSlide key={`hero-slide-${idx + 1}-${item?.id}`}>
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
              <Image
                src={item?.image?.src}
                alt={item?.image?.alt}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority={idx === 0}
              />
            </S.HeroImage>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ButtonPrev>
        <ButtonForwardingRef ref={prevElRef} variant="secondary" iconEnd="chevron-left" iconEndSize="big" ariaLabel="Precedente slide" />
      </S.ButtonPrev>
      <S.ButtonNext>
        <ButtonForwardingRef ref={nextElRef} variant="secondary" iconEnd="chevron-right" iconEndSize="big" ariaLabel="Prossima slide" />
      </S.ButtonNext>
    </S.Hero>
  ) : null
}

Hero.propTypes = {
  sectionId: PropTypes.string,
}

export default Hero
