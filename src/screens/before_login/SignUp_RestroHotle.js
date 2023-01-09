import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import ViewContainer from '../../components/HOC/ViewContainer'
import colors from '../../constants/colors'
import Paragraph from '../../components/UI/Paragraph'
import icons from '../../constants/icons'
import Input from '../../components/UI/Input'
import UiButton from '../../components/UI/UiButton'
import { FULL_WIDTH, FULL_HEIGTH } from '../../constants/layout'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
const SignUp_RestroHotle = ({navigation}) => {
  return (
    <ViewContainer style={{ flexGrow: 1 }}>
      <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <TouchableOpacity style={styles.ifresh_Drawar_main_view}>
        <View style={styles.ifresh_Top_view}>
          <Image style={styles.ifresh_logo_view} source={icons.iFreshLogo} />
          <Paragraph size={35} color={'white'}>iƑɾҽʂհ</Paragraph>
        </View>
      </TouchableOpacity>
      <View style={styles.Login_View_BOX}>
        <View style={styles.Login}>
          <Paragraph size={25} textAlign={'center'} >Registered</Paragraph>
        </View>
        <View style={styles.Input_View}>
          <Input placeholder={'Enter mobile number'}
          />
          <Input placeholder={'First Name'}
          />
          <Input placeholder={'Last Name'}
          />
          <Input placeholder={'Referral Code (optional)'}
          />
            <Input placeholder={'Enter Your Firm Name (optional)'}
          />
            <Input placeholder={'Enter Your Firm GST No (optional)'}
          />

          <View style={styles.UiButton}>
            <UiButton text='SIGNUP'
              textColor='white'
              txtSize={20}
              backgroundColor={colors.lime}

            />

          </View>
        
        </View>
        <View style={styles.Registered_Text_View}>
          <Paragraph onPress={()=>navigation.navigate("Login")}  color='#1A73E8'>Already Login Please Click</Paragraph>
        </View>
      </View>
    </ViewContainer>
  )
}

export default SignUp_RestroHotle

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
  Login_View_BOX: {
    // borderWidth:1,
    width: "90%",
    elevation: 1,
    flex: 0.96,
    marginTop: -40,
    alignSelf: "center",
    backgroundColor: colors.WHITE,

  },
  Login: {
    marginVertical: 10,
  },
  Input_View: {

  },
  UiButton: {
    alignSelf: "center",
    width: FULL_WIDTH * 0.35,
    padding: 10,
  },
  Registered_Text_View: {
    //   borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 15,
  },
})