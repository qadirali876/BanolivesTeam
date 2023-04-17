import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import database from '@react-native-firebase/database';
import { useSelector } from 'react-redux';


const buttonData = [
    'Feedback',
    'My Feedback',
    'Top-Up',
    'App Error',
    'Suggestion',
    'Earning',
    'Other-Info',
];

const Help = () => {
    const userData = useSelector(state => state.auth.userData);
    const [isEmailChecked, setIsEmailChecked] = useState(true);
    const [isPhoneChecked, setIsPhoneChecked] = useState(false);
    const [email, setEmail] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null);

    const [issueMsg, setIssueMsg] = useState(null)

    const handleAddData = async () => {
        try {
            console.log("userData", userData)
            const newNodeKey =  database().ref().child(`helpCenter`).push().key;
            const resp = await database().ref(`helpCenter/${userData?.user?.id}/${newNodeKey}`).set({
                email: email,
                issueMessage: issueMsg,
                selectItem: selectedItem,
                id: userData?.user?.id,
            })

            console.log('Its responce value from firebase ', resp)
        } catch (error) {
            console.log(error)
        }
    }

    const [numColumns, setNumColumns] = useState("");

    const handlePhoneOnChange = () => {
        setIsPhoneChecked(true);
        setIsEmailChecked(false);
    };

    const handleEmailOnChange = () => {
        setIsPhoneChecked(false);
        setIsEmailChecked(true);
    };

    const [issueText, setIssueText] = useState('');

    const handleTextChange = (newText) => {
        setIssueText(newText);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{
            width: "39%",
            borderWidth: 3,
            borderColor: "#3a455e",
            padding: 7,
            fontWeight: "400",
            borderRadius: 40,
            margin: 5,
            marginLeft: 20,
        }}
            onPress={setSelectedItem(item)}>
            <Text style={styles.buttontext}>
                {item}
            </Text>
        </TouchableOpacity>
    );

    const [selectedDocs, setSelectedDocs] = useState('');

    const handleSelectDocs = async () => {
        try {
            const docs = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
            });
            setSelectedDocs(result.uri);
        } catch (err) {
            console.log(err);
        }
        console.log("This is Image", selectedDocs)
    };

    const navigation = useNavigation();

    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#242A38" }}>
            <View style={{ flex: 1, backgroundColor: "#242A38", marginBottom: 10 }}>

                <LinearGradient colors={['#4568DC', '#B06AB3']} style={styles.topview}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} style={{ color: 'white' }}></Ionicons>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 23 }}>Help & Support</Text>
                </LinearGradient>

                <View style={styles.container}>
                    <FlatList
                        data={buttonData}
                        renderItem={renderItem}
                        // keyExtractor={(item) => item.id}
                        keyExtractor={(item) => item.id + numColumns}
                        numColumns={2}
                    />
                </View>

                <Text style={{ color: "white", fontSize: 15, marginTop: "5%", marginLeft: "3%" }}>Choose Your Contact Information</Text>

                <View style={{ marginTop: "2%" }}>

                    <View style={{ flexDirection: 'row', marginLeft: "5%", marginBottom: "5%", alignItems: "center" }}>
                        <CheckBox value={isEmailChecked} onValueChange={handleEmailOnChange} style={{ color: "white", borderRadius: 10, marginRight: "4%" }} />
                        <TouchableOpacity onPress={() => handleEmailOnChange(!isEmailChecked)}><Text style={{ color: 'white', fontSize: 16, margin: "5%" }}>Email</Text></TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: "5%", marginBottom: "5%", alignItems: "center" }}>
                        <CheckBox value={isPhoneChecked} onValueChange={handlePhoneOnChange} style={{ color: "white", borderRadius: 10, marginRight: "5%" }} />
                        <TouchableOpacity onPress={() => handlePhoneOnChange(!isPhoneChecked)}><Text style={{ color: 'white', fontSize: 16 }}>Phone</Text></TouchableOpacity>
                    </View>

                </View>

                <TextInput
                    placeholder={isPhoneChecked ? 'Enter your Phone number' : 'Enter your Email Address'}
                    placeholderTextColor="#6b748a"
                    style={{ backgroundColor: "#303749", margin: "3%", borderRadius: 7, padding: 10, fontSize: 17, borderWidth: 3, borderColor: "#6b748a", color: "white" }}
                    onChangeText={(value) => setEmail(value)}
                />

                {/* <TextInput placeholder='Enter your Email' placeholderTextColor="#6b748a" style={{ backgroundColor: "#303749", margin: "3%", borderRadius: 7, padding: 10, fontSize: 17, borderWidth: 3, borderColor: "#6b748a", color: "white" }}></TextInput> */}

                <ScrollView style={{ flex: 1, }}>
                    <TextInput
                        placeholder='Explain Your Issue In Details?'
                        placeholderTextColor="#6b748a"
                        style={{
                            backgroundColor: "#303749",
                            margin: "3%",
                            borderRadius: 7,
                            padding: 10,
                            fontSize: 17,
                            borderWidth: 3,
                            borderColor: "#6b748a",
                            color: "white",
                        }}
                        // multiline={true}
                        // numberOfLines={4}
                        // textAlignVertical="top"
                        // value={issueText}
                        // onChangeText={handleTextChange}

                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={issueMsg}
                        onChangeText={(value) => setIssueMsg(value)}
                    />
                </ScrollView>

                <Text style={{ color: "white", fontSize: 15, marginTop: "3%", marginLeft: "3%" }}>Uplaod Picture/Video</Text>

                <TouchableOpacity onPress={handleSelectDocs}>
                    <View style={{
                        justifyContent: "center", alignItems: "center", marginTop: "5%", backgroundColor: "#303749", padding: "20%", margin: "3%", borderWidth: 3,
                        borderColor: "#6b748a", borderRadius: 5
                    }}>
                        <Ionicons
                            name="camera"
                            size={25}
                            color="white"
                            style={{}}
                        />
                        <Text style={{ color: "white" }}>Upload Photo</Text>
                    </View>
                </TouchableOpacity>


                
                    <TouchableOpacity
                        onPress={() => handleAddData()}
                        
                        fontSize={18}
                        color="white"
                        textAlign="center"
                        fontWeight="300"
                        style={{marginBottom: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', padding: 12, marginHorizontal: 5}}
                    >
                        <Text style={{fontWeight: 'bold', color: 'white'}}>
                            Submit now
                        </Text>
                    </TouchableOpacity>
               

            </View>

        </ScrollView>

    )
}
export default Help

const styles = StyleSheet.create({
    topview: {
        flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: '#303749',
        paddingBottom: 10,
    },
    // button1: {
    //     width: "39%",
    //     borderWidth: 3,
    //     borderColor: "#3a455e",
    //     padding: 7,
    //     fontWeight: "400",
    //     borderRadius: 40,
    //     margin: 5,
    //     marginLeft: 20,

    //     backgroundColor: show ? '#E92F24' : '#333F67',
    // },
    container: {
        marginTop: 10,
        padding: 2
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    }
})