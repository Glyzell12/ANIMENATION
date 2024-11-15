import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-[#001440] p-5">
      {/* Logo at the Top */}
      <Image 
        source={require('../../assets/images/logos.png')} 
        className="w-16 h-16 mt-10" 
        style={{ resizeMode: 'contain', height: 50, width: 100 }} 
      />

      {/* Anime Header */}
      <Text className="text-white text-3xl font-extrabold mt-5 mb-2">Anime</Text>

      {/* Rated G Box */}
      <View className="flex-row items-center bg-green-500 p-2 rounded-md mt-5 shadow-md">
        <Image source={require('../../assets/images/child.png')} className="w-6 h-6 mr-2" />
        <Text className="text-white text-lg font-semibold">Rated G</Text>
      </View>

      {/* Scrollable Horizontal Content for Rated G */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3">
        {/* Doraemon */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/doraemon.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Doraemon</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

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

        {/* Spirited Away */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/spirit.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Spirited Away</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Pokemon */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/pokemon.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Pokemon</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Howl's Moving Castle */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/howl.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Howl's Moving Castle</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Shonen/Shojo Box */}
      <View className="flex-row items-center bg-orange-500 p-2 rounded-md mt-8 shadow-md">
        <Image source={require('../../assets/images/teen.png')} className="w-6 h-6 mr-2" />
        <Text className="text-white text-lg font-semibold">Shonen/Shojo</Text>
      </View>

      {/* Scrollable Horizontal Content for Shonen/Shojo */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3">
        {/* Black Butler */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/butler.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Black Butler</Text>
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

        {/* One Piece */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/piece.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">One Piece</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Love is War */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/love.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Love is War</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Mature Content Box */}
      <View className="flex-row items-center bg-red-600 p-2 rounded-md mt-8 shadow-md">
        <Image source={require('../../assets/images/mature.png')} className="w-6 h-6 mr-2" />
        <Text className="text-white text-lg font-semibold">Mature Content</Text>
      </View>

      {/* Scrollable Horizontal Content for Mature Content */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3">
        {/* Prison School */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/prison.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Prison School</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Parasyte */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/parasyte.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Parasyte</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Highschool DxD */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/highschool.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Highschool DxD</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Blood-C */}
        <View className="mr-4">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/blood.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Blood-C</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tokyo Ghoul */}
        <View className="mr-4 mb-10">
          <TouchableOpacity activeOpacity={0.8} className="rounded-md shadow-lg">
            <Image source={require('../../assets/images/tokyo.jpg')} className="w-40 h-40 rounded-md" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-semibold">Tokyo Ghoul</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('../../assets/images/heart.png')} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
