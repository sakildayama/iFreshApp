import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native'
import React, { useState } from 'react';
import icons from '../../constants/icons';
import colors from '../../constants/colors';
import Paragraph from './Paragraph';
import { SelectList } from 'react-native-dropdown-select-list'
import {productListData} from '../../constants/datas'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
const ProuductCard = ({ item }) => {
    const [selected, setSelected] = useState('');
    const [cartQuantity, setCartQuantity] = useState(0)
    const [wish, setWish] = useState(false);

    const [open, setopen] = useState(false);
    const [value, setvalue] = useState(null);
    // const onIncrementQuantity = () => {
    //     return setCartQuantity(cartQuantity => cartQuantity + 1)
    // }
    // const onDecrementQuantity = () => {
    //     return cartQuantity > 1 ? setCartQuantity(cartQuantity => cartQuantity - 1) : null
    // }


    const addIncrementToCart = async (productId) => {
        let CartProducts = await AsyncStorage.getItem('Cart');  //async storage m se cart ke product nikalne k liye
        console.warn("CartProducts",CartProducts);
        if (CartProducts !=null) { // agr cart m proucts pehle se h to hum jo product ab add krwana chahte h wo mojood h to uski quantity increment krenge, nhi to jo products h unke saath new wala push krdenge
            let parsedCartProducts = JSON.parse(CartProducts);
            console.warn(parsedCartProducts);
            let AlreadyExist = parsedCartProducts.find(element => element.id == productId);
            if (AlreadyExist) {
                let objIndex = parsedCartProducts.findIndex((obj => obj.id == productId));
                parsedCartProducts[objIndex].Cartquantity = parsedCartProducts[objIndex].Cartquantity + 1;
                console.warn("qqqq", parsedCartProducts[objIndex].Cartquantity);
                setCartQuantity(parsedCartProducts[objIndex].Cartquantity)
                await AsyncStorage.setItem('Cart', JSON.stringify(parsedCartProducts), () => {
                    console.warn("Quantity Incremented...");
                });
            } else {
                let clickedProduct = productListData.find(element => element.id == productId)
                clickedProduct.Cartquantity = 1
                setCartQuantity(clickedProduct.Cartquantity)

                parsedCartProducts.push(clickedProduct)
                console.warn(parsedCartProducts)
                await AsyncStorage.setItem('Cart', JSON.stringify(parsedCartProducts), () => {
                    console.warn("Another Product Added to Cart...");
                });
            }

        } else { // agr cart m ek bhi product nhi h to ye krenge
            console.warn("parsed");
            let clickedProduct = productListData.find(element => element.id == productId)
            clickedProduct.Cartquantity = 1
            setCartQuantity(clickedProduct.Cartquantity)
            let productArray = [];
            productArray.push(clickedProduct);
            console.warn("productArray",productArray);
            await AsyncStorage.setItem('Cart', JSON.stringify(productArray), () => {
                console.warn("First Product Added to Cart...");
            });

        }
    }

    const removeDecrementFromCart = async (productId) => {
        let CartProducts = await AsyncStorage.getItem('Cart');
        if (CartProducts) {
            let parsedCartProducts = JSON.parse(CartProducts);
            let productExist = parsedCartProducts.find(element => element.id == productId);
            console.warn("productExist", productExist);
            if (productExist) {
                let objIndex = parsedCartProducts.findIndex((obj => obj.id == productId));
                if (parsedCartProducts[objIndex].Cartquantity > 1) {
                    parsedCartProducts[objIndex].Cartquantity = parsedCartProducts[objIndex].Cartquantity - 1;

                    await AsyncStorage.setItem('Cart', JSON.stringify(parsedCartProducts), () => {
                        setQuantity(parsedCartProducts[objIndex].Cartquantity)
                        console.warn("Quantity Decremented...");
                    });
                } else {
                    if (objIndex > -1) { // only splice array when item is found
                        parsedCartProducts.splice(objIndex, 1); // 2nd parameter means remove one item only
                    }
                    // console.warn("removedparsedCartProducts",parsedCartProducts);
                    await AsyncStorage.setItem('Cart', JSON.stringify(parsedCartProducts), () => {
                        console.warn("Product Removed...");
                    });
                }
            }
        }


    }

    const addToFavourites = async (productId) => {
        let favouriteProducts = await AsyncStorage.getItem("favourite");
        if (favouriteProducts) {
            let parsedFavProducts = JSON.parse(favouriteProducts);
            let exist = parsedFavProducts.find(ele => ele.id == productId)
            if (!exist) {
                let clickedProduct = productListData.find(ele => ele.id == productId);
                clickedProduct.favourites = true;
                setWish(!wish);
                parsedFavProducts.push(clickedProduct);
                await AsyncStorage.setItem('favourite', JSON.stringify(parsedFavProducts), () => {
                    console.warn(" Added to Favourite...");
                });
            }
        } else {
            let clickedProduct = productListData.find(ele => ele.id == productId);
            clickedProduct.favourites = true;
            setWish(!wish);
            let favArray = [];
            favArray.push(clickedProduct);
            await AsyncStorage.setItem('favourite', JSON.stringify(favArray), () => {
                console.warn("First Prdouct Added to Favourite...");
            });
        }
    }

    const removeFromFavourites = async (productId) => {
        let favouriteProducts = await AsyncStorage.getItem("favourite");
        if (favouriteProducts) {
            let parsedFavProducts = JSON.parse(favouriteProducts);
            let exist = parsedFavProducts.find(ele => ele.id == productId)
            if (exist) {
                let objIndex = parsedFavProducts.findIndex((obj => obj.id == productId));
                setWish(!wish);
                if (objIndex > -1) { // only splice array when item is found
                    parsedFavProducts.splice(objIndex, 1); // 2nd parameter means remove one item only
                }
                await AsyncStorage.setItem('favourite', JSON.stringify(parsedFavProducts), () => {
                    console.warn("Product Removed from Favourite...");
                });
            } else {
                console.warn("Product Not Present in Favourites...");
            }
        } else {
            console.warn("Product Not Present in Favourites....");
        }
    }
    return (
        <View style={styles.main_flatview}>
            <View style={styles.flat_first_box}>
                <View style={styles.first_text_view}>
                    <Paragraph color='green' size={13}>{item?.Quality}</Paragraph>
                </View>
                <View style={styles.first_Image_view}>
                    <Image style={styles.image_carrot} source={item?.Image} />
                </View>
            </View>
            <View style={styles.flat_second_view}>
                <View style={styles.second_Text_view}>
                    <View style={styles.Text_HEART_CARROT}>
                        <Paragraph>{item?.title}</Paragraph>
                        <TouchableOpacity onPress={() => wish ? removeFromFavourites(item?.id) : addToFavourites(item?.id)}>
                            <Image style={[styles.HEART_IMAGE, { tintColor: wish ? colors.lime : null }]} source={wish ? icons.heartone : icons.HEART} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.naget_posit__Text_View}>
                        <View style={styles.box_text}>
                            <Paragraph>{item?.Quantity}</Paragraph>
                        </View>
                        <View style={styles.box_image}>
                            <TouchableOpacity onPress={() => removeDecrementFromCart(item?.id)}>
                                <Image style={styles.PLUS_MINUS_Image} source={icons.MINUS} />
                            </TouchableOpacity>
                            <Paragraph size={25}>{cartQuantity}</Paragraph>
                            <TouchableOpacity onPress={() => addIncrementToCart(item?.id)}>
                                <Image style={styles.PLUS_MINUS_Image} source={icons.PLUS} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.twenty_text_view}>
                        <Paragraph>{item?.Price}</Paragraph>
                    </View>

                    <View style={styles.MoreVariant}>
                    {item.more_variant ? 
                        <Collapse>
                    
                            <CollapseHeader>
                                <View style={{borderWidth:0.5,}}>
                                    <Paragraph  color='green'>MoreVariant</Paragraph>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{width:"70%",height:60,borderColor:'white',borderWidth:0.2,elevation:7,backgroundColor:colors.WHITE}}>
                            <Paragraph textAlign='center' color='green'>MoreVariant</Paragraph>
                            
                                <Text>{item?.more_variant[0].value}</Text>
                                <Text>{item?.more_variant[1].value}</Text>
                            </CollapseBody>
                        </Collapse>
                         :''}
                        {/* <SelectList

                            searchPlaceholder="More Variants"
                            placeholder='More Variants'
                            search={false}
                            // maxHeight={100}
                            boxStyles={{ paddingTop: 1, paddingBottom: 1, width: "100%", borderColor: "#0AB252", backgroundColor: "white" }}
                            inputStyles={{ width: '100%', fontSize: 13, color: "#0AB252" }}
                            dropdownStyles={{ backgroundColor: "white", borderColor: "#0AB252", width: "100%" }}
                            dropdownTextStyles={{ color: "black", fontSize: 10 }}
                            setSelected={(val) => setSelected(val)}
                            data={item?.more_variants ? item?.more_variants : []}
                            save="value"
                        /> */}
                    </View>
                </View>
            </View>
        </View>

    );
};
export default ProuductCard

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
        flexGrow: 1,  /// firoj
        height: 20,
        width: 20,
        tintColor: "white",
        marginHorizontal: 10,
    },
    main_flatview: {
        borderWidth: 1,
        width: "100%",
        flexDirection: 'row',
        height: 150,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 6,
        elevation: 2,
        borderColor: "white",
    },

    flat_first_box: {
        width: "30%",
        height: "100%",
        // borderWidth:1,
    },
    first_text_view: {
        //   borderWidth:1,        
        width: "100%",
        height: "20%",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    first_Image_view: {
        // borderWidth:1,
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        // padding:10,

    },
    image_carrot: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    flat_second_view: {
        // flex:0.5,
        // borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 5,
        width: "70%",
        height: "100%",

    },
    second_Text_view: {
        width: "100%",
        height: 30,
        // borderWidth: 1,
    },
    Text_HEART_CARROT: {
        width: "100%",
        height: 30,
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    HEART_IMAGE: {
        width: 25,
        height: 25,
        marginRight: 12,
        marginTop: 4,
        tintColor: "gray"
    },
    naget_posit__Text_View: {
        width: "100%",
        height: 36,
        // borderWidth: 1,
        flexDirection: "row",
    },
    box_text: {
        width: "50%",
        height: 30,
        // borderWidth: 1,
    },
    box_image: {
        width: "50%",
        height: 30,
        // borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 5,
    },
    PLUS_MINUS_Image: {
        width: 30,
        height: 30,
        marginLeft: 7,
    },
    twenty_text_view: {
        //  borderWidth:1,
        width: "100%",
        //  height:20,
    },
    MoreVariant:{
// borderWidth:1,
paddingLeft:5,
borderRadius:5,
borderColor:"green",
    },
})
