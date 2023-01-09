import { createDrawerNavigator } from '@react-navigation/drawer';
import { RollInRight } from 'react-native-reanimated';
import CustomDrawerContent from '../components/HOC/CustomDrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator  drawerContent={(props)=> <CustomDrawerContent {...props} />}  drawerPosition={"right"}  screenOptions={{headerShown:false}}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        </Drawer.Navigator>
    );
}
export default MyDrawer;