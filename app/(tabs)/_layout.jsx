import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }} 
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        //Tab Layout for tab icons
        <Tabs 
            screenOptions={{
                tabBarStyle: { backgroundColor:'#D3F5F5' },
            }}
        >
            <Tabs.Screen
                name="discover"
                options={{
                    title: 'Discover',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.discover}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
