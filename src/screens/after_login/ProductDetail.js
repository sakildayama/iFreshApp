import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import icons from '../../constants/icons'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import Card from '../../components/UI/Card'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import Swiper from 'react-native-swiper';
import Clickable from '../../components/HOC/Clickable'
const ProductDetail = ({ navigation }) => {
    return (
        <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
            <FocusAwareStatusBar backgroundColor={'#0AB252'} />
            <View style={styles.TextImageVIEW}>
                <Clickable onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.CartImage} source={icons.leftarrow} />
                </Clickable>
                <Paragraph size={25} style={styles.iFresh_TEXT}>ProductDetail</Paragraph>
                <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                <Image style={styles.CartImage} source={icons.cart} />
                </TouchableOpacity>

            </View>
            <ScrollContainer>
                <View style={styles.ONION_VIEW}>
                    <Image style={styles.Onion_IMG} source={icons.Onion} />
                </View>
                <View style={styles.MainView_SSS}>
                    <View style={styles.MainView_SSS_view2} >
                        <Image style={styles.HEART_SHARE_IMG} source={icons.HEART} />
                        <Paragraph>Save</Paragraph>
                    </View>
                    <View style={styles.MainView_SSS_view2} >
                        <Image style={styles.HEART_SHARE_IMG} source={icons.share} />
                        <Paragraph>share</Paragraph>
                    </View>
                    <View style={styles.MainView_SSS_view3} >
                        <Image style={styles.HEART_SHARE_IMG} source={icons.filter} />
                        <Paragraph>Similar Product</Paragraph>
                    </View>
                </View>
                    <View style={{marginLeft:8,}}>
                        <Paragraph>A Onion (प्याज) </Paragraph>
                    </View>
            </ScrollContainer>
        </ViewContainer>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    TextImageVIEW: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: 60,
        // borderWidth:1,
        backgroundColor: colors.lime,
    },
    CartImage: {
        height: 20,
        width: 20,
        tintColor: "white",
        // marginHorizontal: 10,
    },
    search: {
        height: 20,
        width: 20,
        tintColor: "white",
        marginLeft: 40,
    },
    iFresh_TEXT: {
        color: "white",
        marginRight: 60,
    },
    Favourite_Text_main: {
        justifyContent: "center",
        alignItems: "center",
        height: 700,
    },
    ONION_VIEW: {
        // borderWidth: 1,
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        elevation:1,
    },
    Onion_IMG: {
        width: 180,
        height: 180,
        resizeMode: "contain"
    },
    HEART_SHARE_IMG: {
        width: 20,
         height: 20,
         marginTop:13,
         marginRight:8,
         marginLeft:5,

    },
    MainView_SSS: {
        // borderWidth:1,
        width: "100%",
        height: 50,
        flexDirection: "row",
    },
    MainView_SSS_view2:  {
        //  borderWidth: 1,
          height: 50,
           width: "28%", 
           flexDirection:'row',
        },
        MainView_SSS_view3:{
            // borderWidth: 1,
            height: 50,
             width: "44%", 
             flexDirection:'row',
        },
})
