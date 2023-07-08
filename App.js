import LoginScreen from './screens/LoginScreen';
import PostsScreen from './screens/PostsScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <RegistrationScreen />
    <LoginScreen />
    // <PostsScreen />
  );
}
