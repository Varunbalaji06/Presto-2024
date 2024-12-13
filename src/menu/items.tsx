import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Detail from './detail';

const Items: React.FC = () => {
  // Create refs for each section
  const section1Ref = useRef<any>(null);
  const section2Ref = useRef<any>(null);
  const section3Ref = useRef<any>(null);
  const section4Ref = useRef<any>(null);

  // Function to scroll to the section based on the "id"
  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case 'section1':
        section1Ref.current?.scrollIntoView({ animated: true });
        break;
      case 'section2':
        section2Ref.current?.scrollIntoView({ animated: true });
        break;
      case 'section3':
        section3Ref.current?.scrollIntoView({ animated: true });
        break;
      case 'section4':
        section4Ref.current?.scrollIntoView({ animated: true });
        break;
      default:
        break;
    }
  };

  return (
    <View className="mt-20">
      <Text className="ml-4 pb-5 font-bold text-2xl">Gourmet Bistro</Text>

      {/* Horizontal ScrollView for Navigation */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row bg-white shadow-md p-2"
      >
        <TouchableOpacity
          onPress={() => scrollToSection('section1')}
          className="px-4 py-2 rounded-lg mx-2"
        >
          <Text className="font-bold">Appetizers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection('section2')}
          className="px-4 py-2 rounded-lg mx-2"
        >
          <Text className="font-bold">Main Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection('section3')}
          className="px-4 py-2 rounded-lg mx-2"
        >
          <Text className="font-bold">Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection('section4')}
          className="px-4 py-2 rounded-lg mx-2"
        >
          <Text className="font-bold">Drinks</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Main Content ScrollView */}
      <ScrollView className="flex-1 mt-2">
        {/* Section 1: Appetizers */}
        <View ref={section1Ref} id="section1">
          <Text className="text-2xl font-bold ml-4">Appetizers</Text>
          <Detail
            name="Bruschetta"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$6.99"
            imageUrl="a1"
          />
          <Detail
            name="Stuffed Mushrooms"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$7.99"
            imageUrl="a2"
          />
        </View>

        {/* Section 2: Main Courses */}
        <View ref={section2Ref} id="section2">
          <Text className="text-2xl font-bold ml-4">Main Courses</Text>
          <Detail
            name="Grilled Salmon"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$18.99"
            imageUrl="m1"
          />
          <Detail
            name="Ribeye Steak"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$24.99"
            imageUrl="m2"
          />
        </View>

        {/* Section 3: Desserts */}
        <View ref={section3Ref} id="section3">
          <Text className="text-2xl font-bold ml-4">Desserts</Text>
          <Detail
            name="Cheese Cake"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$5.99"
            imageUrl="dz1"
          />
          <Detail
            name="Chocolate Lava Cake"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$6.99"
            imageUrl="dz2"
          />
        </View>

        {/* Section 4: Drinks */}
        <View ref={section4Ref} id="section4">
          <Text className="text-2xl font-bold ml-4">Drinks</Text>
          <Detail
            name="Mojito"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$8.99"
            imageUrl="d1"
          />
          <Detail
            name="Lemonade"
            content="This delicious dish is made with fresh ingredients and topped with a special sauce. It’s perfect for any occasion."
            price="$3.99"
            imageUrl="d2"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Items;