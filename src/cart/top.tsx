import React from 'react';
import { View, Text, Image } from 'react-native';

const Top = () => {
  return (
    <View className="absolute top-0 left-0 right-0 bg-white p-4 flex-row items-center justify-between border-b border-gray-200 z-10">
      <Image
        source={require('../images/arrow.png')}
        className="w-12 h-12 rounded-full"
      />

      <Text className="text-lg font-bold flex-1 text-center">Your Cart</Text>

      <Image
        source={require('../images/question.png')}
        className="w-12 h-12 rounded-full"
      />
    </View>
  );
};

export default Top;