import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, Switch } from 'react-native';
import { PropsHome } from "../../contexts/routes";
import AuthContext from "../../contexts/auth";

// import { Container } from './styles';

const Home2: React.FC<PropsHome> = ({navigation, route }) => {
  const[name, setName]=useState(route.params.name)
  const { signed, signIn } = useContext(AuthContext);
  function navigateToProfile() {
    navigation.navigate('Profile2', {name:name})
  }

  return <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
    <Text>Home</Text>
    <Button onPress={navigateToProfile} title={'Navigate'}>Navigate</Button>
    <Switch 
          onValueChange={signIn}
          value={signed}

    ></Switch>
    <Text style={{color:"#ffffff"}}>Welcome {route.params.name}</Text>
  </View>;
}

export default Home2;