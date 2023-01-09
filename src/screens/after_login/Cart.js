import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import icons from '../../constants/icons'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import Card from '../../components/UI/Card'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import Swiper from 'react-native-swiper';
import Clickable from '../../components/HOC/Clickable'
import UiButton from '../../components/UI/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItemCard from './CartItemCard'
const Cart = ({ navigation }) => {

  const [productListData, setProductListData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Category');

  const filter = () => {
    Alert.alert(
      "product list are empty",
      "shop vegetable and sadf fruits",
      [
        { text: 'ok', onPress: () => console.log('ok pressed') }
      ]
    );
  }
  const getCartProducts = async () => {
    let CartProducts = await AsyncStorage.getItem('Cart');
    console.warn(CartProducts);
    setProductListData(JSON.parse(CartProducts))
  }
  useEffect(() => {
    getCartProducts();
  }, [])
  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
        <Card style={styles.CART_FILTER_VIEW}>
          <Clickable onPress={() => navigation.navigate('Home')}>
            <Image style={styles.CartImage} source={icons.leftarrow} />
          </Clickable>
          <Paragraph size={80} style={styles.Cart_TEXT}>Cart</Paragraph>
          <Clickable onPress={filter}>
            <Image style={styles.CartImage} source={icons.filter} />
          </Clickable>

        </Card>
      </View>

      {

        productListData.length == 0 ? (
          <>
            <View style={styles.mainLogo_view}>
              <Image style={styles.CARTLOGOIMAGE} source={icons.CARTLOGOIMAGE} />
            </View>
            <Paragraph size={30} textAlign={"center"} type={"bold"}>Your cart is empty</Paragraph>
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: 80, }}>
              <Paragraph>You have in your shopping cart let's go buy somthing</Paragraph>
            </View>
            <UiButton txtSize={25}
              onPress={() => navigation.navigate('Home')}
              text='SHOP NOW'
              backgroundColor={colors.lime}
              style={styles.UiButton} />
          </>
        ) : (
          <FlatList
            contentContainerStyle={{}}
            data={productListData}
            renderItem={({ item, index }) => <CartItemCard item={item} key={index} />}
          />
        )
      }

    </ViewContainer>
  )
}

export default Cart

const styles = StyleSheet.create({
  CART_FILTER_VIEW: {
    //  borderWidth:1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  TextImageVIEW: {
    height: 60,
    width: "100%",
    backgroundColor: colors.lime,
  },
  CartImage: {
    height: 25,
    width: 30,
    tintColor: "white",
    // marginHorizontal: 10,
  },
  Cart_TEXT: {
    fontSize: 25,
    color: "white",
    marginRight: 200,
  },
  mainLogo_view: {
    // borderWidth: 1,
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  UiButton: {
    width: "50%",
    alignSelf: "center",
  },
  CARTLOGOIMAGE: {
    width: 400,
    height: 400,
    borderWidth: 1,
    resizeMode: "contain"
  },
})












// import SelectPicker from 'react-native-form-select-picker';
// const options = ["Apple", "Banana", "Orange"];

// const [selected, setSelected] = useState();

{/* <SelectPicker
        onValueChange={(value) => {
          // Do anything you want with the value. 
          // For example, save in state.
          setSelected(value);
        }}
        selected={selected}
      >

        {Object.values(options).map((val, index) => (
          <SelectPicker.Item label={val} value={val} key={index} />
        ))}

      </SelectPicker> */}