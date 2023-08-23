import { View, Text, Image, StyleSheet } from 'react-native';

const CommentComponent = ({ author, text, date, userAvatar }) => {
  return (
    <View style={[styles.container, author === 'owner' && { flexDirection: 'row-reverse' }]}>
      <Image source={userAvatar} style={styles.userAvatar} />
      <View
        style={[
          styles.comment,
          author === 'owner' && { borderTopRightRadius: 0, borderTopLeftRadius: 6 },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.date, author === 'owner' && { marginRight: 'auto', marginLeft: 0 }]}>
          {date}
        </Text>
      </View>
    </View>
  );
};

export default CommentComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: 'row',
    gap: 16,
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
  },
  comment: {
    maxWidth: 310,
    padding: 16,
    backgroundColor: '#00000008',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,  
  },
  text: {
    marginBottom: 8,
    fontSize: 13,
    lineHeight: 16,
    color: '#212121',
  },
  date: {
    marginLeft: 'auto',
    fontSize: 10,
    color: '#BDBDBD',
  },
});
