import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker';
import { Fontisto } from '@expo/vector-icons';
const Departure = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('2023/11/14');
    return (
        <View className="flex justify-center items-center mt-4 mb-4 ">
            <View className="flex-row justify-between w-full ">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 ">
                    <Ionicons name="chevron-back" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <Text className="text-center font-medium text-2xl">Departure Date</Text>
            </View>

            <View className="flex-row gap-3 mt-5">
                <View>
                    <Text className="ml-2 font-semibold">Departure:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2 ">
                        <Fontisto name="date" size={19} color="black" />
                        <View>
                            <Text>{selectedDate}</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <Text className="ml-2 font-semibold">Return:</Text>
                    <View className="flex-row space-x-2 items-center p-4 border border-gray-300 rounded-xl mt-2 mb-2">
                        <View>
                            <Text>{selectedDate}</Text>
                        </View>
                    </View>

                </View>
            </View>


            <DatePicker className="mt-6"
                options={{
                    backgroundColor: 'white',
                    textHeaderColor: 'black',
                    textDefaultColor: 'black',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: 'black',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
                mode="calendar"
                onSelectedChange={date => setSelectedDate(date)}
            />

            <View className="m-4 w-80">
                <TouchableOpacity onPress={() => navigation.navigate('Searchresult')}>
                    <Text className="bg-[#ec441e] font-semibold text-2xl rounded-full p-3 text-center text-white ">Select</Text>
                </TouchableOpacity>
            </View>
            {/* {console.log(selectedDate)} */}

        </View>
    )
}

export default Departure
