import {View, Image, StyleSheet} from 'react-native';

import React, {useState} from 'react';

const Fruit = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/FruitGame.png')}
        style={{width: '100%', height: 570}}
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

export default Fruit;
