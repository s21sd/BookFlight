import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Data } from './SearchData/Data';
const Booking = () => {
    const navigation = useNavigation();
    return (

        <View className="flex justify-center items-center mt-4 mb-4">
            <View className="flex-row justify-between w-full ">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 ">
                    <Ionicons name="chevron-back" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-center font-medium text-2xl">My Bookings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6">

                <View className="w-80 rounded-xl bg-white mt-10">
                    <View className="flex-row justify-center items-center">

                        <Image source={require('../../assets/indigo.png')} style={{
                            width: 100,
                            height: 100
                        }} />
                    </View>
                    <View className="flex-row border border-gray-300 m-5  ">

                    </View>
                    <View>

                        <View>

                            <View className="flex-row justify-between items-center">
                                <Text className="font-bold tracking-widest text-2xl ml-3">5.50</Text>
                                {/* <View className="flex-row h-1 bg-gray-300"></View> */}

                                <FontAwesome5 name="plane" size={30} color="#ec441e" />
                                <Text className="font-bold  tracking-widest text-2xl mr-3" >7.30</Text>
                            </View>

                            <View className="flex-row justify-between items-center ml-2 mr-2">
                                <Text className="font-bold mt-2 ml-2 text-gray-600">DEL</Text>
                                <Text className="font-bold mt-2 mr-2 text-gray-600">CCU</Text>
                            </View>

                            <View className="flex-row justify-between items-center mt-2">
                                <View className="w-36 text-justify m-2">
                                    <Text className="ml-1 text-gray-400">Indira Gandhi Internation Airport</Text>
                                </View>
                                <View className="w-40 text-justify m-2">
                                    <Text className="mr-2 text-gray-400">Subhash Chandra Bose Internation Airport</Text>
                                </View>
                            </View>

                            <View className="flex-row gap-1 justify-around">
                                <View>
                                    <Text className="ml-2 font-semibold text-gray-400">Date:</Text>
                                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2 ">
                                        <Fontisto name="date" size={19} color="black" />
                                        <View>
                                            <Text>11/12/2023</Text>
                                        </View>
                                    </View>

                                </View>
                                <View>
                                    <Text className="ml-2 font-semibold text-gray-400">Return:</Text>
                                    <View className="flex-row space-x-2 items-center p-3 border border-gray-300 rounded-xl mt-2 mb-2">
                                        <Ionicons name="time-outline" size={24} color="black" />
                                        <View>
                                            <Text>09.30</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View className="flex-row border border-gray-300 m-5">

                            </View>
                            <View className="flex-row justify-between items-center m-2">
                                <View>
                                    <Text className="text-gray-400">Flight</Text>
                                    <Text className="font-bold">IN 230</Text>
                                </View>
                                <View>
                                    <Text className="text-gray-400">Gate</Text>
                                    <Text className="font-bold">22</Text>
                                </View>
                                <View>
                                    <Text className="text-gray-400">Seat</Text>
                                    <Text className="font-bold">2B</Text>
                                </View>
                                <View>
                                    <Text className="text-gray-400">class</Text>
                                    <Text className="font-bold">Economy</Text>
                                </View>
                            </View>
                            <View className="m-4 w-auto">
                                <TouchableOpacity>
                                    <Text className="bg-[#ec441e] font-semibold text-2xl rounded-lg p-3 text-center text-white ">Modify</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>



                </View>
            </ScrollView>
        </View>
    )
}

export default Booking
