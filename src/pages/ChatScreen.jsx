import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const leftArrow = require('../assets/icons/leftArrow.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const leftbubble = require('../assets/icons/leftbubbleTriangle.png');
const rightbubble = require('../assets/icons/rightbubble.png');
const plus = require('../assets/icons/plus.png');

const MyChat = props => {
  return (
    <View style={[styles.chatRowWrapper, {marginLeft: 'auto'}]}>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>
          {props.time ? `읽음 ${props.time}` : ''}
        </Text>
      </View>
      <View style={styles.myBubbleWrapper}>
        <Text style={styles.myChat}>{props.chat}</Text>
      </View>
      <Image source={rightbubble} style={{width: 8, height: 8, marginTop: 6}} />
    </View>
  );
};

const FriendChat = props => {
  return (
    <View style={styles.chatRowWrapper}>
      <Image source={dummyProfile} style={{width: 40, height: 40}} />
      <View style={{marginLeft: 8}}>
        <Text>이민구</Text>
        <View style={styles.bubbleContainer}>
          <Image
            source={leftbubble}
            style={{width: 8, height: 8, marginTop: 6}}
          />
          <View style={styles.bubbleWrapper}>
            <Text>{props.chat}</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>{props.time}</Text>
      </View>
    </View>
  );
};

export default () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>이민구</Text>
          <View style={styles.backButton} />
        </View>
        <View style={styles.chattingScreen}>
          <View style={styles.chatDayWrapper}>
            <Text
              style={styles.chatDay}>{`${year}년 ${month}월 ${day}일`}</Text>
          </View>
          <FriendChat chat={'점심 먹었니 친구야?'} time={'11:13PM'} />
          <MyChat chat={'아니 아직 안먹었어, 너는 먹었니?'} />
          <MyChat
            chat={
              '안먹었으면 같이 먹을까?? 먹고 싶은 메뉴가 있으면 말해보겠니?'
            }
            time={'12:03AM'}
          />
          <FriendChat
            chat={
              '나는 풍자 또 간집에 나온 소라 편의점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ'
            }
            time={'12:03AM'}
          />
          <MyChat chat={'그럼 먹으러 가자구~~~'} time={'12:04AM'} />
        </View>
      </View>
      <View style={{padding: 16, flexDirection: 'row'}}>
        <TouchableOpacity
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
});
