import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import CommentItem from '../../../components/CommentItem';
import commentatorPhoto from '../../../assets/images/avatar.jpg';
import userPhoto from '../../../assets/images/avatar.jpg';

import comments from '../../../assets/db/comments.json';

export default function CommentsScreen({ route }) {
  const [commentText, setCommentText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.postPhotoContainer}>
        <Image
          source={route.params.img}
          style={{
            width: '100%',
            height: 240,
            borderRadius: 8,
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {comments.map(({ author, text, date }) => {
          return (
            <CommentItem
              key={text}
              author={author}
              text={text}
              date={date}
              userAvatar={author === 'owner' ? userPhoto : commentatorPhoto}
            />
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.inputCommentWrapper}>
          <TextInput
            style={styles.commentInput}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            autoComplete="off"
            value={commentText}
            onChangeText={setCommentText}
          />
          <Pressable style={styles.commentBtn}>
            <Feather name="arrow-up" size={24} color="#FFFFFF" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  postPhotoContainer: {
    marginTop: 32,
    marginBottom: 32,
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  commentInput: {
    position: 'relative',
    width: '100%',
    height: 50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
  },
  commentBtn: {
    position: 'absolute',
    right: 8,
    top: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
});
