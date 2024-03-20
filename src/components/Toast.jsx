import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';

export default ({content, visible, duration, handleCancel}) => {
  const toastValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) toastAnimation();
  }, [toastAnimation, visible]);

  const toastAnimation = useCallback(() => {
    toastValue.setValue(0);
    Animated.spring(toastValue, {
      toValue: 1,
      delay: 100,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        handleCancel();
        Animated.timing(toastValue, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          delay: duration || 1000,
        }).start();
      }
    });
  }, [duration]);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: toastValue,
          transform: [
            {
              translateY: toastValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-40, 45],
              }),
            },
            {
              scale: toastValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
          ],
        },
      ]}>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            height: 39,
            backgroundColor: '#333',
            borderRadius: 100,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontWeight: '500', color: '#fff'}}>{content}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'relative',
    bottom: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
