import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.header}>Публікації</Text>
        <Pressable>
          <Feather name="log-out" size={24} color="#BDBDBD" style={styles.logoutBtn} />
        </Pressable>
      </View> */}

      <View style={styles.posts}>
        <View style={styles.userWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
          </View>
          <View>
            <Text>Natali Romanova</Text>
            <Text>email@example.com</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.footer}>
        <Pressable>
          <Ionicons name="grid-outline" size={24} color="#212121CC" style={styles.menuBtn} />
        </Pressable>

        <Pressable>
          <Image style={styles.addPostBtn} source={require('../assets/images/new.png')} />
          <Ionicons name="add-outline" size={13} color="#FFFFFF" style={styles.addPostBtn} />
        </Pressable>

        <Pressable>
          <Feather name="user" size={24} color="#212121CC" style={styles.profileBtn} />
        </Pressable>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    height: 88,
    // backgroundColor: 'skyblue',
  },
  userWrapper: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  posts: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 83,
  },
  addPostBtn: {
    marginLeft: 39,
    marginRight: 39,
    alignSelf: 'center',
    width: 70,
    height: 40,
    // backgroundColor: '#FF6C00',
  },
});
