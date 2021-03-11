import { lighten, darken, readableColor } from 'polished';

export const theme = {

  colors: {
    palette: {
      black: '#000000',
      grey1: '#474747',
      grey2: '#828282',
      grey3: '#BBBBBB',
      grey4: '#E0E4EA',
      grey5: '#F0F2F5',
      white: '#FFFFFF',
      blue: '#0286FF',
      red: '#EB5757',
      green: '#24B560',
      pink: '#F6C5CF'
    },
    action: {
      success: ({ colors }) => colors.palette.green,
      error: ({ colors }) => colors.palette.red,
      link: ({ colors }) => colors.palette.blue,
      inactive: ({ colors }) => colors.palette.grey3,
      hover: ({ colors }) => colors.palette.grey4,
      // warning: X
    },
    brand: {
      black: ({ colors }) => colors.palette.black,
      white: ({ colors }) => colors.palette.white,
      blue: ({ colors }) => colors.palette.blue,
      red: ({ colors }) => colors.palette.red,
      green: ({ colors }) => colors.palette.green,
      pink: ({ colors }) => colors.palette.pink,
    },
    text: {
      primary: 'red',
      secondary: 'purple',
      // primary: ({ colors }) => colors.palette.black,
      // base: ({ colors }) => colors.palette.grey1,
      // secondary: ({ colors }) => colors.palette.grey2,
      // inactive: ({ colors }) => colors.action.inactive,
    },
    icon: {
      background: ({ colors }) => colors.palette.grey5,
      inactive: ({ colors }) => colors.action.inactive,
      actionable: ({ colors }) => colors.action.link,
      base: ({ colors }) => colors.text.base,
      hover: ({ colors }) => colors.action.hover,
    },
    background: {
      flush: ({ colors }) => colors.palette.grey5,
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
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontFamily: 'Inter',

    fontWeight: {
      bold: '600',
      semibold: '500',
      regular: '400',
      light: '300',
    },
    heading: {
      fontFamily: ({ typography }) => typography.fontFamily,
      lineHeight: '1.5rem',
      large: {
        fontSize: '1.75rem',
        fontWeight: ({ typography }) => typography.fontWeight.bold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
      medium: {
        fontSize: '1.5rem',
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
      small: {
        fontSize: '1.3333rem',
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
    },
    body: {
      fontFamily: ({ typography }) => typography.fontFamily,
      large: {
        fontSize: '1.5rem',
        fontWeight: ({ typography }) => typography.body.normal.fontWeight,
        fontFamily: ({ typography }) => typography.body.normal.fontFamily,
        lineHeight: '1.75rem',
      },
      normal: {
        fontSize: '1.3333rem',
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.body.fontFamily,
        lineHeight: '2rem',
      },
      normalBold: {
        fontSize: ({ typography }) => typography.body.normal.fontSize,
        fontWeight: ({ typography }) => typography.fontWeight.bold,
        fontFamily: ({ typography }) => typography.body.normal.fontFamily,
        lineHeight: ({ typography }) => typography.body.normal.lineHeight,
      },
    },
    label: {
      fontFamily: ({ typography }) => typography.fontFamily,
      regular: {
        fontSize: '1.1667rem',
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: '1.6667rem',
      },
      semibold: {
        fontSize: ({ typography }) => typography.label.regular.fontSize,
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.label.regular.fontFamily,
        lineHeight: ({ typography }) => typography.label.regular.lineHeight,
      },
      italics: {
        fontSize: ({ typography }) => typography.label.regular.fontSize,
        fontWeight: ({ typography }) => typography.label.regular.fontWeight,
        fontFamily: ({ typography }) => typography.label.regular.fontFamily,
        lineHeight: ({ typography }) => typography.label.regular.lineHeight,
        fontStyle: 'italic',
      },
      caption: {
        fontSize: '1rem',
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: '1.3333rem',
      },
      captionBold: {
        fontSize: ({ typography }) => typography.label.caption.fontSize,
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.label.caption.fontFamily,
        lineHeight: ({ typography }) => typography.label.caption.lineHeight,
      },
      inputCaption: {
        fontSize: '0.8333rem',
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: '1rem',
      },
    },
    code: {
      fontSize: '14px',
      fontFamily: 'Courier, monospace',
      fontWeight: ({ typography }) => typography.fontWeight.regular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
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