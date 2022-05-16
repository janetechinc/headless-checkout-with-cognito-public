export const mediaQueries = {
  fourteenForty: '(min-width: 1440px)',
  desktop: '(min-width: 1024px)',
  horizontalTablet: '(min-width: 768px) and (max-width: 1023px)',
  verticalTablet: '(min-width: 481px) and (max-width: 767px)',
  largerThanMobile: '(min-width: 481px)',
  largerThanVerticalTablet: '(min-width: 768px)',
  smallerThanDesktop: '(max-width: 1023px)',
  smallerThanVerticalTablet: '(max-width: 767px)',
  mobile: '(max-width: 480px)',
  retina: `(min-resolution: 2dppx)`,
  webkitRetina: `(-webkit-min-device-pixel-ratio: 2)`,
  hover: '(hover: hover)',
}

const RETINA_MEDIA_QUERIES = [mediaQueries.retina, mediaQueries.webkitRetina]

export const media = (...medias: string[]) => `@media ${medias.join(' and ')}`

export const retinaMedia = (media?: string) =>
  `@media ${RETINA_MEDIA_QUERIES.map((mediaQuery) =>
    media ? `${media} and ${mediaQuery}` : mediaQuery
  ).join(', ')}`
