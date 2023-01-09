import React from 'react'
import { CardStyleInterpolators, createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    // headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
            initialRouteName="DrawerNavigator"
        >
            <Screen name='DrawerNavigator'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../navigation/DrawerNavigator').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }}
            />
            <Screen name='ProductList'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/ProductList').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }}
            />
            <Screen name='Refer_Earn'
                getComponent={() => require('../screens/after_login/Refer_Earn').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />

            <Screen name='ProuductCard'
                getComponent={() => require('../components/UI/ProductCard').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }}
            />

            <Screen name='ProductList2'
                getComponent={() => require('../screens/after_login/ProductList2').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }}
            />
            <Screen name="FeatureProductView"
                getComponent={() => require('../screens/after_login/FeatureProductView').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }}
            />
            <Screen name="ProductDetail"
                getComponent={() => require('../screens/after_login/ProductDetail').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />

            <Screen name="FavouriteCard"
                getComponent={() => require('../screens/after_login/FavouriteCard').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />

            <Screen name="CartItemCard"
                getComponent={() => require('../screens/after_login/CartItemCard').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />

            <Screen name="Login"
                getComponent={() => require('../screens/before_login/Login').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />    
           <Screen name="SignUp_Customer"
                getComponent={() => require('../screens/before_login/SignUp_Customer').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} />

            <Screen name="SignUp_RestroHotle"
                getComponent={() => require('../screens/before_login/SignUp_RestroHotle').default}
                options={{
                    headerShown: false,
                    ...commonOptions
                }} /> 





        </Navigator>

    )
}

export default StackNavigator