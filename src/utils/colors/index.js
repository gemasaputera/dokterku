const mainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  lightBlue: '#EDFCFD',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  lightBlue: mainColors.lightBlue,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
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
  },
  border: mainColors.grey2,
};
