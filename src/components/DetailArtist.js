import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import fakeAvatar from '../utils/avatar.png'
// import cardBackground from "../utils/dust.png"
const cardBackground = require('../utils/dust.png');
const DetailArtist = () => {
  const artistData = {
    name: 'Nombre del Artista',
    age: "21 años",
    from: "Colombia",
    phone: "34758-321",
    email: "joacoPi@gmail.com"
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image source={fakeAvatar} style={styles.profileImage} />
      <View style={styles.card}>
        <Text style={styles.additionalData}>Name: {artistData.name}</Text>
        <Text style={styles.additionalData}>Age: {artistData.age}</Text>
        <Text style={styles.additionalData}>From: {artistData.from}</Text>
        <Text style={styles.additionalData}>Phone: {artistData.phone}</Text>
        <Text style={styles.additionalData}>Email: {artistData.email}</Text>
      </View>
      {/* <FlatList
        data={artistData.photos}
        renderItem={renderPhotoItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.photoList}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundImage: `url(${cardBackground})`,
    backgroundColor: "#3A3A3A"
  },
  additionalData: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
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
});

export default DetailArtist;