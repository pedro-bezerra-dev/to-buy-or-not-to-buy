import { createTheme } from '@mui/material/styles'

import { colors } from './colors'
import { typography } from './typography'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.text,
    },
    error: {
      main: colors.error,
      contrastText: colors.background,
    },
    warning: {
      main: colors.warning,
      contrastText: colors.text,
    },
    success: {
      main: colors.success,
      contrastText: colors.text,
    },
    text: {
      primary: colors.text,
    },
  },
  typography: {
    allVariants: {
      color: colors.text,
    },
    h1: {
      fontFamily: typography.heading[1].fontFamily,
      fontWeight: typography.heading[1].fontWeight,
      fontSize: typography.heading[1].fontSize,
    },
    h2: {
      fontFamily: typography.heading[2].fontFamily,
      fontWeight: typography.heading[2].fontWeight,
      fontSize: typography.heading[2].fontSize,
    },
    h3: {
      fontFamily: typography.heading[3].fontFamily,
      fontWeight: typography.heading[3].fontWeight,
      fontSize: typography.heading[3].fontSize,
    },
    h4: {
      fontFamily: typography.heading[4].fontFamily,
      fontWeight: typography.heading[4].fontWeight,
      fontSize: typography.heading[4].fontSize,
    },
    h5: {
      fontFamily: typography.heading[5].fontFamily,
      fontWeight: typography.heading[5].fontWeight,
      fontSize: typography.heading[5].fontSize,
    },
    subtitle1: {
      fontFamily: typography.subheading[1].fontFamily,
      fontWeight: typography.subheading[1].fontWeight,
      fontSize: typography.subheading[1].fontSize,
    },
    subtitle2: {
      fontFamily: typography.subheading[2].fontFamily,
      fontWeight: typography.subheading[2].fontWeight,
      fontSize: typography.subheading[2].fontSize,
    },
    body1: {
      fontFamily: typography.body[1].fontFamily,
      fontWeight: typography.body[1].fontWeight,
      fontSize: typography.body[1].fontSize,
    },
    body2: {
      fontFamily: typography.body[2].fontFamily,
      fontWeight: typography.body[2].fontWeight,
      fontSize: typography.body[2].fontSize,
    },
    caption: {
      fontFamily: typography.body[3].fontFamily,
      fontWeight: typography.body[3].fontWeight,
      fontSize: typography.body[3].fontSize,
    },
  },
})
