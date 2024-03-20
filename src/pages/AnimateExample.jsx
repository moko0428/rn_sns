import {useNavigation} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import {Animated, Button, Text, View} from 'react-native';

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    moveToRight();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const moveToRight = () => {
    Animated.timing(moveAnim, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const moveToDetail = () => {
    navigation.navigate('Detail', {
      test: '안녕하세요.',
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
        Fading in
      </Text>

      <View>
        <Button title="Move Detail" onPress={moveToDetail} />
      </View>
    </View>
  );
};
