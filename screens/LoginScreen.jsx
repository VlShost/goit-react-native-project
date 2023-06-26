import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { bgImg } from '../components/BgImg';

export default function LoginScreen() {
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

              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                inputMode="email"
              />
              <TextInput style={styles.input} placeholder="Пароль" />

              <Pressable style={styles.passwShowWrapper}>
                <Text style={styles.passwShowText}>Показати</Text>
              </Pressable>

              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Увійти</Text>
              </Pressable>

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
  input: {
    backgroundColor: '#F6F6F6',
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
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
    marginRight: 16,
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  passwShowWrapper: {
    top: -34,
    left: 130,
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
