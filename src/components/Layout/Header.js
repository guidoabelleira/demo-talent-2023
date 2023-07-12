import { View, StyleSheet, Image, TouchableOpacity, Platform  } from 'react-native'
import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation();

    const onPressMenu = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'HomeScreen' },
              ],
            })
          );
    }
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <View style={styles.statusBar} />}
            <View style={styles.containerTopBar}>
                <View>
                    <Image source={require("../../utils/iconsimbol.png")} />
                </View>
                <View style={styles.topBarItemRounded}> 
                    <TouchableOpacity onPress={() => onPressMenu()}>
                        <Ionicons name="ios-menu" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    statusBar: {
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    containerTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    topBarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    topBarItemRounded: {
        width: 36,
        height: 36,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FADE4F",
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
})

export default Header