import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const FeaturedRestaurants: React.FC = () => {
  return (
    <View className="bg-white py-6">
      <View className='flex-row items-center justify-between mb-4 px-4'>
        <Text className="text-2xl font-bold">Featured Restaurants</Text>
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
                source={require('../assets/pizza-hut.jpg')}
                className="rounded-t-2xl h-32 w-60"
            />
            <Text className="text-lg font-bold mt-2">Pizza Hut</Text>
            <Text className="text-gray-600">Best pizza in town</Text>
        </View>
        <View className="mr-4">
          <Image
            source={require('../assets/burger-king.jpg')}
            className="rounded-t-2xl h-32 w-60"
          />
          <Text className="text-lg font-bold mt-2">Burger King</Text>
          <Text className="text-gray-600">Delicious burgers</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRestaurants;