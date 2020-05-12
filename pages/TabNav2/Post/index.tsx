import React from 'react';
import { Image } from 'react-native';

// import { Container } from './styles';

const Post: React.FC = () => {
  return <Image source={require('../../../assets/Avatar.jpg')} style={{resizeMode:"cover", flex:1, width:395}}/>;
}

export default Post;