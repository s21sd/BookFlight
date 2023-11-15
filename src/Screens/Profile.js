import React from 'react'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation = useNavigation();
    return (
        <View className="flex justify-center items-center mt-4 mb-4">
            <View className="flex-row justify-between w-full ">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 ">
                    <Ionicons name="chevron-back" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-center font-medium text-2xl">Personal Info</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 30
            }}>
                <View className="flex-coloum justify-center items-center mt-10">
                    <Image style={{
                        width: wp(14),
                        height: hp(7)
                    }} source={require('../../assets/profile1.webp')} className="rounded-full object-cover" />
                    <Text className="font-bold text-lg">Hello Traveller</Text>
                </View>
                <View className="m-4" style={{ width: wp(90) }}>

                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl m-2 mb-2">
                        <View className="flex-row gap-2">
                            <FontAwesome name="user" size={24} color="black" />
                            <TextInput placeholder="Enter your name here.. " />

                        </View>
                    </View>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl m-2 mb-2">
                        <View className="flex-row gap-2">
                            <FontAwesome name="address-card" size={24} color="black" />
                            <TextInput placeholder="Enter your address.. " />

                        </View>
                    </View>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl m-2 mb-2">
                        <View className="flex-row gap-2">
                            <Fontisto name="passport" size={24} color="black" />
                            <TextInput placeholder="Enter your passport No.. " />

                        </View>
                    </View>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl m-2 mb-2">
                        <View className="flex-row gap-2">
                            <MaterialIcons name="cake" size={24} color="black" />
                            <TextInput placeholder="DOB" />

                        </View>
                    </View>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl m-2 mb-2">
                        <View className="flex-row gap-2">
                            <Entypo name="globe" size={24} color="black" />
                            <TextInput placeholder="Country" />

                        </View>
                    </View>
                    <View className="m-4">
                        <TouchableOpacity>
                            <Text className="bg-[#ec441e] font-semibold text-2xl rounded-full p-3 text-center text-white ">Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text className="text-2xl rounded-full p-3 text-center text-[#ec441e]">Skip</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Profile