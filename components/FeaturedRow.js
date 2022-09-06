import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import FeaturedRowCard from './FeaturedRowCard'

const FeaturedRow = ({head, description}) => {
  return (
    <>
    <View className="mx-5 my-2 flex-row items-center">
       <View className="flex-1">
      <Text className="font-bold text-xl text-slate-700 my-1">{head}</Text>
      <Text className="text-xs text-slate-400">{description}</Text>
       </View>
       <ArrowRightIcon size={20} fill="#46daf4"/>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:18,
        paddingTop:15
       }}>
        <FeaturedRowCard imgUrl="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" special="Burgers" head="Pizza Hut" rating="4.2" address="Clement Town, Dehradun"/>
        <FeaturedRowCard imgUrl="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" special="Burgers" head="Pizza Hut" rating="4.2" address="Clement Town, Dehradun"/>
        <FeaturedRowCard imgUrl="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" special="Burgers" head="Pizza Hut" rating="4.2" address="Clement Town, Dehradun"/>
        <FeaturedRowCard imgUrl="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000" special="Burgers" head="Pizza Hut" rating="4.2" address="Clement Town, Dehradun"/>
        </ScrollView>
    </>
    
  )
}

export default FeaturedRow