import React, {useContext} from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../contexts/auth";

// import { Container } from './styles';

const Loged: React.FC = () => {
    const navigation = useNavigation()
    function navigate() {
        navigation.navigate('Post')
    }
    const { signIn} = useContext(AuthContext)
    function handleSignOut() {
        console.log('Sign Out')
        signIn();
    }
  return <View >
      <>
      <Button title="Sign Out" onPress={()=>handleSignOut()}></Button>
      <Image source={require('../../assets/eu.jpg')} style={{borderRadius:10, width:70, height:70}} ></Image>
      <Text >Mateus Andriola</Text>
      </>
      <Button  title="Post" onPress={()=>navigate()} />
  </View>;
}

export default Loged;