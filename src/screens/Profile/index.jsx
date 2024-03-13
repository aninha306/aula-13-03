import { View, Text } from 'react-native'

import styles from '../Profile/styles';
import Title from '../../componentes/Title';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Title title="I Love Sport Club Corinthians Paulista"/>
    </View>
  );
}