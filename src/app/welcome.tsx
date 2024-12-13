import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const Welcome = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [rollNoFocused, setRollNoFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Image
        source={require('../assets/logo.png')}
        className="w-212 h-92"
      />
      <View className="my-4">
        <Text className="text-lg font-bold text-center text-[#030303]">Welcome to Presto</Text>
        <Text className="text-center">Order your favourite meals from the best</Text>
        <Text className="text-center">restaurants around you. Enjoy exciting offers</Text>
        <Text className="text-center">and quick delivery.</Text>
      </View>

      <View className="w-full">
        <Text className="mb-2">Name</Text>
        <TextInput
          placeholder="Enter your name"
          keyboardType="default"
          className={`w-full border ${nameFocused ? 'border-blue-500' : 'border-gray-200'} rounded-full py-3 px-4`}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
        />
        <Text className="mb-2">Roll No</Text>
        <TextInput
          placeholder="Enter your roll number"
          keyboardType="default"
          className={`w-full border ${rollNoFocused ? 'border-blue-500' : 'border-gray-200'} rounded-full py-3 px-4`}
          onFocus={() => setRollNoFocused(true)}
          onBlur={() => setRollNoFocused(false)}
        />
        <TouchableOpacity
          className="mt-4 bg-red-700 border border-red-600 rounded-xl py-3 px-6"
          onPress={() => console.log('Details Sent')}
        >
          <Text className="text-white font-bold text-center">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
