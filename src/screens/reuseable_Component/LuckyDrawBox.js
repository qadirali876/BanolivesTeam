import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import React from 'react';

const LuckyDrawBox = () => {
  return (
    <View>
      <TouchableOpacity>
        <ImageBackground
          source={require('../../assets/images/LuckyDraw/circle.png')}
          style={{
            height: 95,
            width: 95,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain">
          <Image
            source={require('../../assets/images/LuckyDraw/coinbox.png')}
            style={{height: 60, width: 60}}
            resizeMode="contain"
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default LuckyDrawBox;
