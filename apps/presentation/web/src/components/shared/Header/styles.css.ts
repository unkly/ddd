import { style } from '@vanilla-extract/css'

export const header = {
  rootContainer: style({
    position: 'sticky',
    top: 0,
    left: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '12px 10%',
    border: `1px solid #ccc`,
  }),
  title: style({
    fontSize: 24,
    cursor: 'pointer',
  }),
  buttonContainer: style({
    display: 'flex',
    gap: '12px',
  }),
	button: style({
		borderBottom: '1px solid white',
		padding: '6px 12px',
		fontSize: '16px',
		textTransform: 'none',
		borderRadius: 0,
		boxShadow: 'none',
		':hover': {
			borderBottom: '1px solid #ccc',
			backgroundColor: 'transparent',
			boxShadow: 'none',
		},
	}),
  searchRecipes: {
    rootContainer: style({
      border: '1px solid #ccc',
      alignItems: 'center',
      display: 'flex',
      padding: '4px 8px',
      width: '50%',
    }),
    input: style({
      width: '100%',
      fontSize: '16px',
      resize: 'none',
      padding: '4px 8px',
      height: ' 24px',
      border: ' none',
      outline: ' none',
    }),
  },
}
