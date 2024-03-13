import { View, TouchableOpacity } from 'react-native'

import styles from '../Home/styles';
import Title from '../../componentes/Title';

import {user} from "../../data/Profile";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Title title="Eu te amo, Sport Club Corinthians Paulista"/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile", {user})}>
        <Title title="Go to Profile"/>
        </TouchableOpacity>  
    </View>
  );
}