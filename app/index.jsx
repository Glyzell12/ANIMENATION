import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <ImageBackground source={require('../assets/animebg.jpg')} style={{ flex: 1 }}>
      <View className="flex-1 justify-end items-center">
        <Image
          className="mt-40"
          source={require('../assets/animelogo.png')}
          style={{ width: 250, height: 250, borderRadius: 25, resizeMode: 'contain' }}
        />

        <View className="h-1/2 justify-center items-end flex-row w-full mb-10">
          {/* Sign In Button with Styling */}
          <Link href="/login" asChild>
            <TouchableOpacity
              className="mt-16 flex-row items-center justify-center"
              style={{
                backgroundColor: '#19ABFF',
                borderRadius: 15,
                height: 55,
                width: 160,
                margin: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                paddingHorizontal: 10,
              }}
            >
              <Text className="text-gray-200 font-semibold text-lg">Sign In</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/signup" asChild>
            <TouchableOpacity
              className="mt-16 flex-row items-center justify-center bg-gray-200"
              style={{
                borderRadius: 15,
                height: 55,
                width: 160,
                margin: 5,
                borderWidth: 2,
                borderColor: '#19ABFF',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                paddingHorizontal: 10,
              }}
            >
              <Text className="text-[#19ABFF] font-semibold text-lg">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
