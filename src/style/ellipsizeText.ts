import { CSSObject } from '@emotion/react'

export const ellipsizeText = (): CSSObject => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})
