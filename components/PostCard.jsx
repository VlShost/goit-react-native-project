import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import React from 'react';
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const PostCard = ({ img, text, messages, likes, location, hidden }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.postImage} />
      <Text style={styles.postText}>{text}</Text>

      <View style={styles.infoWrapper}>
        <View style={styles.info}>
          <Feather name="message-circle" size={24} color="#BDBDBD" />
          <Text style={styles.infoCounter}>{messages}</Text>
          <View style={hidden ? styles.likesCounterHidden : styles.info}>
            <AntDesign name="like2" size={24} color="#BDBDBD" style={{ marginLeft: 24 }} />
            <Text style={styles.infoCounter}>{likes}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
          <Text style={styles.infoLink}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  postImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
  },
  postText: {
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: '500',
    fontSize: 16,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likesCounterHidden: {
    display: 'none',
  },
  infoCounter: {
    marginLeft: 6,
    color: '#BDBDBD',
    fontFamily: 'Roboto-400',
    fontSize: 16,
  },
  infoLink: {
    textDecorationLine: 'underline',
  },
});

export default PostCard;
