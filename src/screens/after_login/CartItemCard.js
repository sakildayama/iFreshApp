import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import icons from '../../constants/icons';
import colors from '../../constants/colors';
import Paragraph from '../../components/UI/Paragraph'
import { SelectList } from 'react-native-dropdown-select-list'

const CartItemCard = ({ item }) => {
    const [selected, setSelected] =useState("");
    const [cartQuantity, setCartQuantity] = useState(0)
    const [wish, setWish] = useState(false)

    const onIncrementQuantity = () => {
        return setCartQuantity(cartQuantity => cartQuantity + 1)
    }
    const onDecrementQuantity = () => {
        return cartQuantity > 1 ? setCartQuantity(cartQuantity => cartQuantity - 1) : null
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
                        <TouchableOpacity>
                            <Image style={[styles.HEART_IMAGE,]} source={icons.cross} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.naget_posit__Text_View}>
                        <View style={styles.box_text}>
                            <Paragraph>{item?.Quantity}</Paragraph>
                        </View>
                        <View style={styles.box_image}>
                            <TouchableOpacity onPress={onDecrementQuantity}>
                                <Image style={styles.PLUS_MINUS_Image} source={icons.MINUS} />
                            </TouchableOpacity>
                            <Paragraph size={25}>{cartQuantity}</Paragraph>
                            <TouchableOpacity onPress={onIncrementQuantity}>
                                <Image style={styles.PLUS_MINUS_Image} source={icons.PLUS} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.twenty_text_view}>
                        <Paragraph>{item?.Price}</Paragraph>
                    </View>

                    <View style={styles.MoreVariant}>
                        {/* <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={item?.more_variant ? item?.more_variant:[]}
                            save="value"
                        /> */}
                    </View>
                </View>
            </View>
        </View>

    );
};
export default CartItemCard

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
})
