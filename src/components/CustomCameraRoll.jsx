import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, SafeAreaView, View} from 'react-native';
import Header from './Header';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default ({route, navigation}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  const imageWidth = width / 4 - 1;

  useEffect(() => {
    FetchImages();
  }, []);

  const FetchImages = async () => {
    CameraRoll.getPhotos({
      first: 100,
    }).then(res => {
      setImages(res.edges.map(e => e.node.image));
    });
  };

  const selectImage = item => {
    setSelectedImage(item);
    route.params.onSelect(item);
    navigation.goBack('ChatScreen');
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectImage(item)}
        style={{borderWidth: 0.5, borderColor: '#fff'}}>
        <Image source={item} style={{width: imageWidth, height: imageWidth}} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <Header title={'카메라'} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        numColumns={4}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};
