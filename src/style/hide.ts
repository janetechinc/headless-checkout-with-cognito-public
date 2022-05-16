export const hide = () =>
  ({
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap',
  } as const)
