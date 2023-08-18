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
import { bgImg } from '../../../components/BgImg';
import AuthInput from '../../../components/AuthInput';
import AuthBtn from '../../../components/AuthBtn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(`email: ${email}`, `password: ${password}`);
    navigation.navigate('Home');
  };

  const handlePressShowButton = () => {
    setPasswordHidden((hidden) => !hidden);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-230}
      >
        <View style={styles.container}>
          <ImageBackground source={bgImg} style={styles.background}>
            <View style={styles.menuContainer}>
              <Text style={styles.title}>Увійти</Text>

              <View>
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

                <Pressable style={styles.passwShowWrapper}>
                  <Text style={styles.passwShowText} onPress={handlePressShowButton}>
                    {!passwordHidden ? 'Приховати' : 'Показати'}
                  </Text>
                </Pressable>

                <AuthBtn text={'Увійти'} onPress={handleSubmit} />
              </View>

              <Pressable style={styles.registrationLinkContainer}>
                <Text style={styles.registrationText}>
                  Немає акаунту?{' '}
                  <Text
                    style={styles.registrationTextUnderlined}
                    onPress={() => {
                      navigation.navigate('RegistrationScreen');
                    }}
                  >
                    Зареєструватися
                  </Text>
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
