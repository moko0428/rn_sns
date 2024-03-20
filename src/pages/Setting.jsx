import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';

const myProfile = require('../assets/images/myProfile.jpeg');
const rightArrow = require('../assets/icons/rightArrow.png');
const alertIcon = require('../assets/icons/alram.png');
const friendIcon = require('../assets/icons/friend.png');
const announcementIcon = require('../assets/icons/announcement.png');
const protectIcon = require('../assets/icons/protect.png');
const moreIcon = require('../assets/icons/more.png');

const menuData = [
  {
    id: 1,
    title: '알림 받기',
    page: '',
    icon: alertIcon,
  },
  {
    id: 2,
    title: '친구',
    page: 'Home',
    icon: friendIcon,
  },
  {
    id: 3,
    title: '공지사항',
    page: '',
    icon: announcementIcon,
  },
  {
    id: 4,
    title: '채팅/보안',
    page: '',
    icon: protectIcon,
  },
  {
    id: 5,
    title: '더보기',
    page: '',
    icon: moreIcon,
  },
];

export default ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title={'설정'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          paddingVertical: 16,
          borderBottomWidth: 0.5,
          borderBottomColor: '#eaeaea',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <Image
            source={myProfile}
            style={{width: 56, height: 56, borderRadius: 100}}
          />
          <Text style={{fontWeight: 'bold', color: '#333', fontSize: 18}}>
            이쿠키
          </Text>
        </View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.editText}>프로필 수정</Text>
          <Image source={rightArrow} style={{width: 16, height: 16}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          paddingVertical: 16,
        }}>
        <View style={{gap: 12}}>
          <View style={{gap: 2}}>
            <Text style={styles.accountBigText}>계정ID</Text>
            <Text style={styles.accountSmallText}>ljun925@naver.com</Text>
          </View>
          <View style={{gap: 2}}>
            <Text style={styles.accountBigText}>계정 연락처</Text>
            <Text style={styles.accountSmallText}>010-1234-5678</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={styles.editText}>계정 설정</Text>
            <Image source={rightArrow} style={{width: 18, height: 18}} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {menuData.map((e, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(e.page)}
            style={styles.menuWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <Image source={e.icon} style={{width: 20, height: 20}} />
              <Text>{e.title}</Text>
            </View>
            <View>
              {e.id === 1 ? (
                <Switch
                  trackColor={{false: '#767577', true: '#5fbcff'}}
                  thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                  ios_backgroundColor={'#3e3e3e'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              ) : (
                <TouchableOpacity>
                  <Image source={rightArrow} style={{width: 20, height: 20}} />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#eaeaea',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eaeaea',
  },
  accountBigText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#828282',
  },
  accountSmallText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  editText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4f4f4f',
  },
});
