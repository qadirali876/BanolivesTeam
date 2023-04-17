import {View, Image, StyleSheet} from 'react-native';

import React, {useState} from 'react';

const TeenPatti = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/3game.png')}
        style={{width: '100%', height: 400}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#242A38',
  },
});

export default TeenPatti;
