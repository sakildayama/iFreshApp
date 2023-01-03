import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react';
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

import SelectPicker from 'react-native-form-select-picker';
const options = ["Apple", "Banana", "Orange"];
const Cart = ({navigation}) => {
  const [selected, setSelected] = useState();
  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
    <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
        <Card  style={styles.CART_FILTER_VIEW}>
        <Clickable onPress={() =>navigation.navigate('Home')}> 
          <Image style={styles.CartImage} source={icons.leftarrow} />
         </Clickable>
        <Paragraph size={80} style={styles.Cart_TEXT}>Cart</Paragraph>
        <Image style={styles.CartImage} source={icons.filter} />

  
        </Card>
      </View>
    <ScrollContainer>
      <View style={styles.mainLogo_view}>
      <Image style={styles.CARTLOGOIMAGE} source={icons.CARTLOGOIMAGE} />
      </View>
        <Paragraph size={30} textAlign={"center"} type={"bold"}>Your cart is empty</Paragraph>
      <View style={{alignItems:"center",justifyContent:"center",width:"100%",height:80,}}>
        <Paragraph>You have in your shopping cart let's go buy somthing</Paragraph>
      </View>
      <UiButton txtSize={25}
      onPress={()=>navigation.navigate('Home')}
      text='SHOP NOW'
      backgroundColor={colors.lime}
       style={styles.UiButton}/>
       
    </ScrollContainer>

    <SelectPicker
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

		</SelectPicker>
  </ViewContainer>
  )
}

export default Cart

const styles = StyleSheet.create({
  CART_FILTER_VIEW:{
  //  borderWidth:1,
   flexDirection: 'row',
   alignItems:"center",
   justifyContent:'space-between',
  },
    TextImageVIEW: {
      height: 60,
      width:"100%",
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
        marginRight:200,       
      },
      mainLogo_view:{
        borderWidth:1,
        width:"100%",
        height:350,
        alignItems:"center",
        justifyContent:"center",
      },
      UiButton:{
        width:"50%",
        alignSelf:"center",
      },
      CARTLOGOIMAGE:{
        width:400,
        height:400,
        borderWidth:1,
        resizeMode:"contain"
      },
 })