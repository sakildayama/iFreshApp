import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/HOC/CustomDrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown:false}}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        </Drawer.Navigator>
    );
}
export default MyDrawer;