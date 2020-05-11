import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles';

const Page2: React.FC = () => {
  const navigation = useNavigation()
  function navigateTo() {
    navigation.navigate('Profile')
  }
  return <View style={{ backgroundColor: '#773300', flex: 1 }}>
    <Text>Page2</Text>
    <Button onPress={navigateTo} title={'GoBack'}></Button>

  </View>;
}

export default Page2;