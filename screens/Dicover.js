import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Hotels,
  Attractions,
  Restaurants,
  NotFound,
} from "../assets/imgs";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import Items from "../components/Items";
import { getPlacesData } from "../api";

const Dicover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 mt-7 relative bg-white">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#2e5255] font-bold">Discover</Text>
          <Text className="text-[38px] text-[#527283]">the beauty day </Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyBwDNjd8o29d4jTp0-74EI6vmAWBqe468E",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row justify-between items-center px-8 mt-8">
              <Text className="text-[#2e5255] font-bold text-[25px]">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row justify-center items-center space-x-2">
                <Text className="text-[#9ed6e0] font-bold text-[20px]">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center justify-evenly px-4 mt-8 flex-wrap flex-row ">
            {mainData?.length > 0 ? (
              <>
                <Items
                  key={"101"}
                  imageSrc={
                    "https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg"
                  }
                  title="Nam Dinh"
                  location="VietNam"
                />
                <Items
                  key={"102"}
                  imageSrc={
                    "https://cdn.pixabay.com/photo/2020/06/24/20/41/truebsee-5337646_1280.jpg"
                  }
                  title="Switzerland"
                  location="Switzerland"
                />
              </>
            ) : (
              <>
                <View className="justify-center items-center space-y-8 w-full h-[300px]">
                  <Image source={NotFound} className="h-32 w-32 object-cover" />
                  <Text className="text-[#466c70] font-bold text-2xl">
                    Opss... Not Data Found !!!
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Dicover;
