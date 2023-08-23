import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { SimpleLineIcons, Feather, FontAwesome } from '@expo/vector-icons';

import CreatePostBtn from '../../../components/CreatePostBtn';
import PostInput from '../../../components/PostInput';

export default function CreatePostsScreen({ navigation }) {
  const [photoName, setPhotoName] = useState('');
  const [photoLocation, setPhotoLocation] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (photoName || photoLocation) {
      setIsDisabled(false);
      console.log(photoName);
      console.log(photoLocation);
    }
    // setIsDisabled(true);
  }, [photoName, photoLocation]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  useEffect(() => {
    async () => {
      const { status } = await Camera.useCameraPermissions();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    };
  }, []);

  const handleReset = () => {
    setPhoto(null);
    setPhotoName('');
    setPhotoLocation('');
  };

  const handleSubmit = () => {
    handleReset();
    navigation.navigate('Публікації', { photo });
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      const location = await Location.getCurrentPositionAsync();
      setPhotoLocation(location);
      setPhoto(uri);
    }
  };

  if (hasPermission === null) {
    // return <View style={styles.postImgCard} />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-230}
      >
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <View style={styles.postImgCard}>
              {photo ? (
                <ImageBackground source={{ uri: photo }} style={styles.photoImg}>
                  <Pressable style={styles.postImgIcon} onPress={takePhoto}>
                    <FontAwesome name="camera" size={24} color="#FFFFFF" />
                  </Pressable>
                </ImageBackground>
              ) : (
                <Camera style={styles.camera} ref={setCameraRef}>
                  <Pressable style={styles.postImgIcon} onPress={takePhoto}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </Pressable>
                </Camera>
              )}
            </View>

            <Text style={styles.postImageText}>
              {photo ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>

            <View style={styles.postForm}>
              <PostInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                inputMode="text"
                value={photoName}
                onChangeText={(value) => {
                  if (value === '') {
                    setIsDisabled(true);
                  } else setIsDisabled(false);
                  setPhotoName(value);
                }}
              />
              <View style={styles.locationInputContainer}>
                <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
                <PostInput
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                  inputMode="text"
                  value={
                    photoLocation
                      ? `${photoLocation.coords.latitude}, ${photoLocation.coords.longitude}`
                      : ''
                  }
                  onChangeText={(value) => {
                    if (value === '') {
                      setIsDisabled(true);
                    } else setIsDisabled(false);
                    setPhotoLocation(value);
                  }}
                  style={styles.locationInput}
                />
              </View>
              <CreatePostBtn text={'Опублікувати'} onPress={handleSubmit} state={isDisabled} />
            </View>
          </View>

          <Pressable style={styles.trashButton} onPress={handleReset}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  formWrapper: {
    marginTop: 32,
  },
  postImgCard: {
    width: 343,
    height: 240,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  camera: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoImg: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImageText: {
    marginTop: 8,
    color: '#BDBDBD',
    position: 'absolute',
    left: 0,
    top: 240,
  },
  postImgIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF4D',
  },
  postForm: {
    marginTop: 59,
  },
  locationInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
  },
  locationInput: {
    flex: 1,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 4,
    textShadowColor: '#BDBDBD',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  postButton: {
    backgroundColor: '#E8E8E8',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: '400',
  },
  trashButton: {
    backgroundColor: '#F6F6F6',
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 34,
    marginTop: 120,
    borderRadius: 20,
    zIndex: -5,
  },
});
