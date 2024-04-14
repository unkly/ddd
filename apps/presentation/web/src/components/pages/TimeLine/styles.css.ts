import { style } from '@vanilla-extract/css'

export const timeLine = {
  main: {
    rootContainer: style({
      padding: '24px',
    }),
    postForm: style({
      marginBottom: '24px',
    }),
  },
  postForm: {
    rootContainer: style({
      padding: '18px',
      border: `1px solid #ccc`,
      borderRadius: '4px',
      display: 'grid',
      gap: '18px',
    }),
    inputContainer: style({
      display: 'flex',
    }),
    input: style({
      marginLeft: '8px',
      outline: 'none',
      border: `1.5px solid black`,
      width: '100%',
      padding: '4px',
    }),
    bottomContainer: style({
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '2px',
    }),
  },
}
