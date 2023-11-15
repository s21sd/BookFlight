import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import {useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 2500);
    }, [])
    return (
        <View className="flex-1 relative">
            <StatusBar className='dark' />
            <Image className="absolute w-full h-full" source={require('../../assets/home1.png')} />
        </View>
    )
}

export default Welcome

