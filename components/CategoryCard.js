import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <View className="mx-1 items-center relative">
      <Image
       source={{
        uri:imgUrl,
      }} className="h-20 w-20 rounded-md"/>
      <Text className="absolute bottom-1 text-white font-bold text-sm">{title}</Text>
    </View>
  )
}

export default CategoryCard