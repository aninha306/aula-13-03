import { View,  } from 'react-native'

import styles from '../Profile/styles';
import Title from '../../componentes/Title';

export default function Profile({route}) {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Title title="SCCP"/>
      <Title title={`Nome: ${user.name}`}/>
      <Title title={`Idade: ${user.age}`}/>
      <Title title={`Email: ${user.email}`}/>
    </View>
  );
}