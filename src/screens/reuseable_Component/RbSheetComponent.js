import React, {useState, useImperativeHandle} from 'react';
import {View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const RbSheetComponent = React.forwardRef(props => {

  return (
    <View>
      <View>
        <RBSheet
          ref={props.refUse}
          closeOnDragDown={props.close}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
              height: 0,
            },
            container: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: props.height,
            },
          }}>
          {props.view}

        </RBSheet>
      </View>
    </View>
  );
});
export default RbSheetComponent;
