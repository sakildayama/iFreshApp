import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import ViewContainer from '../../components/HOC/ViewContainer'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import FocusAwareStatusBar from '../../components/UI/FocusAwareStatusBar'
import Clickable from '../../components/HOC/Clickable'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import Video from 'react-native-video'
const Refer_Earn = ({navigation}) => {

    const  onloadEnd = ()=>{
        console.log('onload===>',onloadEnd)
    }

  const  onloadStart = ()=>{
        console.log('onloadStart===>',onloadStart)
    }

  const  onProgress = ()=>{
    console.log('=onProgress======>',onProgress)
  } 
  const onBuffer = ()=>{
    console.log('=====onBuffer',onBuffer)
  }
  const onError =()=>{
    console.log('====>',onError)
  }

  return (
    <ViewContainer style={{ flex: 1, backgroundColor: colors.WHITE }}>
    <FocusAwareStatusBar backgroundColor={'#0AB252'} />
      <View style={styles.TextImageVIEW}>
      <Clickable onPress={() =>navigation.navigate('Home')}> 
        <Image style={styles.CartImage} source={icons.leftarrow} />
       </Clickable>
        <Paragraph size={80} style={styles.iFresh_TEXT}>Refer Earn</Paragraph>
      </View>
    <ScrollContainer>
       <View style={styles.CONTAINER}>
        <Video 
        source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        }}
        style={styles.backgroundVideo}
        controls={true}
        volume={100}
        muted={false}
        onload={onloadEnd}
        onloadStart={onloadStart}
        onProgress={onProgress}
        onBuffer={onBuffer}
        // onError={onError}
    //   fullscreenOriantataion={'landscape'}
        />

       </View>

       <Clickable onPress={()=>{navigation.navigate('Refer_Earn')}} style={styles.Image_VIew}>
          <Image style={styles.Image} source={icons.fimagefruits} />

        </Clickable>
    </ScrollContainer>
  </ViewContainer>
  )
}

export default Refer_Earn

const styles = StyleSheet.create({
    TextImageVIEW: {
        flexDirection: 'row',
        alignItems:"center",
        width:"100%",
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
      iFresh_TEXT: {
        fontSize: 25,
        color: "white",          
      },
      CONTAINER:{
    flex:1,
    height:200,
    alignItems:"center",
    justifyContent:"center",
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height:265,
      },
      Image_VIew: {
        // borderWidth: 1,
        width:"100%" ,
           height: 120,
        marginVertical: 15,
      },
      Image: {
        width:"100%",
        // height: "100%",
        resizeMode:"contain"
      },
})