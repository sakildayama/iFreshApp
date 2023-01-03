import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import icons from '../../constants/icons'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickable'
import ScrollContainer from '../../components/HOC/ScrollContainer'
// import { ProductListData } from '../../constants/datas'
import ProductCard from '../../components/UI/ProductCard'
import { ProductCategories, FlatListData } from '../../constants/datas'
const ProductList = ({ navigation }) => {
  const [productListData, setProductListData] = useState(FlatListData)
  const [activeCategory, setActiveCategory] = useState("All Category")

  const changecategory = (category) => {
    if (category == 'All Category') {
      setProductListData(FlatListData);
    } else if (category == 'Vegetables') {
      let filter_Product = FlatListData.filter((data) => {
        return data.category == category
      })
      setProductListData(filter_Product);
    } else if (category == 'Fruits') {
      let filter_Product = FlatListData.filter((data) => {
        return data.category == category
      })
      setProductListData(filter_Product);
    } else if (category == 'Exotic') {
      let filter_Product = FlatListData.filter((data) => {
        return data.category == category
      })
      setProductListData(filter_Product);
    }
  }

  const ProductBox = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => changecategory(item.title)} style={styles.main_flatview}>
        <View style={styles.flat_second_view}>
          <Image style={styles.All_CATAGORY_BOX} source={item.Image} />
        </View>
        <Paragraph textAlign='center' style={{ marginTop: 3 }}>{item.title}</Paragraph>
      </TouchableOpacity>
    )
  }

  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
        <Clickable onPress={() => navigation.goBack()}>
          <Image style={styles.CartImage} source={icons.leftarrow} />
        </Clickable>
        <Paragraph size={23} style={{ color: "white", }}>ProductList</Paragraph>
        <Image style={styles.CartImage} source={icons.search} />
        <Image style={styles.CartImage} source={icons.filter} />
        <Image style={styles.CartImage} source={icons.cart} />
      </View>
      <ScrollContainer>
        <FlatList
          data={ProductCategories}
          renderItem={ProductBox}
          horizontal
          contentContainerStyle={{ marginTop: 10 }}
        />
      </ScrollContainer>
      <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
        <FocusAwareStatusBar backgroundColor={'#0AB252'} />
        <FlatList
          data={productListData}
          renderItem={({ item, index }) => <ProductCard item={item} key={index} />}
          contentContainerStyle={{ marginTop: 10, width: "100%", padding: 5 }}
        />
      </ViewContainer>
    </ViewContainer>
  )
}

export default ProductList

const styles = StyleSheet.create({
  TextImageVIEW: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    width: "100%",
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
  main_flatview: {
    marginLeft: 10,
  },
  flat_second_view: {
    borderWidth: 1,
    borderColor: colors.lime,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    borderRadius: 5,
  },
  // iFresh_TEXT: {
  //   // fontSize: 25,
  //   color: "white",
  // },
  All_CATAGORY_BOX: {
    borderWidth: 1,
    height: 40,
    width: 40,
    tintColor: colors.lime
  },

})