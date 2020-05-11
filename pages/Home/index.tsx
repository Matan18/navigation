import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsHome } from "../../routes";

// import { Container } from './styles';

const Home: React.FC<PropsHome> = ({navigation, route }) => {
  const[name, setName]=useState(route.params.name)
  function navigateToProfile() {
    navigation.navigate('Profile', {name:name})
  }

  return <View style={{ backgroundColor: '#440035', flex: 1 }}>
    <Text>Home</Text>
    <Button onPress={navigateToProfile} title={'Navigate'}>Navigate</Button>
    <Text style={{color:"#ffffff"}}>Welcome {route.params.name}</Text>
  </View>;
}

export default Home;