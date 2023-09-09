import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { HeroImage } from "../assets/imgs";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* the firts section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#5eb0ba] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>

        {/* the second section */}
      </View>
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#514f5a] text-[42px]">
          Enjoin the trip with{" "}
        </Text>
        <Text className="text-[#5eb0ba] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#514f5a] text-base">
          Lorem ipsum dolor sit amet consecterur adipisicing elit. Deleniti odio
          quis nostrum
        </Text>
      </View>
      {/* the cicrle section */}
      <View className=" w-[400px] h-[400px] text-[#5eb0ba] rounded-full absolute   bottom-36 -right-36"></View>
      <View className=" w-[400px] h-[400px] text-[#c66e49] rounded-full absolute  -bottom-28 -left-36"></View>
      {/* Image section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-[100%] h-[100%] object-cover"
        />
      </View>
      {/* Button section */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute h-24 w-24 bottom-20 bg-[#5eb0ba] rounded-full ml-10 items-center justify-center"
      >
        <Animatable.View
          animation={"pulse"}
          easing="ease-in-out"
          iterationCount={"infinite"}
          className="w-20 h-20 bg-[#18aebd] rounded-full justify-center items-center"
        >
          <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
