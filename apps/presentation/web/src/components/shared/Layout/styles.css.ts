import { style } from '@vanilla-extract/css';

export const layout = {
  rootContainer: style({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }),
  contentContainer: style({
    display: 'flex',
    height: `calc(100vh - 42px)`,
    overflow: 'hidden',
  }),
  scrollContainer: style({
    overflowY: 'auto',
    width: '100%',
  }),
}
