import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity,TouchableHighlight , Image, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Header = () => {
    const handleOnPress = () => {
        console.log("You pressed me!");
    };
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <TouchableOpacity onPress={handleOnPress}>

                    <AntDesign name="message1" size={24} color="black" />


                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    logo: {

        width: 140,
        height: 40,
        resizeMode: "contain",
    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 5,
    }
});
export default Header;