import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Discover = () => {
  return (
    <ScrollView className="flex-1 bg-[#001440] p-5">
      {/* Search Bar */}
      <View className="flex-row items-center bg-white p-3 rounded-md mt-5 shadow-md">
        <Image 
          source={require('../../assets/images/search.png')} 
          className="w-5 h-5 mr-2" 
        />
        <TextInput 
          placeholder="Search Anime..." 
          placeholderTextColor="#888" 
          className="flex-1 text-black"
        />
      </View>

      {/* Recent Searches */}
      <View className="mt-5">
        <Text className="text-white text-lg font-semibold mb-2">Recent Searches</Text>
        <View className="bg-gray-800 p-3 rounded-md shadow-md">
          {/* Example of recent search items */}
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white font-semibold">Naruto</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/x.png')} className="w-4 h-4" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white font-semibold">One Piece</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/x.png')} className="w-4 h-4" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-white font-semibold">Attack on Titan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/x.png')} className="w-4 h-4" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Trending Anime in Japan */}
      <Text className="text-white text-lg font-semibold mt-8 mb-3">Trending Anime in Japan</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3">
        {/* My Hero Academia */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/mha.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">My Hero Academia</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Jobless Reincarnation */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/jobless.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Jobless Reincarnation</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Attack on Titan */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/aot.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Attack on Titan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Dr. Stone */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/stone.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Dr. Stone</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Demon Slayer */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/demon.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Demon Slayer</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Recent Anime Released */}
      <Text className="text-white text-lg font-semibold mt-8 mb-3">Recent Anime Released</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3">
        {/* Frieren: Journeys End */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/end.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Frieren: Journeys End</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Solo Leveling */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/solo.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Solo Leveling</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Mashle */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/mashle.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Mashle</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Jujutsu Kaisen */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/jjk.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Jujutsu Kaisen</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Mature Content Box */}
      <View className="flex-row items-center bg-red-600 p-3 rounded-md mt-8 shadow-md justify-center mb-8">
        <Text className="text-white text-lg font-semibold">Mature Content Restricted</Text>
      </View>
    </ScrollView>
  );
};

export default Discover;
