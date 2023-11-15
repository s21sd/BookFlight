import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const OfferSlider = () => {
    return (
        <View>
            <View className="flex-row justify-between items-center m-3">
                <Text style={{ fontSize: hp(2.5) }} className="font-bold ">Hot Offers</Text>
                <Text className="font-medium text-[#ec441e]">See all</Text>
            </View>
            <View style={styles.OfferSlider}>

                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/slider1.png')} style={styles.image} />
                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../../assets/slider2.jpg')} style={styles.image} />
                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../../assets/slider4.jpg')} style={styles.image} />
                    </View>

                </Swiper>

            </View>
        </View>
    )
}

export default OfferSlider

const styles = StyleSheet.create({
    OfferSlider: {
        width: "100%",
        height: 100,
        paddingHorizontal: 10,
        marginVertical: 10,

    },
    slide: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    }
    ,
    image: {
        padding: 5,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        objectFit: 'cover'
    }
})