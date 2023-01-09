import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React, { useState } from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import icons from '../../constants/icons'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import { FULL_WIDTH,FULL_HEIGTH } from '../../constants/layout'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import Loader from '../../components/UI/Loader'
const Login = ({navigation}) => {
  const [number , setnumber]=useState('')
  const [Password , setpassword]=useState('')
  
  return (
    <ViewContainer style={{flexGrow:1}}>
    
         <FocusAwareStatusBar backgroundColor={'#0AB252'} />
     <TouchableOpacity  style={styles.ifresh_Drawar_main_view}>
          <View style={styles.ifresh_Top_view}>
            <Image style={styles.ifresh_logo_view} source={icons.iFreshLogo} />
            <Paragraph size={35} color={'white'}>iƑɾҽʂհ</Paragraph>
          </View>
        </TouchableOpacity>
        <View style={styles.Login_View_BOX}>
        <View style={styles.Login}>
            <Paragraph size={25} textAlign={'center'} >Login</Paragraph>
        </View>
        <View style={styles.Input_View}>
            <Input  placeholder={'Enter mobile number'} 
            onChange={(a)=>setnumber(a)}
              />
                <Input  placeholder={'Enter The Password'} 
              />
        
        <View style={styles.UiButton}>
          <UiButton text='Login'
            textColor='white'
            txtSize={20}
            backgroundColor={colors.lime}
           
          />

        </View>
        <Paragraph  onPress={()=>navigation.navigate('Home')}  style={{marginTop:10}} textAlign={'center'}>ifresh with countinue</Paragraph>
        <Paragraph  style={{marginTop:10}} textAlign={'center'}>if not Registered yet</Paragraph>
        </View>
        <View style={styles.Registered_Text_View}>
            <Paragraph style={{marginTop:10}} color='#1A73E8'  onPress={()=>navigation.navigate('SignUp_Customer')}>Registered as customer</Paragraph>
            <Paragraph  style={{marginTop:10}} color='#1A73E8'>OR</Paragraph>
            <Paragraph  style={{marginTop:10}} color='#1A73E8'  onPress={()=>navigation.navigate('SignUp_RestroHotle')}>Registered as Restro/Hotle</Paragraph>
        </View>
        </View>
    </ViewContainer>
  )
}

export default Login

const styles = StyleSheet.create({
    ifresh_Drawar_main_view: {
        // borderWidth: 1,
      },
      ifresh_Top_view: {
        // borderWidth: 1,
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lime
      },
      ifresh_logo_view: {
        width: 70,
        height: 70,
        tintColor: "white",
      },
      Login_View_BOX:{
        // borderWidth:1,
        width:"90%",
        elevation:1,
        flex:0.96,
        marginTop:-40,
        alignSelf:"center",
        backgroundColor: colors.WHITE,

      },
      Login:{
     marginVertical:30,
      },
      Input_View:{
     
      },
      UiButton: {
        alignSelf: "center",
        width: FULL_WIDTH * 0.35,
        padding:10,
      },
      Registered_Text_View:{
    //   borderWidth:1,
      alignItems:"center",
      justifyContent:"center",
      marginVertical:15,
      },
})