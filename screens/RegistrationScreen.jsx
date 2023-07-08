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
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { bgImg } from '../components/BgImg';
import Input from '../components/Input';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleSubmit = () => {
    console.log(`login: ${login}`, `email: ${email}`, `password: ${password}`);
  };

  const handlePressShowButton = () => {
    setPasswordHidden((hidden) => !hidden);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyles}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
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
                <Input placeholder="Логін" inputMode="text" value={login} onChangeText={setLogin} />
                <Input
                  placeholder="Адреса електронної пошти"
                  inputMode="email"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  placeholder="Пароль"
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

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText} onPress={handleSubmit}>
                    Зареєстуватися
                  </Text>
                </Pressable>
              </View>

              <Pressable style={styles.loginLinkContainer}>
                <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
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
    color: '#FFFFFF',
    backgroundColor: '#FF6C00',
    display: 'flex',
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
  button: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
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
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-400',
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
