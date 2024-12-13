import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Food from './Food';
import Time from './time';

interface FoodItem {
  name: string;
  price: number;
}

const Items: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelected(value);
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View className="mt-24 pb-10">
      <View className="flex-row items-center px-5">
        <Image
          source={require('../images/pizza.png')}
          className="w-24 h-24 rounded-full"
        />
        <View className="ml-4">
          <Text className="text-lg font-semibold">John Doe</Text>
          <Text className="text-sm text-gray-500">Web Developer</Text>
        </View>
      </View>
      <Food name="Pizza" price={12.99} />
      <Food name="Burger" price={8.49} />
      <Food name="Pasta" price={15.00} />
      <Text className="ml-4 pt-3 font-bold text-base">Special Instructions</Text>
      <View className="m-4 pb-20 bg-[#EDEDF0] border border-white rounded-lg ">
        <View className="items-center flex-row">
          <TouchableOpacity
            onPress={toggleSelection}
            className="ml-3 h-6 w-6 rounded-full border-2 border-red-800 flex items-center justify-center"
          >
            {isSelected && <View className="h-3 w-3 rounded-full bg-red-800" />}
          </TouchableOpacity>
          <Text className="ml-2 text-lg">Dine IN</Text>
        </View>
      </View>
      <View>
        <Text className="ml-4 pb-4 font-bold text-lg">Order Summary</Text>
        <View className="pb-4 flex-row justify-between">
          <Text className="ml-4 text-gray-500">Sub Total</Text>
          <Text className="mr-4">$34.97</Text>
        </View>
        <View className="pb-5 flex-row justify-between">
          <Text className="ml-4 text-gray-500">Taxes & Fees</Text>
          <Text className="mr-4">$3.50</Text>
        </View>
        <View className="pb-10 flex-row justify-between">
          <Text className="ml-4">Total</Text>
          <Text className="mr-4">$38.57</Text>
        </View>
      </View>
      <View>
        <Text className="ml-4 pb-5 font-bold text-xl">Apply Promo Code</Text>
        <Text className="ml-6 pb-2">Promo Code</Text>
        <TextInput
          className="mx-4 border border-gray-300 rounded-md p-2"
          placeholder="Enter your promo code here"
          value={text}
          onChangeText={setText}
        />
      </View>
      <View className="pt-10">
        <Text className="ml-4 font-bold text-xl">Pickup Details</Text>
        <Time />
      </View>
      <View className='pt-7'>
        <Text className="ml-4 pb-5 font-bold text-xl">Select Payment Method</Text>
        <View className="bg-white p-4 rounded-lg shadow-md mx-4">
          <View className="flex-row py-2 items-center">
            <TouchableOpacity
              onPress={() => handleSelect(1)}
              className="ml-3 h-6 w-6 rounded-full border-2 border-red-800 flex items-center justify-center"
            >
              {selected === 1 && <View className="h-3 w-3 rounded-full bg-red-800" />}
            </TouchableOpacity>
            <Text className="ml-2 text-lg">UPI</Text>
          </View>
          <View className="h-[0.5px] bg-black w-full my-2" />
          <View className="flex-row py-2 items-center">
            <TouchableOpacity
              onPress={() => handleSelect(2)}
              className="ml-3 h-6 w-6 rounded-full border-2 border-red-800 flex items-center justify-center"
            >
              {selected === 2 && <View className="h-3 w-3 rounded-full bg-red-800" />}
            </TouchableOpacity>
            <Text className="ml-2 text-lg">Card</Text>
          </View>
          <View className="h-[0.5px] bg-black w-full my-2" />
          <View className="flex-row py-2 items-center">
            <TouchableOpacity
              onPress={() => handleSelect(3)}
              className="ml-3 h-6 w-6 rounded-full border-2 border-red-800 flex items-center justify-center"
            >
              {selected === 3 && <View className="h-3 w-3 rounded-full bg-red-800" />}
            </TouchableOpacity>
            <Text className="ml-2 text-lg">Cash On Delivery</Text>
          </View>
        </View>
        <TouchableOpacity className="mx-4 flex-row items-center justify-center mt-4 p-4 bg-red-800 rounded-full">
          <Image
            source={require('../images/cart.png')}
            className="h-6 w-6 mr-2"
          />
          <Text className="text-white text-lg">Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Items;