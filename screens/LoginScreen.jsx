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
import { bgImg } from '../components/BgImg';
import Input from '../components/Input';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleSubmit = () => {
    console.log(`email: ${email}`, `password: ${password}`);
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
              <Text style={styles.title}>Увійти</Text>

              <View>
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

                <Pressable style={styles.passwShowWrapper}>
                  <Text style={styles.passwShowText} onPress={handlePressShowButton}>
                    {!passwordHidden ? 'Приховати' : 'Показати'}
                  </Text>
                </Pressable>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText} onPress={handleSubmit}>
                    Увійти
                  </Text>
                </Pressable>
              </View>

              <Pressable style={styles.registrationLinkContainer}>
                <Text style={styles.registrationText}>
                  Немає акаунту?{' '}
                  <Text style={styles.registrationTextUnderlined}>Зареєструватися</Text>
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
    color: '#FFFFFF',
    backgroundColor: '#FF6C00',
    display: 'flex',
    justifyContent: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: '100%',
    height: 489,
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  title: {
    marginTop: 32,
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
  passwShowWrapper: {
    top: -34,
    left: 255,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-400',
  },
  registrationLinkContainer: {
    marginTop: 16,
  },
  registrationText: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
  registrationTextUnderlined: {
    textDecorationLine: 'underline',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
