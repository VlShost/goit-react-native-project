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
import { AntDesign } from '@expo/vector-icons';
import { bgImg } from '../components/BgImg';
import Input from '../components/Input';

export default function RegistrationScreen() {
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
                <Input placeholder="Логін" inputMode="text" />
                <Input placeholder="Адреса електронної пошти" inputMode="email" />
                <Input placeholder="Пароль" secureTextEntry={true} />

                <Pressable style={styles.passwShow}>
                  <Text style={styles.passwShowText}>Показати</Text>
                </Pressable>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
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
    marginRight: 16,
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  passwShow: {
    top: -34,
    left: 130,
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
