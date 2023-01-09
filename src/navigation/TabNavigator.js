import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import Home from '../screens/after_login/Home';
import icons from '../constants/icons';
import Favourite from '../screens/after_login/Favourite';
import Category from '../screens/after_login/Category'
import Cart from '../screens/after_login/Cart';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'red' }}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#0AB252',
        tabBarActiveBackgroundColor: '#0AB252',
        tabBarInactiveTintColor: "white",

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image style={styles.CARTIMAGE} source={icons.home} />
            // </View>

          ),
        }}
        
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarLabel: 'Category',
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused == true ? '#0AB252' : '',
              //   height:50,width:50,
              borderRadius: focused == true ? 20 : 0,
              //   marginTop:focused == true? -29:0
            }}>
              <Image style={styles.CARTIMAGE} source={icons.apps} />
            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused == true ? '05fa05' : '',
              //   height:50,width:50,
              borderRadius: focused == true ? 100 : 0,
              //   marginTop:focused == true? -29:0
            }}>
              <Image style={styles.CARTIMAGE} source={icons.love} />
            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: 3,

          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused }) => (

            <Image style={{
              width: 30,
              height: 30,
              tintColor: focused == true ? 'red' : 'gold',
            }} source={icons.bag} />

          ),
        }}
      />



    </Tab.Navigator>
  );
}
export default TabNavigator;
const styles = StyleSheet.create({
  CARTIMAGE: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
})