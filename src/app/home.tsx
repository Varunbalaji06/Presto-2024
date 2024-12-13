import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import FeaturedRestaurants from '../components/FeaturedRestaurants';
import PopularItems from '../components/PopularItems';
import BottomNavigation from '../components/BottomNavigation';

const home: React.FC = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <View className='flex-1'>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FeaturedRestaurants />
          <PopularItems />
        </ScrollView>
      </View>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default home;
