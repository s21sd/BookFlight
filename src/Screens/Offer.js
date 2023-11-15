import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const Offer = () => {
    const navigation = useNavigation();
    return (

        <View className="flex-coloumn justify-center items-center mt-4 mb-4">
            <View className="flex-row justify-between w-full ">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 ">
                    <Ionicons name="chevron-back" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-center font-medium text-2xl">Offers</Text>
            </View>


            <View className="flex-coloumn justify-center items-center mt-44">
                <AntDesign name="questioncircle" size={hp(20)} color="#ec441e" />
                <Text className="font-bold text-gray-900 mt-3">Sorry! You don't have any Offer.</Text>
            </View>
        </View>
    )
}

export default Offer
