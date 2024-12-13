import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BottomNavigation: React.FC = () => {
  return (
    <View className="bg-white py-1 px-12 flex-row justify-between">
      <TouchableOpacity className="items-center">
        <Image source={require('../assets/home-icon.png')} className="h-6 w-6" />
        <Text className="text-gray-400 text-sm mt-1">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Image source={require('../assets/cart-icon.png')} className="h-6 w-6" />
        <Text className="text-gray-400 text-sm mt-1">Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Image source={require('../assets/games-icon.png')} className="h-6 w-6" />
        <Text className="text-gray-400 text-sm mt-1">Games</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;