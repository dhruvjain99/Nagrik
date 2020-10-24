import {Dimensions, StyleSheet} from 'react-native';
import {backgroundBodyColor} from './cssVariables';
const backgroundStyle = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: backgroundBodyColor,
      flexDirection: "column",
      minHeight: Dimensions.get('window').height
    },
  });

export default backgroundStyle;