import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import MenuTop from '../menu/menutop'
import Items from '../menu/items'

const menu = () => {
  return (
    <View className='bg-custom-gray"'>
      <MenuTop/>
      <ScrollView>
        <Items/>
      </ScrollView>
    </View>
  )
}

export default menu