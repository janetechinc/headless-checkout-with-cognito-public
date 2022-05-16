import { CSSObject } from '@emotion/react'

export type Spacing =
  | -128
  | -72
  | -64
  | -56
  | -48
  | -40
  | -32
  | -24
  | -20
  | -16
  | -12
  | -8
  | -4
  | -2
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 128
  | 'auto'

export interface MarginProperties {
  m?: Spacing
  mx?: Spacing
  my?: Spacing
  mt?: Spacing
  mr?: Spacing
  mb?: Spacing
  ml?: Spacing
}

export const margin = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: MarginProperties): CSSObject => {
  if (
    m != null &&
    mx == null &&
    my == null &&
    mt == null &&
    mr == null &&
    mb == null &&
    ml == null
  )
    return { margin: m }

  return {
    marginTop: or(mt, my, m),
    marginRight: or(mr, mx, m),
    marginBottom: or(mb, my, m),
    marginLeft: or(ml, mx, m),
  }
}

export interface PaddingProperties {
  p?: Spacing
  px?: Spacing
  py?: Spacing
  pt?: Spacing
  pr?: Spacing
  pb?: Spacing
  pl?: Spacing
}

export const padding = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: PaddingProperties): CSSObject => {
  if (
    p != null &&
    px == null &&
    py == null &&
    pt == null &&
    pr == null &&
    pb == null &&
    pl == null
  )
    return { padding: p }

  return {
    paddingTop: or(pt, py, p),
    paddingRight: or(pr, px, p),
    paddingBottom: or(pb, py, p),
    paddingLeft: or(pl, px, p),
  }
}

export const spacing = (
  args: MarginProperties & PaddingProperties
): CSSObject => ({
  ...margin(args),
  ...padding(args),
})

export const negative = (spacing: Spacing): Spacing => -spacing as Spacing

const or = (
  a: undefined | Spacing,
  b: undefined | Spacing,
  c: undefined | Spacing
) => {
  if (a != null) return a
  if (b != null) return b
  return c
}
