import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { CommonActions, useNavigation } from '@react-navigation/native';
const cardBackground = require("../utils/dust.png")
import Header from "./Layout/Header";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import ModalShare from './ModalShare';


const DetailArtist = ({ route }) => {
  const { params } = route;
  const [isOpenShareModal, setIsOpenShareModal] = useState(false)

  const navigation = useNavigation();

    const onPressChat = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Contact', params: { userId: params.idArtista, username: params.name, image: params.image } },
              ],
            })
          );
    }

  return (
    <LinearGradient 
      style={styles.container}
      colors={['rgba(166, 166, 166, 1)', 'rgba(166, 166, 166, 0)']}
      start={[0.5, 0]}
      end={[1, 1]}  
    >
      <Header />
        <Image
          source={{
            uri: params.image,
          }}
          style={styles.profileImage}
        />
        <View style={styles.card}>
          <Image source={cardBackground} style={styles.cardBackgroundImage} />
          <Text style={styles.additionalData}>Name: {params.name}</Text>
          <Text style={styles.additionalData}>Age: {params.age}</Text>
          <Text style={styles.additionalData}>From: {params.location}</Text>
          <Text style={styles.additionalData}>Phone: {params.phone}</Text>
          <Text style={styles.additionalData}>Email: {params.email}</Text>
        </View>
        <View style={styles.containerLinks}> 
          <TouchableOpacity onPress={() => onPressChat()} style={styles.button}>
              <Feather name="message-circle" size={36} color="white" />
              <Text style={{color: "white"}}>Chat</Text>
          </TouchableOpacity>
   
          <TouchableOpacity onPress={() => setIsOpenShareModal(true)} style={styles.button}>
              <MaterialCommunityIcons name="share" size={36} color="white" />
              <Text style={{color: "white"}}>Shared</Text>
          </TouchableOpacity>
        </View>
        <ModalShare isOpen={isOpenShareModal} onClose={() => setIsOpenShareModal(false)}/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 16
  },
  card: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(58, 58, 58, 1)",
    overflow: "hidden",
    minHeight: 200,
  },
  cardBackgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  additionalData: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  containerLinks: {
    marginTop: 18,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    alignItems: "center"
  }
});

export default DetailArtist;
