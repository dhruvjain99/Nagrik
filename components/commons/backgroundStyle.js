import {StyleSheet} from 'react-native';
import {backgroundBodyColor} from './cssVariables';
const backgroundStyle = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: backgroundBodyColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default backgroundStyle;