import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

const ChatView = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const route = useRoute();
  const { userId, username, image } = route.params;

  const renderMessage = ({ item }) => {
    return (
      <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 8,
            flex: 1,
            alignSelf: 'flex-start',
            borderColor: "#FADE4F",
            borderWidth: 1
          }}
        >
          <Text style={{color: "white"}}>{item}</Text>
        </View>
      </View>
    );
  };

  const handleSend = () => {
    if (inputText.trim() !== '') {
      setMessages([inputText, ...messages]);
      setInputText('');
    }
  };

  useEffect(() => {
    setMessages([])
    setInputText('')
  }, [])

  return (
    <LinearGradient 
      style={{ flex: 1}}
      colors={['rgba(166, 166, 166, 1)', 'rgba(166, 166, 166, 0)']}
      start={[0.5, 0]}
      end={[1, 1]}   
    >
      <View style={{flex: 1, display: "flex", justifyContent: "center", marginTop: 20, alignItems: "center"}}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.profileImage}
        />
        <Text>Inicia una conversacion con <Text style={{fontWeight: 800}}>{username}</Text></Text>
      </View>
      
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        inverted
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, borderColor: "#FADE4F", borderRadius: 20, paddingHorizontal: 16 }}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <TouchableOpacity onPress={handleSend} style={{ marginHorizontal: 10 }}>
          <Ionicons name="ios-send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 16
  },
})

export default ChatView;