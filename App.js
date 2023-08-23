import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Home from './navigation/Home';
import LoginScreen from './navigation/screens/auth/LoginScreen';
import RegistrationScreen from './navigation/screens/auth/RegistrationScreen';
import MapScreen from './navigation/screens/main/MapScreen';
import CommentsScreen from './navigation/screens/main/CommentsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTitle: 'Розташування',
            headerTitleAlign: 'center',
            headerStyle: {
              height: 88,
              borderBottomWidth: 1,
            },
          }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerTitle: 'Коментарі',
            headerTitleAlign: 'center',
            headerStyle: {
              height: 88,
              borderBottomWidth: 1,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
