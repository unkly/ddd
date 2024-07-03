import { style } from '@vanilla-extract/css'

export const communityList = {
  rootContainer: style({
    borderLeft: `1px solid #ccc`,
    padding: '24px',
    width: '360px',
  }),
  title: style({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
  }),
}
