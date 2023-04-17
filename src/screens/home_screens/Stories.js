import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const stories = [

];

export default function Stories() {
  return (
    <View style={{}}>
      <Text>
        Helloooo
      </Text>
      {/* <Story
        unPressedBorderColor="#e95950"
        pressedBorderColor="#ebebeb"
        stories={stories}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footerInput: {
    width: '90%',
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    paddingLeft: 20,
  },
});
