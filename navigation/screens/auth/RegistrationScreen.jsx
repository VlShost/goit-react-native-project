import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { bgImg } from '../../../components/BgImg';
import AuthInput from '../../../components/AuthInput';
import AuthBtn from '../../../components/AuthBtn';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(`login: ${login}`, `email: ${email}`, `password: ${password}`);
    navigation.navigate('Home');
  };

  const handlePressShowButton = () => {
    setPasswordHidden((hidden) => !hidden);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyles}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-180}
      >
        <View style={styles.container}>
          <ImageBackground source={bgImg} style={styles.background}>
            <View style={styles.menuContainer}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar} />
                <Pressable>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#FF6C00"
                    style={styles.addAvatarBtn}
                  />
                </Pressable>
              </View>

              <Text style={styles.title}>Реєстрація</Text>

              <View>
                <AuthInput
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  inputMode="text"
                  value={login}
                  onChangeText={setLogin}
                />
                <AuthInput
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  inputMode="email"
                  value={email}
                  onChangeText={setEmail}
                />
                <AuthInput
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  inputMode="text"
                  value={password}
                  secureTextEntry={passwordHidden}
                  onChangeText={setPassword}
                />

                <Pressable style={styles.passwShow}>
                  <Text style={styles.passwShowText} onPress={handlePressShowButton}>
                    {!passwordHidden ? 'Приховати' : 'Показати'}
                  </Text>
                </Pressable>

                <AuthBtn text={'Зареєструватися'} onPress={handleSubmit} />
              </View>

              <Pressable style={styles.loginLinkContainer}>
                <Text style={styles.loginText} onPress={() => navigation.navigate('LoginScreen')}>
                  Вже є акаунт? Увійти
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: '100%',
    height: 549,
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    top: -60,
    width: 120,
    height: 120,
  },
  avatar: {},
  addAvatarBtn: {
    position: 'absolute',
    bottom: -105,
    right: -12.5,
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  title: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  passwShowText: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  passwShow: {
    top: -34,
    left: 255,
  },
  loginLinkContainer: {
    marginTop: 16,
  },
  loginText: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
