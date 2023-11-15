import React, { useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from 'react-datetime-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import OfferSlider from './OfferSlider';
import { useNavigation } from '@react-navigation/native';
const Destiform = () => {
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState(2);
    return (

        <View className="flex-coloum bg-[#ffffff] rounded-sm mx-6 p-2 shadow-2xl mt-4">

            <Text className="ml-2 font-semibold text-gray-400">From:</Text>
            <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2">
                <FontAwesome5 name="plane-departure" size={24} color="black" />
                <View>
                    <TextInput placeholder="Enter Pick Up Loaction" />

                </View>
            </View>

            <Text className="ml-2 font-semibold text-gray-400">To:</Text>
            <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2">
                <FontAwesome5 name="plane-arrival" size={24} color="black" />
                <View>
                    <TextInput placeholder="Enter Destination Loaction" />

                </View>
            </View>

            <View className="flex-row gap-1">
                <View>
                    <Text className="ml-2 font-semibold text-gray-400">Departure:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2 ">
                        <Fontisto name="date" size={19} color="black" />
                        <View>
                            <Text>11/12/2023</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <Text className="ml-2 font-semibold text-gray-400">Return:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2">
                        <View>
                            <Text>+Add Return Date</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View className="flex-row gap-1">
                <View>
                    <Text className="ml-2 font-semibold text-gray-400">Traveller:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2 ">
                        <View>
                            <Text className="mx-8">1 Adult</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <Text className="ml-2 font-semibold text-gray-400">Class:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2">
                        <View>
                            <Text className="mx-6">Economy</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View className="mt-2">
                <TouchableOpacity onPress={() => navigation.navigate('Departure')}>
                    <Text className="bg-[#ec441e] font-semibold text-2xl rounded-full p-3 text-center text-white ">Search</Text>
                </TouchableOpacity>
            </View>
            <OfferSlider />



        </View>
    )
}

export default Destiform
