import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import User from '../../../components/User';
import PostCard from '../../../components/PostCard';
import posts from '../../../assets/db/posts.json';

const avatar = require('../../../assets/images/avatar.jpg');
const postImg = require('../../../assets/images/Forest.jpg');

export default function PostsScreen({ route }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View>
          <User avatar={avatar} name="Natali Romanova" email="email@example.com" />
        </View>

        <View>
          {posts.map((el) => (
            <PostCard
              key={el.id}
              img={postImg}
              text={el.name}
              messages={6}
              location={el.location}
              hidden
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
