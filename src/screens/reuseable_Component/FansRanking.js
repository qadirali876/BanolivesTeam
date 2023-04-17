import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, Text, Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BackIcon from 'react-native-vector-icons/AntDesign';
import CrossIcon from 'react-native-vector-icons/Entypo';
import { ApiCallToken } from "../../Services/Apis";

const FansRanking = ({liveID, userData, onPressCross}) => {
    const [selectButton, setselectButton] = useState(0);
    const [bg, setbg] = useState('grey');
    const [hostGiftArray, sethostGiftArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        HostGiftReceive();
        GetTotalBeanSum();
    }, [])

    const HostGiftReceive = async () => {
        setIsLoading(true)
        const paramsBody = {
          id: liveID,
        };
        try {
          // console.log('HOST ID==>', liveID);
          const res = await ApiCallToken({
            params: userData.token,
            paramsBody: paramsBody,
            route: 'user/list-send-gift',
            verb: 'POST',
          });
          sethostGiftArray(res.data);
          setIsLoading(false)
        } catch (error) {
          console.log('ERROR IS ====>>>', error);
        }
      };

      const SelectCategory = param => {
        switch (param) {
          case 0:
            return ButtonOne();
          case 1:
            return ButtonTwo();
          case 2:
            return ButtonThree();
          default: {
            break;
          }
        }
      };

    const Buttons = [
        {id: 1, BtnTxt: 'Daily'},
        {id: 2, BtnTxt: 'Weekly'},
        {id: 3, BtnTxt: 'Monthly'},
      ];

    const GetTotalBeanSum = () => {
        let temp = [];
        hostGiftArray.filter(item => {
          temp.push(item.beans);
          // console.warn('host id', liveID);
        });
        return temp == null ? '0' : temp.reduce((a, b) => a + b, 0);
      };

      const RankStyle = props => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', paddingHorizontal: 2}}>
              {props.index + 1}
            </Text>
            {props.item.image ? (
              <Image
                source={{uri: props.item.image}}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
            ) : (
              <Image
                source={require('../../assets/images/img3.png')}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
            )}
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white'}}>{props.item.name}</Text>
              {/* <Text
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  width: widthPercentageToDP(9),
                  textAlign: 'center',
                  borderRadius: 15,
                  textAlignVertical: 'center',
                  height: heightPercentageToDP(2),
                  fontSize: 10,
                }}>
                {props.item.Lv}
              </Text> */}
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'red'}}>{props.item.beans}</Text>
          </View>
        </View>
      );

      const ButtonOne = () => (
        <View style={{height: heightPercentageToDP(73)}}>
          <FlatList data={hostGiftArray} renderItem={RankStyle} />
        </View>
      );
      const ButtonTwo = () => (
        <View style={{height: heightPercentageToDP(73)}}>
          <FlatList data={hostGiftArray} renderItem={RankStyle} />
        </View>
      );
    
      const ButtonThree = () => (
        <View style={{height: heightPercentageToDP(73)}}>
          <FlatList data={hostGiftArray} renderItem={RankStyle} />
        </View>
      );


    return(
        <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 15,
          height: heightPercentageToDP(90),
        }}>
        {isLoading ? 
        <View style={{height: heightPercentageToDP(90), alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
        </View>
        :
        <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <BackIcon name="left" size={22} color={'white'} />
            <Text style={{color: 'white', fontSize: 22, paddingHorizontal: 5}}>
              Fans Ranking
            </Text>
          </View>
          <TouchableOpacity onPress={onPressCross}>
            <CrossIcon
              name="cross"
              size={22}
              color={'white'}
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          {Buttons.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setselectButton(index);
                setbg('white');
              }}>
              <Text
                style={[
                  {color: 'grey'},
                  selectButton == index && {
                    color: 'red',
                    borderBottomWidth: 1,
                    borderColor: 'red',
                  },
                ]}>
                {item.BtnTxt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              paddingVertical: 10,
              fontSize: 17,
              fontWeight: '500',
            }}>
            Total {GetTotalBeanSum()}
          </Text>
        </View>
        <View>{SelectCategory(selectButton)}</View>
        </>
    }
      </View>
    )
}

export default FansRanking;