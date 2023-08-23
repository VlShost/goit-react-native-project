import { StyleSheet, View, ImageBackground, Pressable, Text, ScrollView } from 'react-native';

import posts from '../../../assets/db/posts.json';
import { AntDesign, Feather } from '@expo/vector-icons';
import { bgImg } from '../../../components/BgImg';

import PostCard from '../../../components/PostCard';

const postImg = require('../../../assets/images/Forest.jpg');

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} style={styles.background}>
        <View style={styles.menuContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
            <Pressable>
              <AntDesign name="pluscircleo" size={24} color="#FF6C00" style={styles.addAvatarBtn} />
            </Pressable>
          </View>

          <View style={styles.logoutBtn}>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </Pressable>
          </View>

          <View>
            <Text style={styles.title}>Natali Romanova</Text>
          </View>

          <ScrollView style={styles.postsWrapper} showsVerticalScrollIndicator={false}>
            <View>
              {posts.map((el) => (
                <PostCard
                  key={el.id}
                  img={postImg}
                  text={el.name}
                  messages={0}
                  likes={0}
                  location={el.location}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
  logoutBtn: {
    width: 24,
    height: 24,
    position: 'relative',
    top: 22,
    left: 162,
  },
  title: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  postsWrapper: {
    width: '100%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
