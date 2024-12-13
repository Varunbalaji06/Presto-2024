import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const PopularItems: React.FC = () => {
  return (
    <View className="bg-white py-6">
      <View className='flex-row items-center justify-between mb-4 px-4'>
        <Text className="text-2xl font-bold">Popular Items</Text>
        <TouchableOpacity>
            <Image 
                source={require('../assets/circled-right-icon.png')}
                className='h-9 w-9 mr-1'
            />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="mr-4 pl-4">
            <Image
                source={require('../assets/margherita.jpg')}
                className="rounded-t-2xl h-32 w-48"
            />
            <Text className="text-lg font-bold mt-2">Margherita</Text>
            <Text className="text-gray-600 text-sm">4.5  
                <Image 
                    source={require('../assets/star-icon.png')}
                    className='h-3 w-3 ml-1'
                /> (120)
            </Text>
        </View>
        <View className="mr-4">
            <Image
                source={require('../assets/whopper.jpg')}
                className="rounded-t-2xl h-32 w-48"
            />
            <Text className="text-lg font-bold mt-2">Whopper</Text>
            <Text className="text-gray-600 text-sm">4.2
                <Image 
                    source={require('../assets/star-icon.png')}
                    className='h-3 w-3 ml-1'
                /> (200)</Text>
        </View>
        <View className="mr-4">
            <Image
                source={require('../assets/cookies.jpg')}
                className="rounded-t-2xl h-32 w-48"
            />
            <Text className="text-lg font-bold mt-2">Cookies</Text>
            <Text className="text-gray-600 text-sm">4.8
                <Image 
                    source={require('../assets/star-icon.png')}
                    className='h-3 w-3 ml-1'
                /> (150)</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularItems;