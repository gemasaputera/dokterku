const mainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#8092AF',
  grey4: '#EDEEF0',
  lightBlue: '#EDFCFD',
  blue: '#0066CB',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  lightBlue: mainColors.lightBlue,
  blue: mainColors.blue,
  disable: mainColors.grey4,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    tertiary: mainColors.grey3,
    menuActive: mainColors.green1,
    menuInactive: mainColors.dark2,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    tertiary: {
      background: mainColors.blue,
      text: 'white',
    },
  },
  border: mainColors.grey2,
};
