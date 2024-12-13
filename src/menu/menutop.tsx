import React from 'react';
import { View, Text, Image } from 'react-native';

const MenuTop = () => {
    return (
        <View className="absolute top-0 left-0 right-0 bg-white p-4 flex-row items-center justify-between border-b border-gray-200 z-10">
            <Image
                source={require('../images/menu.png')}
                className="w-8 h-8 rounded-full"
            />

            <Text className="ml-6 text-xl font-bold flex-1 text-center">Presto</Text>
            <View className='flex-row'>
                <Image
                    source={require('../images/notification.png')}
                    className="w-8 h-8 rounded-full"
                /><Image
                    source={require('../images/profile.png')}
                    className="w-8 h-8 rounded-full"
                />
            </View>
        </View>
    );
};

export default MenuTop;