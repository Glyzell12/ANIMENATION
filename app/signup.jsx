import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View className="flex-1 bg-[#001440] p-5">
      {/* Logo at the Top Left */}
      <Image source={require('../assets/logos.png')} className="w-16 h-16 mt-10"
      style={{resizeMode:'contain', height: 50,width: 100}} />

      {/* Register Account Text */}
      <Text className="text-white text-3xl font-bold mt-10">Register account</Text>

      {/* Full Name Input */}
      <View className="flex-row items-center mt-10 bg-white rounded-md p-2">
        <Image source={require('../assets/user.png')} className="w-6 h-6 mr-3" />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#8A8A8A"
          className="flex-1 text-black"
        />
      </View>

      {/* Email Input */}
      <View className="flex-row items-center mt-5 bg-white rounded-md p-2">
        <Image source={require('../assets/email.png')} className="w-6 h-6 mr-3" />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#8A8A8A"
          className="flex-1 text-black"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View className="flex-row items-center mt-5 bg-white rounded-md p-2">
        <Image source={require('../assets/password.png')} className="w-6 h-6 mr-3" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#8A8A8A"
          className="flex-1 text-black"
          secureTextEntry
        />
      </View>

      {/* Checkbox and Forgot Password */}
      <View className="flex-row justify-between items-center mt-5">
        <View className="flex-row items-center">
          <Image source={require('../assets/check.png')} className="w-5 h-5 mr-2" />
          <Text className="text-white">Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#6493FA]">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <Link href="login" asChild>
        <TouchableOpacity
          className="mt-8 bg-[#6493FA] p-4 rounded-md flex items-center justify-center"
        >
          <Text className="text-white text-lg font-semibold">Register</Text>
        </TouchableOpacity>
      </Link>

      {/* Or Sign Up With */}
      <Text className="text-white text-center mt-5">Or sign up with</Text>

      {/* Facebook and Google Buttons */}
      <View className="flex-row justify-center mt-5">
        {/* Facebook Button */}
        <Link href="/home" asChild>
        <TouchableOpacity className="bg-blue-400 p-3 mx-2 rounded-md flex-row items-center">
          <Image source={require('../assets/facebook.png')} className="w-6 h-6 mr-2" />
          <Text className="text-white">Facebook</Text>
        </TouchableOpacity>
        </Link>
        {/* Google Button */}
        <Link href="/home" asChild>
        <TouchableOpacity className="bg-red-600 p-3 mx-2 rounded-md flex-row items-center">
          <Image source={require('../assets/google.png')} className="w-6 h-6 mr-2" />
          <Text className="text-white">Google</Text>
        </TouchableOpacity></Link>
      </View>

      {/* Continue as Guest */}
      <Link href="/home" asChild>
        <TouchableOpacity className="mt-5">
          <Text className="text-white text-center underline">Continue as guest</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Signup;
