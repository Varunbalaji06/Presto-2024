import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

interface FoodProps {
  name: string;
  price: number;
}

const Food: React.FC<FoodProps> = ({ name, price }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <View className="flex-row items-center justify-between p-4">
      <View className="flex-col items-start">
        <Text className="ml-1 font-bold text-base">{name}</Text>
        <Text className="ml-1 text-red-800">${price.toFixed(2)}</Text>
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity onPress={decreaseQuantity}>
          <Image
            source={require('../images/minus.png')}
            className="w-8 h-8 mx-2"
          />
        </TouchableOpacity>

        <Text className="mx-2">{quantity}</Text>

        <TouchableOpacity onPress={increaseQuantity}>
          <Image
            source={require('../images/plus.png')}
            className="w-8 h-8 mx-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Food;