'use client'

import { css, createGlobalStyle } from 'styled-components'

import { gothamFont } from './fonts'

import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])

library.add(...iconList)

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Remove default margin in favour of better control in authored CSS */
  body, h1, h2, h3, h4, p,
  figure, blockquote, dl, dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100svh;
    line-height: 1.5;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1, h2,
  h3, h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font: inherit;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }
`

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    ${gothamFont.style}
  }
`

export default GlobalStyles
