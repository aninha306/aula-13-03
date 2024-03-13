import { View, Text } from 'react-native'
import styles from '../Title/styles'

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Title