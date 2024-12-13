import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Top from '../cart/top'
import Items from '../cart/items'

const menu = () => {
  return (
    <View className='bg-custom-gray"'>
      <Top/>
      <ScrollView>
        <Items/>
      </ScrollView>
    </View>
  )
}

export default menu