import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const Drwaer = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-row h-full ">
            <View className="bg-gray-200 w-40 h-auto rounded-xl"></View>
            <View className="flex-coloum justify-end items-end mt-3 mr-5 mb-4">
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View className="mr-28 mb-2">
                        <FontAwesome name="close" size={28} color="black" />
                    </View>
                </TouchableOpacity>
                <View className="flex-row  gap-2 justify-end items-end m-10 ">
                    <Image style={{
                        width: wp(14),
                        height: hp(7)
                    }} source={require('../../assets/profile1.webp')} className="rounded-full object-cover" />
                    <View>
                        <Text className="text-lg text-gray-500">Hello</Text>
                        <Text className="font-bold text-lg">Sunny</Text>
                    </View>
                </View>
                <View className="flex-row border border-gray-300 m-3 w-36  ">
                </View>
                <View className="flex-coloum mr-10 space-y-3">
                    <View className="flex-row justify-center items-center gap-2">
                        <FontAwesome name="list-alt" size={24} color="black" />
                        <Text>My Bookings</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2">
                        <FontAwesome5 name="ticket-alt" size={24} color="black" />
                        <Text>Boarding Pass</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-10">
                        <MaterialIcons name="support-agent" size={26} color="black" />
                        <Text>Support</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-10">

                        <MaterialIcons name="star-rate" size={26} color="black" />
                        <Text>Rate Us</Text>
                    </View>
                </View>
                <View className="flex-row border border-gray-300 m-5 w-36  ">
                </View>
                <View className="flex-coloum mr-10 space-y-3">
                    <View className="flex-row justify-center items-center gap-2 mr-14">
                        <FontAwesome name="plane" size={28} color="black" />
                        <Text>Flight</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-14">
                        <FontAwesome5 name="hotel" size={24} color="black" />
                        <Text>Hotel</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-16">
                        <FontAwesome5 name="bus" size={26} color="black" />
                        <Text>Bus</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-16">

                        <MaterialIcons name="tour" size={26} color="black" />
                        <Text>Tour</Text>
                    </View>
                    <View className="flex-row justify-center items-center gap-2 mr-12">

                        <FontAwesome name="bank" size={26} color="black" />
                        <Text>Loan</Text>
                    </View>
                    <Text className="text-gray-400">App Version 1.0.1</Text>
                </View>
            </View>
        </View>
    )
}

export default Drwaer
