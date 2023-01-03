
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import TopTab from './TopTab';

const Tab = createMaterialTopTabNavigator();

const ProductList = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All_Category" component={All_Category} />      
      <Tab.Screen name="Vegetables" component={Vegetables} />
      <Tab.Screen name="Fruits" component={Fruits} />
      <Tab.Screen name="Exotic" component={Exotic} />

    </Tab.Navigator>
  );
}
export default ProductList