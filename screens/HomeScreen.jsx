import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  //  SearchIcon,
  AdjustmentsIcon,
  MapIcon,
  MagnifyingGlassPlusIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
  sanityClient.fetch(
    `*[_type == 'featured'] | order(_createdAt)
    {
      _id,
       name,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          none
        }
      }, 
      short_description
    }`
  )
  .then((data) => setFeaturedCategory(data))
  .catch((err) => console.log(err.message));
  },[]);
  return (
    <SafeAreaView className="mt-12">
      {/* Header  */}
      <View className="flex-row w-full items-center justify-between px-6">
        <View className="flex-row items-center justify-center space-x-2">
          <TouchableOpacity>
            <MapIcon color="#c2c2c2" fill="#46daf4" size={24} />
          </TouchableOpacity>

          <View className="">
            <Text className="text-xs text-slate-400">Deliver here</Text>
            <View className="flex-row items-center justify-center space-x-1">
              <Text className="text-lg font-bold">Your Current Location</Text>
              <TouchableOpacity>
                <ChevronDownIcon size={12} fill="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <UserIcon size={25} fill="#46daf4" />
      </View>
      <View className="flex-row w-full mb-2 items-center space-x-2 justify-between px-6 mt-2">
        <View className="bg-[#c9c9c9] flex-1 space-x-2 flex-row items-center p-2 rounded-md">
          {/* <SearchIcon /> */}
          <TouchableOpacity>
            <MagnifyingGlassPlusIcon size={22} fill="gray"/>
          </TouchableOpacity>

          <TextInput
            placeholder="What you are craving for?"
            keyboardType="default"
          />
        </View>
        {/* <AdjustmentsIcon /> */}
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon size={24} fill="#46daf4" />
        </TouchableOpacity>
      </View>

      <ScrollView>
      {/* Categories  */}
      <Categories/>

     {

      featuredCategory?.map((category) => 
      <FeaturedRow 
      key={category._id}
      id={category._id}
      head={category.name} 
      description={category.short_description}
      restaurants={category.restaurants}
      />
      )
      }
      </ScrollView>
     
      
    </SafeAreaView>
  );
};

export default HomeScreen;
