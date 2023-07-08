import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

const ModalShare = ({isOpen, onClose}) => {

  return (

      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
            onClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Shared</Text>
            <View style={styles.sharedBar}>
                <EvilIcons name="search" size={18} color="#D3D3D3" />
                <Text style={{fontSize: 18, color: "#D3D3D3", marginHorizontal: 4}}>Buscar</Text>
            </View>
            <View style={styles.containerLinks}>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Oscar</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Adrian</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Martin</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Rafa</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Juan</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Jon</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Ramiro</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linksItemRounded}>
                        <FontAwesome name="user" size={24} color="white" />
                    </View>
                    <Text>Franco</Text>
                </View>
            </View>
            <View style={styles.containerButtons}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => onClose()}>
                <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => onClose()}>
                <Text style={styles.textStyle}>Aceptar</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: "90%",
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    sharedBar: {
        width: 280,
        height: 40,
        backgroundColor: "#F3F1F1",
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14
    },
    containerLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        flexWrap: "wrap"
    },
    links: {
        alignItems: 'center',
        margin: 8
    },
    linksItemRounded: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        padding: 4,
        height: 50,
        width: 50
    },
    containerButtons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 18,
      elevation: 2,
      marginHorizontal: 16
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#89B7FC',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 14
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: "black",
      fontWeight: "bold",
      fontSize: 18
    },
  });

export default ModalShare