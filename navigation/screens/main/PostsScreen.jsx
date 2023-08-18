import React from 'react';
import { View } from 'react-native';

import User from '../../../components/User';
import PostCard from '../../../components/PostCard';
import posts from '../../../assets/db/posts.json';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';

const avatar = require('../../../assets/images/avatar.jpg');
const postImg = require('../../../assets/images/Forest.jpg');

export default function PostsScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View>
          <User avatar={avatar} name="Natali Romanova" email="email@example.com" />
        </View>

        <View>
          {posts.map((element) => (
            <PostCard
              key={element.id}
              img={postImg}
              text={element.name}
              messages={0}
              location={element.location}
              hidden
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
