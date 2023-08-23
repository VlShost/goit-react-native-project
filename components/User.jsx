import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const User = ({ avatar, name, email }) => {
  return (
    <View style={styles.userWrapper}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} source={avatar} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userWrapper: {
    marginTop: 32,
    marginBottom: 32,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontWeight: '700',
  },
});

export default User;
