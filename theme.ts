import { lighten, darken, readableColor } from "polished";

export const theme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },

  colors: {
    tonalOffset: 0.2,
    primary: {
      main: ({ colors }) => colors.palette.black,
      light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    palette: {
      black: "#000000",
      grey1: "#424242",
      grey2: "#828282",
      grey3: "#BBBBBB",
      grey4: "#E0E4EA",
      grey5: "#F0F2F5",
      white: "#FFFFFF",
      blue: "#005F69",
      red: "#EB5757",
      green: "#24B560",
      pink: "#F6C5CF",
    },
    success: {
      main: "#00aa13",
      light: ({ colors }) => lighten(colors.tonalOffset, colors.success.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
      contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    error: {
      main: "#e53935",
      light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
      contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    warning: {
      main: "#d4ad03",
      light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
      contrastText: ({ colors }) => lighten(colors.primary.main),
    },
    brand: {
      success: "#e6eef8",
      warning: "#fcf9e9",
      danger: "#fce9ed",
      attention: "#ebfbe9",
    },
    fastBrandColorPallete: {
      black: ({ colors }) => colors.palette.black,
      white: ({ colors }) => colors.palette.white,
      blue: ({ colors }) => colors.palette.blue,
      red: ({ colors }) => colors.palette.red,
      green: ({ colors }) => colors.palette.green,
      pink: ({ colors }) => colors.palette.pink,
    },
    action: {
      success: ({ colors }) => colors.palette.green,
      error: ({ colors }) => colors.palette.red,
      link: ({ colors }) => colors.palette.blue,
      inactive: ({ colors }) => colors.palette.grey3,
      hover: ({ colors }) => colors.palette.grey4,
      // warning: X
    },
    text: {
      primary: ({ colors }) => colors.palette.grey1,
      base: ({ colors }) => colors.palette.grey1,
      link: ({ colors }) => colors.palette.blue,
      secondary: ({ colors }) => colors.palette.grey2,
      inactive: ({ colors }) => colors.action.inactive,
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
      get: "#6bbd5b",
      post: "#248fb2",
      put: "#9b708b",
      options: "#d3ca12",
      patch: "#e09d43",
      delete: "#e27a7a",
      basic: "#999",
      link: "#31bbb6",
      head: "#c167e4",
    },
  },

  // navbar: {
  //   main: ({ colors }) => colors.primary.main,
  //   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
  //   contrastText: 'white'
  // },
  // footer: {
  // main: ({ colors }) => colors.primary.main,
  // contrastText: 'white'
  // },

  sidebar: {
    backgroundColor: "#fafafa",
    width: "300px",
  },
  typography: {
    fontSize: "16px",
    lineHeight: "1.5em",
    fontWeightRegular: "400",
    fontWeightBold: "600",
    fontWeightLight: "300",
    fontFamily: '"Inter", sans-serif',

    //fontSize: '1rem',
    //lineHeight: '1.5rem',
    //fontFamily: 'Inter',
    fontWeight: {
      bold: "600",
      semibold: "500",
      regular: "400",
      light: "300",
    },
    heading: {
      fontFamily: ({ typography }) => typography.fontFamily,
      lineHeight: "80px",
      large: {
        fontSize: "60",
        fontWeight: ({ typography }) => typography.fontWeight.bold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
      medium: {
        fontSize: "60",
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
      small: {
        fontSize: "60",
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.heading.fontFamily,
        lineHeight: ({ typography }) => typography.heading.lineHeight,
      },
    },
    //headings: {
    //fontFamily: ({ typography }) => typography.fontFamily,
    //fontWeight: "600",
    //},
    heading1: {
      fontSize: "1.85714em",
      fontWeight: ({ typography }) => typography.fontWeightBold,
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      color: ({ colors }) => colors.primary.main,
      capitalize: true,
    },
    heading2: {
      fontSize: "1.57143em",
      fontWeight: ({ typography }) => typography.fontWeightBold,
      color: ({ colors }) => colors.text.primary,
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      capitalize: false,
    },
    heading3: {
      fontSize: "1.27em",
      fontWeight: ({ typography }) => typography.fontWeightBold,
      color: ({ colors }) => colors.text.primary,
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      capitalize: false,
    },
    heading4: {
      // ...
    },
    heading5: {
      // ...
    },
    heading6: {
      // ...
    },

    body: {
      fontFamily: ({ typography }) => typography.fontFamily,
      large: {
        fontSize: "1.5rem",
        fontWeight: ({ typography }) => typography.body.normal.fontWeight,
        fontFamily: ({ typography }) => typography.body.normal.fontFamily,
        lineHeight: "1.75rem",
      },
      normal: {
        fontSize: "1.3333rem",
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.body.fontFamily,
        lineHeight: "2rem",
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
        fontSize: "1.1667rem",
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: "1.6667rem",
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
        fontStyle: "italic",
      },
      caption: {
        fontSize: "1rem",
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: "1.3333rem",
      },
      captionBold: {
        fontSize: ({ typography }) => typography.label.caption.fontSize,
        fontWeight: ({ typography }) => typography.fontWeight.semibold,
        fontFamily: ({ typography }) => typography.label.caption.fontFamily,
        lineHeight: ({ typography }) => typography.label.caption.lineHeight,
      },
      inputCaption: {
        fontSize: "0.8333rem",
        fontWeight: ({ typography }) => typography.fontWeight.regular,
        fontFamily: ({ typography }) => typography.label.fontFamily,
        lineHeight: "1rem",
      },
    },
    code: {
      fontSize: "16px",
      fontFamily: '"Source Code Pro", sans-serif',
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      // fontWeight: ({ typography }) => typography.fontWeight.regular,
      color: "#e53935",
      backgroundColor: "rgba(38, 50, 56, 0.04)",
      wrap: false,
    },
    links: {
      color: "#4c86a8",
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography, colors }) =>
        lighten(colors.tonalOffset, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: "#263238",
    width: "40%",
    // textColor: '#ffffff',
  },
  schema: {
    nestedBackground: "#fafafa",
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    // typeNameColor: theme => theme.colors.text.secondary,
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  // codeBlock: {
  //   backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  //   tokens: {},
  // },
};
