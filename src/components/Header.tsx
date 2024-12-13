import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="bg-white py-2">
        <View className="flex-row items-center justify-between pl-6 pr-4 py-1 pb-4 bg-white">
            <TouchableOpacity>
                <Image
                source={require('../assets/menu-icon.png')}
                className="h-6 w-6 pl-6"
                />
            </TouchableOpacity>

            <Text className="text-2xl font-bold text-black absolute left-0 right-0 text-center pb-3">Presto</Text>

            <View className="flex-row items-center space-x-4">
                <TouchableOpacity>
                    <Image
                        source={require('../assets/bell-icon.png')}
                        className="h-7 w-7"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/profile-icon.png')}
                        className="h-7 w-7"
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View className="px-6">
            <View className="bg-gray-100 rounded-3xl px-4 py-2 flex-row items-center">
                <Image
                source={require('../assets/search-icon.png')}
                className="h-5 w-5 mr-2"
                />
                <TextInput
                className="flex-1"
                placeholder="Search for food or restaurants"
                />
            </View>
        </View>
        
        <View className="flex-row justify-center mt-4 px-6">
            <TouchableOpacity className="px-8 py-2 rounded-lg">
                <Text className="text-gray-600 text-lg">All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-8 py-2 rounded-lg">
                <Text className="text-gray-600 text-lg">Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-8 py-2 rounded-lg">
                <Text className="text-gray-600 text-lg">New</Text>
            </TouchableOpacity>
        </View>

        <View className="bg-orange-500 pt-4 pb-2 \">
            <Text className="text-black text-center text-lg font-medium">
                advertisements
            </Text>
        </View>
    </View>
    
  );
};

export default Header;
