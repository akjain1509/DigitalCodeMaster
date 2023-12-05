import {Dimensions} from 'react-native';

export const Layout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Icons = {
  active_home: require('../assets/active_home.png'),
  active_bell: require('../assets/active_bell.png'),
  active_game: require('../assets/active_game.png'),
  active_profile: require('../assets/active_profile.png'),
  inactive_home: require('../assets/inactive_home.png'),
  inactive_bell: require('../assets/inactive_bell.png'),
  inactive_game: require('../assets/inactive_game.png'),
  inactive_profile: require('../assets/inactive_profile.png'),
  loader: require('../assets/loader.png'),
  back: require('../assets/back.png'),
};
export const Colors = {
  primary: '#2AAA8A',
  black: '#000',
  white: '#fff',
  red: 'red',
};
