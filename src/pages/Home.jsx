import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {friendProfiles} from '../data';
import fonts from '../styles/fonts.js';

const searchIcon = require('../assets/icons/search.png');
const addIcon = require('../assets/icons/add.png');
const alertIcon = require('../assets/icons/alram.png');
const settingIcon = require('../assets/icons/setting.png');
const myProfile = require('../assets/images/myProfile.jpeg');
const rightArrow = require('../assets/icons/rightArrow.png');

export default ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {params: item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
        <Image source={item.uri} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>
            {item.introduction}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const headerComponents = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 16,
          gap: 4,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '400', color: '#828282'}}>친구</Text>
        <Text style={{fontSize: 14, color: '#4f4f4f'}}>
          {friendProfiles.length}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: 8,
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <TouchableOpacity>
            <Image source={searchIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={addIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={alertIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <View style={{gap: 2}}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
                fontFamily: fonts.MAPLE[800],
              }}>
              이쿠키
            </Text>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#828282'}}>
              D-day 37
            </Text>
          </View>
          <Image
            source={myProfile}
            style={{width: 56, height: 56, borderRadius: 50}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#f2f2f2',
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingHorizontal: 16,
            gap: 4,
          }}>
          <View style={{maxWidth: 321, gap: 4, paddingVertical: 16}}>
            <Text style={{fontSize: 16, color: '#000'}}>추천 친구</Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: '#828282'}}
              numberOfLines={1}>
              유화, 민정, 지현, 소현, 규희, 태호, 동연, 영광, 희재, 성현, 민제,
              현준, 시은, 영준, 성호, 하늘, 보민, 지현, 수빈
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={rightArrow} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginHorizontal: 16}}>
          <FlatList
            data={friendProfiles}
            renderItem={renderItem}
            keyExtractor={(_, index) => index}
            ListHeaderComponent={headerComponents}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
