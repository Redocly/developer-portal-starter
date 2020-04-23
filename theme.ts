import { lighten, readableColor } from 'polished';

export const theme = {
  colors: {
    primary: {
      main: '#227a88',
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    text: {
      primary: '#424242',
    },
    brand: {
      success: '#5776b7',
      warning: '#dfc726',
      danger: '#c0574f',
      attention: '#edf8f2',
    },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
  },

  sidebar: {
    backgroundColor: '#fafafa',
    width: '260px',
  },

  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: 'Roboto, sans-serif',
    headings: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '600',
    },
    code: {
      fontSize: '14px',
      fontFamily: 'Courier, monospace',
      fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
  },
  schema: {
    nestedBackground: '#fafafa',
  },
};
