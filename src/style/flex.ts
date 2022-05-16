import { CSSObject } from '@emotion/react'
import { every, isNumber, isUndefined, pick } from 'lodash'

import { combine } from './util'

export type FlexProperties = Pick<
  CSSObject,
  | 'alignItems'
  | 'alignContent'
  | 'flexDirection'
  | 'justifyContent'
  | 'justifyItems'
  | 'flexWrap'
  | 'width'
  | 'height'
  | 'minWidth'
> & {
  column?: boolean
  inline?: boolean
}

export const flex = ({
  column,
  inline,
  ...properties
}: FlexProperties = {}): CSSObject =>
  combine(
    {
      display: inline ? 'inline-flex' : 'flex',
    },
    column && { flexDirection: 'column' },
    pick(properties, [
      'alignItems',
      'alignContent',
      'flexDirection',
      'justifyContent',
      'justifyItems',
      'flexWrap',
      'width',
      'height',
      'minWidth',
    ])
  )

interface FlexPropertyArgs {
  grow?: boolean | number
  shrink?: boolean | number
  basis?: string
  inline?: boolean
}

export type FlexItemProperties = Pick<
  CSSObject,
  'alignSelf' | 'justifySelf' | 'flex' | 'width' | 'height'
> &
  FlexPropertyArgs

const flexProperty = ({ grow, shrink, basis }: FlexPropertyArgs) => {
  if (every([grow, shrink, basis], isUndefined)) return null

  const growVal = isNumber(grow) ? grow : grow ? 1 : 0
  const shrinkVal = isNumber(shrink) ? shrink : shrink === false ? 0 : 1
  const basisVal = !basis ? 'auto' : basis

  return { flex: `${growVal} ${shrinkVal} ${basisVal}` }
}

export const flexItem = ({
  grow,
  shrink,
  basis,
  inline,
  ...properties
}: any = {}): CSSObject =>
  combine(
    inline && { display: 'inline-flex' },
    flexProperty({ grow, shrink, basis }),
    pick(properties, ['alignSelf', 'justifySelf', 'flex', 'width', 'height'])
  )
