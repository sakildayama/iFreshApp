import { StyleSheet, Text, View, Image, FlatList, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import icons from '../../constants/icons'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import Card from '../../components/UI/Card'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import Swiper from 'react-native-swiper';
import Clickable from '../../components/HOC/Clickable'
import FavouriteCard from './FavouriteCard'
const Favourite = ({ navigation }) => {

  const [productListData , setProductListData] = useState([])

  const getFavProducts = async () => {
    let FavProducts = await AsyncStorage.getItem('favourite')
    setProductListData(JSON.parse(FavProducts))
  }
  useEffect(()=>{
    getFavProducts();
    console.log('==>',productListData);
  },[])

  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
        <Clickable onPress={() => navigation.navigate('Home')}>
          <Image style={styles.CartImage} source={icons.leftarrow} />
        </Clickable>
        <Paragraph size={80} style={styles.iFresh_TEXT}>Favourite</Paragraph>
        <Image style={styles.search} source={icons.search} />
        <Image style={styles.CartImage} source={icons.filter} />
      </View>

       {
        productListData === null ? (
     <>
      <View style={styles.Favourite_Text_main}>
        <Paragraph size={25} color={'#0AB252'}>No Favourite Found</Paragraph>
      </View>
      </>
        ) :(
      <FlatList     
      contentContainerStyle ={{}}
      data={productListData}
      renderItem={({item , index }) => <FavouriteCard item = {item} key = {index} />}
        />
        )
       }
    </ViewContainer>
  )
}

export default Favourite

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
    fontSize: 25,
    color: "white",
    marginRight: 50,
  },
  Favourite_Text_main: {
    justifyContent: "center",
    alignItems: "center",
    height: 700,
  },
})