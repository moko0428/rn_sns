import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({props, navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>Detail {props}</Text>
    </View>
  );
};
