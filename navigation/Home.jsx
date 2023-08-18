import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import PostsScreen from './screens/main/PostsScreen';
import CreatePostsScreen from './screens/main/CreatePostsScreen';
import ProfileScreen from './screens/main/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons } from '@expo/vector-icons';

const postsName = 'Публікації';
const createPostsName = 'Створити публікацію';
const profileName = 'Профіль';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={postsName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === postsName) {
              iconName = 'grid-outline';
            } else if (rn === profileName) {
              iconName = 'user';
            } else if (rn === createPostsName) {
              iconName = 'add';
            }

            return rn === profileName ? (
              <Feather name={iconName} size={size} color={color} />
            ) : (
              <Ionicons name={iconName} size={size} color={color} />
            );
          },

          headerTitleAlign: 'center',
          headerStyle: {
            height: 88,
            borderBottomWidth: 1,
          },

          tabBarActiveBackgroundColor: '#FF6C00',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#212121CC',
          tabBarShowLabel: false,

          tabBarStyle: {
            height: 83,
            paddingVertical: 10,
            paddingHorizontal: 82,
          },

          tabBarItemStyle: {
            borderRadius: 20,
            height: 40,
          },
        })}
      >
        <Tab.Screen
          name={postsName}
          component={PostsScreen}
          options={{
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Feather name="log-out" size={24} color="#BDBDBD" style={styles.logoutBtn} />
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name={createPostsName}
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: 'none' },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate('Публікації')}>
                <Feather name="arrow-left" size={24} color="#212121CC" style={styles.arrowBack} />
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutBtn: {
    paddingRight: 16,
  },
  arrowBack: {
    paddingLeft: 16,
  },
});
