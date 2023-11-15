import React from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Destiform from './Destiform';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Booking from './Booking';
const Home = () => {
  const navigation = useNavigation();
  const moveToNext = (name) => {
    navigation.navigate(name);
  }
  return (
    <View className="flex-1 bg-[#f9fbfa]">
      <StatusBar className='light' />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-5"
      >

        <View className="mx-4 flex-row justify-around items-center mb-2">
          <View className="flex-row justify-around items-center">
            <Text style={{ fontSize: hp(4) }} className=" flex-1 items-center justify-center font-bold text-black text-6xl">Book Flight</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drwaer')}>
              <AntDesign className="flex-1 items-end" name="bars" size={hp(4)} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center bg-[#ffffff] rounded-full mx-10 p-1 shadow-2xl">
          <Text style={{ fontSize: hp(2.3) }} className="bg-[#ec441e] text-white p-1 rounded-full">One Way</Text>
          <Text style={{ fontSize: hp(2.3) }} className="text-gray-500 p-1">Round</Text>
          <Text style={{ fontSize: hp(2.3) }} className="p-1 text-gray-500">Multicity</Text>
        </View>
        <Destiform />
      </ScrollView>

      <View className="fixed">
        {/* {For the bottom navbar} */}
        <View className="flex-row justify-between items-center m-2 p-2 bg-[#ec441e] rounded-2xl">
          <TouchableOpacity className="flex justify-center items-center " onPress={() => moveToNext('Home')}>
            <Entypo name="home" size={24} color="white" />
            <Text className="text-white">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex justify-center items-center" onPress={() => moveToNext('Booking')}>
            <FontAwesome name="list-alt" size={24} color="white" />
            <Text className="text-white">Booking</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex justify-center items-center " onPress={() => moveToNext('Offer')}>
            <MaterialIcons name="celebration" size={24} color="white" />
            <Text className="text-white">Offer</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex justify-center items-center " onPress={() => moveToNext('Inbox')}>
            <MaterialIcons name="email" size={24} color="white" />
            <Text className="text-white">Inbox</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex justify-center items-center " onPress={() => moveToNext('Profile')}>
            <Feather name="user" size={24} color="white" />
            <Text className="text-white">Profile</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}

export default Home
