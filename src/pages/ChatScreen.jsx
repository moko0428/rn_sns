import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from '../components/Toast';

const leftArrow = require('../assets/icons/leftArrow.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const leftbubble = require('../assets/icons/leftbubbleTriangle.png');
const rightbubble = require('../assets/icons/rightbubble.png');
const plus = require('../assets/icons/plus.png');

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

const MyChat = ({data, nextData}) => {
  return (
    <View style={[styles.chatRowWrapper, {marginLeft: 'auto'}]}>
      {nextData?.position !== data?.position && data.isOpen ? (
        <View style={styles.chatInfoWrapper}>
          <Text style={styles.chatTime}>읽음</Text>
          <View style={styles.microBar} />
          <Text style={styles.chatTime}>{data.created_data}</Text>
        </View>
      ) : nextData?.position !== data?.position && !data.isOpen ? (
        <View style={styles.chatInfoWrapper}>
          <Text style={styles.chatTime}>{data.created_data}</Text>
        </View>
      ) : (
        <View />
      )}
      <View style={styles.myBubbleWrapper}>
        <Text style={styles.myChat}>{data.content}</Text>
      </View>
      <Image source={rightbubble} style={{width: 8, height: 8, marginTop: 6}} />
    </View>
  );
};

const FriendChat = ({data}) => {
  return (
    <View style={styles.chatRowWrapper}>
      <Image source={data.profileImg} style={{width: 40, height: 40}} />
      <View style={{marginLeft: 8}}>
        <Text>{data.name}</Text>
        <View style={styles.bubbleContainer}>
          <Image
            source={leftbubble}
            style={{width: 8, height: 8, marginTop: 6}}
          />
          <View style={styles.bubbleWrapper}>
            <Text>{data.content}</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>{data.created_data}</Text>
      </View>
    </View>
  );
};

export default ({route, navigation}) => {
  const {name} = route.params.params;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const [toastVisible, setToastVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <Toast
        content={'아직 구현되지 않은 기능입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(false)}
      />
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
          <View style={styles.backButton} />
        </View>
        <View style={styles.chattingScreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item, index}) =>
              item.position === 'left' ? (
                <FriendChat data={item} />
              ) : (
                <MyChat data={item} nextData={dummy_data[index + 1]} />
              )
            }
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text
                  style={
                    styles.chatDay
                  }>{`${year}년 ${month}월 ${day}일`}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={{padding: 16, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setToastVisible(!toastVisible)}
          style={{
            borderWidth: 1,
            borderColor: '#efefef',
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={plus} style={{width: 12, height: 12}} />
        </TouchableOpacity>
        <TextInput
          placeholder="메세지 입력하기"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#efefef',
            borderRadius: 20,
            marginLeft: 8,
            paddingHorizontal: 12,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    fontSize: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19.97,
    textAlign: 'center',
    color: '#000',
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  chatDayWrapper: {
    marginTop: 16,
    marginBottom: 8,
  },
  chatDay: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.47,
    color: '#828282',
    textAlign: 'center',
  },
  chatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  bubbleWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  chatTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chatTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#737373',
    lineHeight: 14.98,
    marginHorizontal: 6,
  },
  myBubbleWrapper: {
    backgroundColor: '#6297ff',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  myChat: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    lineHeight: 22.5,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: '#d5d5d5',
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
