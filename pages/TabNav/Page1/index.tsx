import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles';

const Page1: React.FC = () => {
  const navigation = useNavigation()
  function navigateTo() {
    navigation.goBack()
  }
  return <View style={{ backgroundColor: '#3c3c3c', flex: 1 }}>
    <Text>Page1</Text>
    <Button onPress={navigateTo} title={'GoBack'}></Button>

  </View>;
}

export default Page1;