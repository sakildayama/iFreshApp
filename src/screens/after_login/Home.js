import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
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
const Home = ({navigation}) => {
  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <FocusAwareStatusBar backgroundColor={'#0AB252'} />
        <View style={styles.TextImageVIEW}>
          <TouchableOpacity onPress={() =>navigation.toggleDrawer()}>
            <Image source={icons.menu} style={styles.Image_manu} />
          </TouchableOpacity>
          <Paragraph size={80} style={styles.iFresh_TEXT}>iƑɾҽʂհ</Paragraph>
          <Clickable  onPress={()=>navigation.navigate('Cart')}>
         <Image style={styles.CartImage} source={icons.cart} />
          </Clickable>
        </View>
      <ScrollContainer>
        <View style={styles.location_DeleverTrxt}>
          <Image style={styles.LOCATION_Image} source={icons.location} />
          <Paragraph>Delever to : Merta City / Nagaur</Paragraph>
        </View>
        <Swiper style={{ height: 150, }} autoplay={true} showsButtons={false} autoplayTimeout={3.5} >
          <Image style={styles.Swiper_image} source={icons.refereranfruts} />
          <Image style={styles.Swiper_image} source={icons.fimage} />
          <Image style={styles.Swiper_image} source={icons.freshvegetables} />
        </Swiper>
        <View style={styles.ShopCategory_Text}>
          <Paragraph size={25} textAlign={'center'}>Shop by Category</Paragraph>
        </View>
       
          <View style={styles.FRUITS_VEGE_MAIN}>
            <TouchableOpacity style={styles.FRUITS_VEGE_VIEW} onPress={() => navigation.navigate('ProductList')}>
              <Image style={styles.FRUITS_VEGE_IMG} source={icons.healthyfood} />
              <Paragraph>FRUITS & VEGETABLES</Paragraph>
            </TouchableOpacity>
            <Clickable  onPress={() => navigation.navigate('ProductList2')} style={styles.FRUITS_VEGE_VIEW}>
              <Image style={styles.FRUITS_VEGE_IMG} source={icons.almonds} />
              <Paragraph>DRY FRUITS</Paragraph>
            </Clickable>
          </View>
      
        <Clickable onPress={()=>{navigation.navigate('Refer_Earn')}} style={styles.Image_VIew}>
          <Image style={styles.Image} source={icons.fimagefruits} />

        </Clickable>
        <View style={styles.Image_VIew}>
          <Image style={styles.Image} source={icons.fimage} />
        </View>
        <View style={styles.Image_VIew}>
          <Image style={styles.Image} source={icons.freshvegetables} />
        </View>
        <Card style={styles.FEATURE_PRODUCT_View}>
          <View style={styles.FEATURE_PRODUCT}>
            <Paragraph color='#05fa05' size={20} >Feature Product</Paragraph>
            <TouchableOpacity onPress={()=>{navigation.navigate('FeatureProductView')}} style={styles.VIEWTEXT}>
              <Paragraph color='white' size={20}>View All</Paragraph>
            </TouchableOpacity>
          </View>
          <View style={styles.BoxThree_Container_main}>
            <Clickable onPress={()=>navigation.navigate('ProductDetail')} style={styles.OneBox}>
            <Image style={styles.CHILLI_IMG} source={icons.greenchilli} />
           <Paragraph>Green Chilli (हरी मिर्च)</Paragraph> 
            </Clickable>
            <View style={styles.TwoBox_Main}>
            <Clickable onPress={()=>navigation.navigate('ProductDetail')} style={styles.TwoBox_Onion_Onion}>
            <Image style={styles.Onino_IMG} source={icons.ONIONGROUP} />
           <Paragraph>A Onion (प्याज)</Paragraph> 
            </Clickable>
            <Clickable onPress={()=>navigation.navigate('ProductDetail')} style={styles.TwoBox_Onion_Onion}>
            <Image style={styles.Onino_IMG} source={icons.Springonions} />
           <Paragraph>Spring Onion (हरा प्याज़ )</Paragraph> 
            </Clickable>
            </View>
          </View>
        </Card>
      </ScrollContainer>
    </ViewContainer>
  )
}

export default Home

const styles = StyleSheet.create({
  TextImageVIEW: {
    flexDirection: 'row',
    width: "100%",
    height: 60,
    // borderWidth:1,
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: colors.lime,
  },
  Image_manu:{
    height: 40,
    width: 40,
    marginHorizontal:10,
    tintColor:"white",
  },
  CartImage: {
    height: 40,
    width: 40,
    tintColor: "white",
    marginHorizontal: 10,
    tabBarBadge:3,
  },
  iFresh_TEXT: {
    fontSize: 25,
    marginRight:150,
    color: "white",                 // firoz
    fontWeight: 'bold',         // firoz
  },
  location_DeleverTrxt: {
    flexDirection: 'row',
    width: "100%",
    height: 50,
    backgroundColor: colors.lavender,
  },
  LOCATION_Image: {
    width: 30,
    height: 30,
    tintColor: "grey",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Swiper_image: {
    width:"100%",
    height: 140,
    resizeMode:"contain"
  },
  ShopCategory_Text: {
    backgroundColor: colors.WHITE,
    elevation: 3,
    height: 40,
  },
  FRUITS_VEGE_MAIN: {
    flexDirection: "row",
    width: "100%",
    //  marginVertical:10,

  },
  BOXTHREE:{
    flexDirection:"row",
  },
  FRUITS_VEGE_VIEW: {
    borderWidth: 5,
    borderColor: 'white',
    elevation: 5,
    width: "48%",
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.WHITE,
    marginHorizontal: 5,
  },
  FRUITS_VEGE_IMG: {
    width: 60,
    height: 60,
    tintColor: "green"
  },
  Image_VIew: {
    // borderWidth: 1,
    width:"100%" ,
       height: 120,
    // marginVertical: 4,
  },
  Image: {
    width:"100%",
    height: "100%",
    resizeMode:"contain"
  },
  FEATURE_PRODUCT_View: {
    // borderWidth: 1,
    height: 380,
    elevation: 1,
  },
  FEATURE_PRODUCT: {
    //  borderWidth:1,
    width: "90%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  VIEWTEXT: {
    // borderWidth:1,
    padding: 8,
    backgroundColor: colors.lime,
    borderRadius: 5,

  },
  BoxThree_Container_main:{
    // borderWidth:1,
    width:"100%",
    height:260,
    flexDirection:"row",
 

  },
  OneBox:{
    // borderWidth:1,
    width:"50%",
    height:260,
    alignItems:"center",
    elevation:1,
    borderColor:"white",
  },
  TwoBox_Main:{
    // borderWidth:1,
    borderColor:"white",
    width:"50%",
    height:260,
    elevation:0.5,

  },
  TwoBox_Onion_Onion:{
    // borderWidth:1,
    width:"100%",
    height:130,
    alignItems:"center",
    justifyContent:"center",
    elevation:0.5,
    borderColor:"white",
  },
  Onino_IMG:{
    width: 70,
    height:70,
    resizeMode:"contain",
  },
  CHILLI_IMG: {
    width: 150,
    height: 150,
    resizeMode:"contain",
  },
})
