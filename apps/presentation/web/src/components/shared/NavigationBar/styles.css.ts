import { style } from '@vanilla-extract/css';

export const navigationBar = {
  rootContainer: style({
    borderRight: '1px solid #ccc',
    padding: '48px 24px',
    position: 'sticky',
    top: `42px`,
    left: 0,
    width: '240px',
  }),
  list: style({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }),
  item: style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    padding: '12px 0',
    borderBottom: 'transparent solid 1px',

    ':hover': {
      borderBottom: '#f0f0f0 solid 1px',
    },
  }),
  itemText: style({
    fontSize: '18px',
    margin: 0,
  }),
}
