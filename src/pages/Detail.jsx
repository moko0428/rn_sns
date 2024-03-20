import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AlertModal from '../components/AlertModal';

export default ({props, navigation}) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setVisible(!isVisible)}>
        <Text>모달 오픈</Text>
      </TouchableOpacity>
      <Text>Detail {props}</Text>
      <AlertModal
        isVisible={isVisible}
        okText={'확인'}
        noText={'닫기'}
        headerTitle={'디테일 화면'}
        onPressOk={() => setVisible(!isVisible)}
        onPressNo={() => setVisible(!isVisible)}
      />
    </View>
  );
};
