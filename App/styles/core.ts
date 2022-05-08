import { StyleSheet } from 'react-native'
import { colors } from './colors'

export default StyleSheet.create({
  // BACKGROUNDS
  backgroundDark: {
    backgroundColor: colors.dark,
  },
  backgroundLight: {
    backgroundColor: colors.light,
  },
  backgroundgrey100: {
    backgroundColor: colors.grey[100],
  },
  backgroundgrey500: {
    backgroundColor: colors.grey[500],
  },
  backgroundgrey900: {
    backgroundColor: colors.grey[900],
  },

  // TEXT-COLORS
  textDark: {
    color: colors.dark,
  },
  textLight: {
    color: colors.light,
  },
  container: {
    marginHorizontal: 16,
  },

  rounded: {
    borderRadius: 16,
  },
})
