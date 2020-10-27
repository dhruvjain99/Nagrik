import { StyleSheet } from 'react-native';
import {backgroundBodyColor} from './cssVariables';

const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      display: 'flex',
      backgroundColor: backgroundBodyColor,
      flexDirection: "column"
    }
  });

export default backgroundStyle;