import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Data } from './SearchData/Data';
const imgUrl = 'https://hindubabynames.info/wp-content/themes/hbn_download/download/airlines-companies/indigo-logo.png'
export const Searchresult = () => {
    const navigation = useNavigation();
    return (
        <View className="flex justify-center items-center mt-4 mb-4 ">
            <View className="flex-row justify-between w-full ">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 ">
                    <Ionicons name="chevron-back" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-center font-medium text-2xl">Search Result</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-5"
            >

                {
                    Data.map((data, index
                    ) => {
                        return (

                            <View key={index} className="w-80 rounded-xl bg-white">
                                <View className="flex-row justify-between items-center m-2 p-2">
                                    <View className="flex-row justify-center items-center">
                                        <Image source={require('../../assets/indigo.png')} style={{
                                            width: 70,
                                            height: 70,
                                        }} />
                                        <Text className="font-bold">{data.code}</Text>
                                    </View>
                                    <Text className="font-semibold">{data.time}</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="font-sold text-2xl ml-3">{data.artime}</Text>
                                    {/* <View className="flex-row h-1 bg-gray-300"></View> */}
                                    <FontAwesome5 name="plane" size={24} color="black" />
                                    <Text className="font-sold text-2xl mr-3" >{data.drtime}</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="font-bold mt-2 ml-2 text-gray-600">{data.ardest}</Text>
                                    <Text className="font-bold mt-2 mr-2 text-gray-600">{data.drdest}</Text>
                                </View>
                                <View className="flex-row h-1 bg-gray-300 mt-5">

                                </View>
                                <View className="flex-row justify-between items-center">
                                    <View className="flex-row justify-center items-center mt-2 ml-2">
                                        <MaterialCommunityIcons name="sofa-single-outline" size={24} color="black" />
                                        <Text className="font-bold ml-1 text-gray-600">{data.class}</Text>
                                    </View>
                                    <Text className="font-bold mt-2 mr-2 text-gray-600">From: {data.price}</Text>
                                </View>
                                <View className="m-4 w-auto">
                                    <TouchableOpacity>
                                        <Text className="bg-[#ec441e] font-semibold text-2xl rounded-full p-3 text-center text-white ">Select</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView >
        </View >
    )
}
