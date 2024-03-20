import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

const dummy_data = [
  {
    id: 1,
    title: '12월 24일 크리스마스 이벤트 당첨자 안내',
    content: 'asdasdadsad',
    created_data: '2023년 12월 24일',
  },
  {
    id: 2,
    title: '12월 24일 크리스마스 이벤트 당첨자 안내',
    content: 'asdasdadsad',
    created_data: '2023년 12월 24일',
  },
  {
    id: 3,
    title: '12월 24일 크리스마스 이벤트 당첨자 안내',
    content: 'asdasdadsad',
    created_data: '2023년 12월 24일',
  },
];

export default ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NoticeDetail')}
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBlockColor: '#f4f4f4',
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title={'공지사항'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
