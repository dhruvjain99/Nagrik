import { StyleSheet } from 'react-native';
import {backgroundBodyColor, headerBackgroundColor} from './cssVariables';

const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: headerBackgroundColor
    },
    scrollView: {
      display: 'flex',
      backgroundColor: backgroundBodyColor,
      flexDirection: "column"
    }
  });

export default backgroundStyle;