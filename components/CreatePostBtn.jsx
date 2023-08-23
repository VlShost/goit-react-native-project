import { Text, Pressable, StyleSheet } from 'react-native';

export default function AuthBtn({ text, onPress, state }) {
  return (
    <Pressable style={state ? styles.buttonInactive : styles.buttonActive}>
      <Text
        style={state ? styles.buttonInactiveText : styles.buttonActiveText}
        onPress={onPress}
        disabled={state}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  buttonInactive: {
    backgroundColor: '#F6F6F6',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  buttonActiveText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-400',
  },
  buttonInactiveText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-400',
  },
});
