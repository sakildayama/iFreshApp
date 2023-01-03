import { StyleSheet, Text, View,Image } from 'react-native'
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
const Category = ({navigation}) => {
  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
    <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
      <Clickable onPress={() =>navigation.navigate('Home')}> 
        <Image style={styles.CartImage} source={icons.leftarrow} />
       </Clickable>
        <Paragraph size={80} style={styles.iFresh_TEXT}>Category</Paragraph>
      </View>
    <ScrollContainer>
      <Card>
          <View style={styles.FRUITS_VEGE_MAIN}>
            <Clickable onPress={() => navigation.navigate('ProductList')} style={styles.FRUITS_VEGE_VIEW}>
              <Image  style={styles.FRUITS_VEGE_IMG} source={icons.healthyfood}  />
              <Paragraph>FRUITS & VEGETABLES</Paragraph>
            </Clickable>
            <Clickable onPress={() => navigation.navigate('ProductList2')} style={styles.FRUITS_VEGE_VIEW}>
              <Image style={styles.FRUITS_VEGE_IMG} source={icons.almonds} />
              <Paragraph>DRY FRUITS</Paragraph>
            </Clickable>
          </View>
        </Card>
    </ScrollContainer>
  </ViewContainer>
  )
}

export default Category

const styles = StyleSheet.create({
    TextImageVIEW: {
        flexDirection: 'row',
        alignItems:"center",
        width:"100%",
        height: 60,
        // borderWidth:1,
        backgroundColor: colors.lime,
      },
      CartImage: {
        height: 20,
        width: 20,
        tintColor: "white",
        marginHorizontal: 10,
      },
      iFresh_TEXT: {
        fontSize: 25,
        color: "white",          
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
        width: 70,
        height: 70,
        tintColor: "green"
      },
})