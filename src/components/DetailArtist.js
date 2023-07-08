import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from "react-native-gesture-handler";
// import cardBackground from "../utils/dust.png"
const cardBackground = require("../utils/dust.png");
import {
  Ionicons,
  Octicons,
} from "@expo/vector-icons";

const DetailArtist = ({ route }) => {
  const { params } = route;
  console.log(params)
  const navigation = useNavigation();

  const onPressMenu = async () => {
    navigation.replace("Home");
  };

  return (
    <LinearGradient 
      style={styles.container}
      colors={['rgba(166, 166, 166, 1)', 'rgba(166, 166, 166, 0)']}
      start={[0.5, 0]}
      end={[1, 1]}  
    >
      <View style={styles.topBar}>
        <View style={styles.containerTopBar}>
          <View style={styles.topBarItem}>
            <TouchableOpacity>
              <Image source={require("../utils/vector.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.topBarItem}>
            <Octicons name="dot-fill" size={24} color="#F6F8B5" />
            <Text style={styles.topBarItemText}>Profile</Text>
            <Octicons name="dot-fill" size={24} color="#F6F8B5" />
          </View>
          <View style={styles.topBarItemRounded}>
            <TouchableOpacity onPress={() => onPressMenu()}>
              <Ionicons name="ios-menu" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    // backgroundColor: "rgba(166, 166, 166, 1)",
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
  photoList: {
    marginBottom: 16,
  },
  photoItem: {
    width: 120,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
  },
  sectionAv: {
    flex: 1,
    marginBottom: 8,
  },
  video: {
    width: 320,
    height: 420,
    backgroundColor: "black",
    borderRadius: 8,
  },
  topBar: {
    width: "100%",
    marginVertical: 12,
  },
  containerTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  topBarItemRounded: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FADE4F",
    borderRadius: 50,
    padding: 4,
  },
  topBarItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  topBarItemText: {
    color: "#FFFFFF",
    paddingHorizontal: 12,
    fontSize: 20,
  },
});

export default DetailArtist;
