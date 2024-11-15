import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { images } from '../constants';  
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={{ flex: 1, justifyContent:'center', padding: 10 }} 
      >
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center min-h-screen px-4">
            <Image
              source={images.logo}
              className="w-[150px] h-[150px] pt-10"
              resizeMode="contain"
              style={{ borderRadius: 75 }}
            />
            <Image
              source={images.portfolio}
              className="w-[250px] h-[50px] "
              resizeMode="contain"
              style={{ borderRadius: 75 }}
            />
            <CustomButton
              title="Start Streaming"
              handlePress={() => router.push('/auth/login')}
              containerStyles="w-full mt-64"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </ImageBackground>
    </SafeAreaView>
  );
}
