import React from 'react';
import {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({
  isVisible,
  okText,
  noText,
  headerTitle,
  onPressOk,
  onPressNo,
}) => {
  return (
    <Modal
      useNativeDriver
      animationIn="zoomIn"
      animationOut="fadeOut"
      animationInTiming={200}
      animationOutTiming={200}
      isVisible={isVisible}
      backdropOpacity={0.6}
      style={{
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 320,
          backgroundColor: '#fff',
          borderRadius: 8,
          paddingTop: 10,
        }}>
        <View
          style={{
            minHeight: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{headerTitle}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: '#c3c3c3',
            borderTopWidth: 0.5,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}
            onPress={onPressNo}>
            <Text>{noText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}
            onPress={onPressOk}>
            <Text>{okText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
