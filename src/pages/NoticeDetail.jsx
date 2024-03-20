import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title={'이벤트 당첨자 안내'} />
      <View style={{flex: 1}}>
        <ScrollView>
          <Text>이벤트 당첨자 안내</Text>
          <Text>12월 24일 크리스마스 당첨자 안내</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
