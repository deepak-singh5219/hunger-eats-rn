import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="mt-12">
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
      <View className="flex-row w-full items-center space-x-2 justify-between px-6 mt-2">
        <View className="bg-[#c9c9c9] flex-1 space-x-2 flex-row items-center p-2 rounded-md">
          {/* <SearchIcon /> */}
          <TouchableOpacity>
            <MagnifyingGlassPlusIcon size={22} fill="gray" />
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
    </SafeAreaView>
  );
};

export default HomeScreen;
