import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    content: '점심 먹었니 친구야',
    created_data: '12:03PM',
    position: 'left',
    profileImg: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '아니 아직 안먹었어, 너는 먹었니?',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
  {
    id: 3,
    name: '나',
    content: '안먹었으면 같이 먹을까?? 먹고 싶은 메뉴가 있으면 말해보겠니?',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
  {
    id: 4,
    name: '이민구',
    content:
      '나는 풍자 또 간집에 나온 소라 편의점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ',
    created_data: '12:03PM',
    position: 'left',
    profileImg: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 5,
    name: '나',
    content: '그럼 먹으러 가자구~~~',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
  {
    id: 6,
    name: '이민구',
    content: '몇시에 만날래?',
    created_data: '12:03PM',
    position: 'left',
    profileImg: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 7,
    name: '나',
    content: '글쎄, 담주에 시간 되는 날 있어?',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
  {
    id: 8,
    name: '이민구',
    content: '담주 수요일에 만나는건 어떠니',
    created_data: '12:03PM',
    position: 'left',
    profileImg: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 9,
    name: '나',
    content: '앗, 좋아',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
  {
    id: 10,
    name: '이민구',
    content: '몇시에 만날래?',
    created_data: '12:03PM',
    position: 'left',
    profileImg: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 11,
    name: '나',
    content: '글쎄, 몇시가 좋을까 나는 아무때나 상관없어',
    created_data: '12:03PM',
    position: 'right',
    profileImg: require('../assets/icons/plus.png'),
    isOpen: true,
  },
];

export default () => {
  const renderItem = item => {
    <View>
      <Image source={item.profileImg} />
      <Text>{item.content}</Text>
    </View>;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Carousel</Text>
        <Carousel
          data={dummy_data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={320}
        />
      </View>
    </SafeAreaView>
  );
};
