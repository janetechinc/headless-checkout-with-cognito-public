import { CSSObject } from '@emotion/react'

import { media, mediaQueries } from './media'

export const fontSizes = {
  tiny: 12,
  smaller: 13,
  small: 14,
  normal: 16,
  big: 18,
  large: 20,
  extraLarge: 22,
  huge: 42,
}

export const titleOne: CSSObject = {
  fontSize: 28,
  fontWeight: 'bold',
  [media(mediaQueries.largerThanVerticalTablet)]: {
    fontSize: 40,
  },
}

export const titleTwo: CSSObject = {
  fontSize: 24,
  fontWeight: 'bold',
  lineHeight: 1.1,
}

export const titleThree: CSSObject = {
  fontSize: 14,
  fontWeight: 'bold',
}

export const titleFour: CSSObject = {
  fontSize: 14,
}

export const titleFive: CSSObject = {
  fontSize: 12,
  fontWeight: 'bold',
}

export const body: CSSObject = {
  fontSize: 16,
  fontWeight: 300,
}

export const bodySemibold: CSSObject = {
  fontSize: 16,
  fontWeight: 600,
}

export const CTA: CSSObject = {
  fontSize: 16,
  fontWeight: 'bold',
}

export const labelHeader: CSSObject = {
  fontSize: 18,
  fontWeight: 'bold',
}

export const largeText: CSSObject = {
  fontSize: 16,
}

export const medText: CSSObject = {
  fontSize: 14,
}

export const smallText: CSSObject = {
  fontSize: 13,
}

export const tinyText: CSSObject = {
  fontSize: 12,
}
