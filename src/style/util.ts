import { CSSObject } from '@emotion/react'

export const combine = (
  ...styles: (CSSObject | false | null | undefined)[]
): CSSObject =>
  styles.reduce<CSSObject>(
    (result, style) => (style ? { ...result, ...style } : result),
    {}
  )
