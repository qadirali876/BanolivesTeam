import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SeatsLogic = ({cohostData, handleLongPress, handlePress }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        console.log("in seats logic", cohostData)
    }, [cohostData])

    // const [numbers, setNumbers] = useState([
    //     {id: 1, value: null, isLocked: false, isMicOn: true},
    //     {id: 2, value: null, isLocked: false},
    //     {id: 3, value: null, isLocked: false}, 
    //     {id: 4, value: null, isLocked: false}, 
    //     {id: 5, value: null, isLocked: false}, 
    //     {id: 6, value: null, isLocked: false}, 
    //     {id: 7, value: null, isLocked: false}, 
    //     {id: 8, value: null, isLocked: false},  
    //     {id: 9, value: null, isLocked: false, isMicOn: true}, 
    //     {id: 10, value: null, isLocked: false},
    // ]);

    // const [selectedItems, setSelectedItems] = useState([]);

    // const handlePress = (index) => {
    //     setSelectedItems((prev) => {
    //         if (prev.includes(index)) {
    //             return prev.filter((item) => item !== index);
    //         } else {
    //             console.log("check ...prev", ...prev)
    //             return [...prev, index];
    //         }
    //     });
    // };

    // const handleLongPress = (value) => {
    //     setNumbers(numbers.map((item, index) => {
    //         if (value === index) {
    //           return {...item, isLocked: item?.isLocked ? false : true};
    //         }
    //         return item;
    //       }));

    //     //   console.log("item", numbers)
    // };


    // const bookSeat = () => {
    //     let counter = 0
    //     setNumbers(numbers.map(item => {
    //           if ((item?.value === null && !item?.isLocked) && counter !== 1) {
    //             counter = counter + 1
    //             return {...item, value: 'book'};
    //           }
    //           return item;
    //         }));
          
    // };
    
    // const deleteFromArrary = () => {
    //     console.log("testing", numbers)
    //     setNumbers(numbers.map(item => {
    //           if (item?.id === 4) {
    //             return {...item, value: null};
    //           }
    //           return item;
    //         }));
          
    // };

    const renderItem = ({ item, index }) => {
        const isSelected = selectedItems.includes(index);
        
        if (!item?.value || item?.isLocked) {
            return (
                <TouchableOpacity onLongPress={() => handleLongPress(index)}>
                <View style={styles.itemContainer}>
                    <View style={styles.iconContainer}
                    >
                        
                        {item?.isLocked ? 
                            <Icon name="lock-outline" size={30} color="#FFF" style={styles.lockIcon} />
                            :
                            <Icon name="seat" size={25} color="#FFF" />
                        }
                    </View>
                </View>
                </TouchableOpacity>
            );
        }
        else {
            return (
                <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => handlePress(index)}>
                <View style={[styles.iconContainer, isSelected && styles.selectedIconContainer,isSelected && { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 2 }]}>

                        <View style={[styles.imageContainer, isSelected && styles.selectedImageContainer, { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: isSelected ? 0.5 : 0, shadowRadius: 2 }]}>
                            <Image source={{uri: item?.image}} style={{height: 60, width: 60}}/>
                        </View>
                        {isSelected && (
                            <Icon name="microphone-off" size={30} color="black" style={[styles.checkIcon, { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2 }]} />
                        )}
                      
                      
                    </View>
                    {item?.name && <Text>{item?.name}</Text>}
                </TouchableOpacity>
            </View>
        
            );
        }
    };



    return (
        <View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>

                <FlatList
                    data={[...cohostData]?.splice(0, 2)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    />
                <FlatList
                    data={[...cohostData]?.splice(2, 9)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c7b3'
    },
    checkIcon: {
        position: 'absolute',
    },
    selectedIconContainer: {
        // backgroundColor: 'red',
    },
    lockIcon: {
        position: 'absolute',

    },
    imageContainer: {
        borderRadius: 35,
        overflow: 'hidden',
    },
    selectedImageContainer: {
        borderWidth: 2,
        borderColor: '#007aff',
    },
    image: {
        width: 60,
        height: 60,
    },
});

export default SeatsLogic
