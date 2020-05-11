import React from 'react';
import { View, Text, Button } from 'react-native';
import { PropsProfile } from "../../routes";


// import { Container } from './styles';

const Profile: React.FC<PropsProfile> = ({navigation, route}) => {

  function navigateTo(value:number) {
    navigation.navigate("Tab", {name: route.params?.name, number:value===2?2:1})
  }

  return <View style={{ backgroundColor: '#004433', flex: 1 }}>
    <Text>{route.params?.name||"Navigate"}</Text>
    <Button onPress={()=>navigateTo(1)} title={"Navigate 1"}></Button>
    <Button onPress={()=>navigateTo(2)} title={"Navigate 2"}></Button>


  </View>;
}

export default Profile;