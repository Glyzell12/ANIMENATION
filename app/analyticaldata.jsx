import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Analyticaldata = () => {
  return (
    <ScrollView className="flex-1 bg-[#001440] p-5">
      {/* Page Title */}
      <Text className="text-white text-2xl font-bold mb-5">Analytical Data</Text>
      
      {/* Pie Chart Section */}
      <View className="bg-gray-800 p-3 rounded-md shadow-md mb-5">
        <Text className="text-white text-lg font-semibold mb-3">Pie Chart Overview</Text>
        <Image 
          source={require('../assets/piechart.png')} 
          className="w-full h-64 rounded-md"
          style={{ resizeMode: 'contain' }} 
        />
      </View>

      {/* Bar Chart Section */}
      <View className="bg-gray-800 p-3 rounded-md shadow-md">
        <Text className="text-white text-lg font-semibold mb-3">Bar Chart Overview</Text>
        <Image 
          source={require('../assets/barchart.png')} 
          className="w-full h-64 rounded-md"
          style={{ resizeMode: 'contain' }} 
        />
      </View>
    </ScrollView>
  );
};

export default Analyticaldata;
