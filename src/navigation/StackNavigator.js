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
            <Screen   name='DrawerNavigator'
            // use getComponent instead of component for better speed 
            getComponent={() => require('../navigation/DrawerNavigator').default}
            options={{headerShown:false,
                ...commonOptions
            }}
        />
            <Screen   name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Home').default}
                options={{headerShown:false,
                    ...commonOptions
                }}
            />
              <Screen   name='Category'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Category').default}
                options={{headerShown:false,
                    ...commonOptions
                }}
            />
              <Screen   name='Favourite'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Favourite').default}
                options={{headerShown:false,
                    ...commonOptions
                }}
            />
              <Screen   name='Cart'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Cart').default}
                options={{headerShown:false,
                    ...commonOptions
                }}
            />
                      <Screen   name='ProductList'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/ProductList').default}
                options={{headerShown:false,
                    ...commonOptions
                }}
            />
            <Screen  name='Refer_Earn'
            getComponent={()=> require('../screens/after_login/Refer_Earn').default}
            options={{headerShown:false, ...commonOptions}}/>

            <Screen name='ProuductCard' 
            getComponent={()=>require('../components/UI/ProductCard').default}
            options={{headerShown:false,...commonOptions}}
            />
            
            <Screen name='ProductList2' 
            getComponent={()=>require('../screens/after_login/ProductList2').default}
            options={{headerShown:false,...commonOptions}}
            />
            <Screen name="FeatureProductView"
            getComponent={()=>require('../screens/after_login/FeatureProductView').default}
            options={{headerShown:false,...commonOptions}}
            />
            <Screen name="ProductDetail"
            getComponent={()=>require('../screens/after_login/ProductDetail').default}
            options={{headerShown:false,...commonOptions}} />
      
        </Navigator>

    )
}

export default StackNavigator