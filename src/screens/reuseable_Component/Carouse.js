// import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
// import React from 'react';

// import Carousel from 'react-native-reanimated-carousel';
// export default function Carouse() {
//   const {width} = Dimensions.get('window');

//   const Datalist = [
//     {image: require('../../assets/images/carouselbg.png')},
//     {image: require('../../assets/images/carouselbg.png')},
//     {image: require('../../assets/images/carouselbg.png')},
//     {image: require('../../assets/images/carouselbg.png')},
//   ];
//   const Item = props => (
//     <View style={styles.Itemview}>
//       <Image source={props.item.image} style={styles.Itemimg} />
//     </View>
//   );
//   return (
//     <View style={{height: 150, marginTop: 10}}>
//       <View>
//         <Carousel
//           width={width}
//           autoPlay={true}
//           autoPlayInterval={2000}
//           data={Datalist}
//           renderItem={Item}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Itemview: {
//     width: '100%',
//     alignItems: 'center',
//     paddingVertical: 5,
//   },
//   Itemimg: {
//     height: 120,
//     width: '80%',
//     borderRadius: 5,
//   },
// });
