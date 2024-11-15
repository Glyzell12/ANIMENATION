import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Bookmark = () => {
  return (
    <ScrollView className="flex-1 bg-[#001440] p-5">
      {/* Profile Section */}
      <View className="flex-row items-center mb-5">
        <Image 
          source={require('../../assets/images/pfp.jpg')} 
          className="w-16 h-16 rounded-full" 
          style={{ resizeMode: 'cover' }} 
        />
        <Text className="text-white text-lg font-semibold ml-4">Glyzell@123</Text>
      </View>

      {/* History Box */}
      <View className="bg-gray-800 p-3 rounded-md shadow-md mb-5">
        <View className="flex-row items-center mb-3">
          <Image 
            source={require('../../assets/images/history.png')} 
            className="w-6 h-6 mr-2"
            style={{ resizeMode: 'contain' }} 
          />
          <Text className="text-white text-lg font-semibold">History</Text>
        </View>
        
        {/* Anime History Items */}
        <View className="flex-row items-center justify-between mb-3">
          <Image 
            source={require('../../assets/images/doraemon.jpg')} 
            className="w-24 h-24 rounded-md"
            style={{ resizeMode: 'cover' }} 
          />
          <Text className="text-white font-semibold">Doraemon</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Image 
            source={require('../../assets/images/mha.jpg')} 
            className="w-24 h-24 rounded-md"
            style={{ resizeMode: 'cover' }} 
          />
          <Text className="text-white font-semibold">My Hero Academia</Text>
        </View>
      </View>

      {/* Anime Titles Watchlist */}
      <View className="bg-gray-800 p-3 rounded-md shadow-md mb-5">
        <Text className="text-white text-lg font-semibold mb-3">Watchlist</Text>
        <Text className="text-white mb-1">Doraemon</Text>
        <Text className="text-white mb-1">My Hero Academia</Text>
        <Text className="text-white mb-1">Attack on Titan</Text>
        <Text className="text-white mb-1">One Piece</Text>
        <Text className="text-white mb-1">Naruto</Text>
        <Text className="text-white mb-1">Dragon Ball Z</Text>
        <Text className="text-white mb-1">Death Note</Text>
        <Text className="text-white mb-1">Fullmetal Alchemist</Text>
        <Text className="text-white mb-1">Jujutsu Kaisen</Text>
        <Text className="text-white mb-1">Hunter x Hunter</Text>
      </View>

      {/* My Downloads and My Library */}
      <View className="bg-gray-800 p-3 rounded-md shadow-md mb-5">
        <View className="flex-row items-center mb-3">
          <Image 
            source={require('../../assets/images/dl.png')} 
            className="w-6 h-6 mr-2"
            style={{ resizeMode: 'contain' }} 
          />
          <Text className="text-white font-semibold">My Downloads</Text>
        </View>

        <View className="flex-row items-center">
          <Image 
            source={require('../../assets/images/library.png')} 
            className="w-6 h-6 mr-2"
            style={{ resizeMode: 'contain' }} 
          />
          <Text className="text-white font-semibold">My Library</Text>
        </View>
      </View>

      {/* Advertisement Section */}
      <Image 
        source={require('../../assets/images/ads.jpg')} 
        className="w-full h-32 rounded-md mb-5"
        style={{ resizeMode: 'cover' }} 
      />

      {/* Data Button */}
      <Link href="analyticaldata" asChild>
        <TouchableOpacity 
          className="bg-white p-4 rounded-full flex-row items-center justify-center shadow-lg mb-5"
        >
          <Image 
            source={require('../../assets/images/datas.png')} 
            className="w-8 h-8 mr-2"
            style={{ resizeMode: 'contain' }} 
          />
          <Text className="text-black text-lg font-light">Analytical Data</Text>
          
        </TouchableOpacity>
      </Link>

      {/* Logout Button */}
      <Link href="/" asChild>
        <TouchableOpacity 
          className="bg-gray-600 p-4 rounded-full flex-row items-center justify-center shadow-lg mb-10"
        >
          <Text className="text-white text-lg font-semibold">Logout</Text>
          <Image 
            source={require('../../assets/images/log.png')} 
            className="w-5 h-5 ml-2"
            style={{ resizeMode: 'contain' }} 
          />
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default Bookmark;
