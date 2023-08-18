import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { useEffect, useState } from 'react';
import CreatePostBtn from '../../../components/CreatePostBtn';
import PostInput from '../../../components/PostInput';
import { SimpleLineIcons, Feather, FontAwesome } from '@expo/vector-icons';

export default function CreatePostsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (name || location) {
      setIsDisabled(false);
    }
  }, [name, location]);

  const handleReset = () => {
    setName('');
    setLocation('');
  };

  const handleSubmit = () => {
    handleReset();
    navigation.navigate('Публікації');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-230}
      >
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <View style={styles.postImgCard}>
              <Pressable style={styles.postImgIcon} activeOpacity={0.5}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </Pressable>
            </View>

            <Text style={styles.postImageText}>Завантажте фото</Text>

            <View style={styles.postForm}>
              <PostInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                inputMode="text"
                value={name}
                onChangeText={(value) => {
                  if (value === '') {
                    setIsDisabled(true);
                  } else setIsDisabled(false);
                  setName(value);
                }}
              />
              <View style={styles.locationInputContainer}>
                <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
                <PostInput
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                  inputMode="search"
                  value={location}
                  onChangeText={(value) => {
                    if (value === '') {
                      setIsDisabled(true);
                    } else setIsDisabled(false);
                    setLocation(value);
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
    backgroundColor: '#FFFFFF',
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
