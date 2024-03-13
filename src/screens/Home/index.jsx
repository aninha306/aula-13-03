import { View, Text } from 'react-native'

import styles from '../Home/styles';
import Title from '../../componentes/Title';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="I Love Sport Club Corinthians Paulista"/>
    </View>
  );
}