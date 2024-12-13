import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

type DetailProps = {
    imageUrl: string;
    name: string;
    content: string;
    price: string;
};

const Detail: React.FC<DetailProps> = ({ name, content, price, imageUrl }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const imageMap: { [key: string]: any } = {
        'a1': require('../images/a1.png'),
        'a2': require('../images/a2.png'),
        'm1': require('../images/m1.png'),
        'm2': require('../images/m2.png'),
        'dz1': require('../images/dz1.png'),
        'dz2': require('../images/dz2.png'),
        'd1': require('../images/d1.png'),
        'd2': require('../images/d2.png'),
    };

    const imageSource = imageMap[imageUrl] || require('../images/a1.png');

    return (
        <View className="flex-row p-4">
            <View className="w-3/10">
                <Image
                    source={imageSource}
                    className="w-30 h-30 rounded-xl"
                />
            </View>
            <View className="w-7/10 pl-4">
                <Text className="text-lg font-bold">{name}</Text>
                <View className="mb-4 w-60">
                    <TouchableOpacity onPress={toggleContent}>
                        <Text className='text-sm text-gray-700'>
                            {isExpanded ? content : `${content.slice(0, 38)}...`}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-lg text-red-800 font-bold">{price}</Text>

                    <TouchableOpacity className="bg-red-800 px-4 py-2 rounded-xl flex-row justify-center items-center">
                        <Text className="text-white font-bold">Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Detail;