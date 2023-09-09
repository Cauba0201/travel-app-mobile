import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Items = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 px-3 space-y-2 py-2 shadow-lg bg-white w-[175px] my-2 ">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#2e5255] text-[15px] font-bold">
          {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
        </Text>
      <View className="flex-row space-x-2">
        <FontAwesome name="map-marker" size={20} color="#A0C4C7" />
        <Text className="text-[#2e5255] text-[18px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 14)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Items;
