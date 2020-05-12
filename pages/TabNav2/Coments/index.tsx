import React from 'react';
import { View,Text } from 'react-native';

// import { Container } from './styles';

const Coments: React.FC = () => {
  const comentList=[{
    key:1,
    value:"Cool"
  },
  {
    key:2,
    value:"Avatar hehe"
  },{
    key:3,
    value:"Aang"
  },
]
  return <View >
    {
      comentList.map(item=>(
        <View key={item.key} style={{backgroundColor:"#999999", padding:10, margin:10, borderRadius:5, justifyContent:'space-between', flexDirection:'row' }}>
          <Text >{item.value}</Text>
          <Text style={{fontWeight:'bold'}}>Like</Text>
        </View>
      ))
    }
  </View>;
}

export default Coments;