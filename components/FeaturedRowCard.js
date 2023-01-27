import { View, Text, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const FeaturedRowCard = ({imgUrl,head,rating,address,special}) => {
  return (
    <View className="mx-1 bg-white drop-shadow-md rounded-sm">
        <Image
        source={{
            uri:urlFor(imgUrl).url(),
        }}
        className="w-64 h-36 rounded-sm"
        />
      <View className="ml-4 mb-3">
        <Text className="font-bold mt-2 text-lg">{head}</Text>
        <View className="flex-row space-x-1 ml-1 mt-1 items-center">
        <StarIcon size={18} fill="#d8d8d8"/>
        <Text className="text-xs text-gray-400">{rating}</Text>
        <Text className="text-xs text-gray-400">{special}</Text>
        </View>
        <View className="flex-row mt-1 items-center space-x-1">
            <MapPinIcon size={24} fill="#d8d8d8"/>
            <Text className="font-xs text-gray-400">{address}</Text>
        </View>
      </View>
    </View>
  )
}

export default FeaturedRowCard