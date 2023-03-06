import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import OTPTextInput from "react-native-otp-textinput";


import {
     View,
     StyleSheet,
     ImageBackground,
     Image,                 //otp verification
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.container2}>
                <Image source= {require('../assets/inmakes.jpeg')}
                    style={styles.picture}></Image>
                    <Image source= {require('../assets/iconotp.png')}
                    style={styles.picture1}></Image>
                    <Text style={styles.text1}>Verification code</Text>
        
                    <Text>please type the verification code send to </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.number}>{this.props.route.params.transcode}</Text>
                    <Text style={styles.number}>{this.props.route.params.transnum}</Text>
                    </View>

                    
                
                
               </View>
               <View style={styles.insideview1}>
                    <OTPTextInput ref={e => (this.otpInput = e)} inputCount={6}  containerStyle={{backgroundColor:"#002510",width:'85%',marginLeft:23}} textInputStyle={styles.textinputstyle2} tintColor={"#002c41"} offTintColor={"#002c41"}
                    >

                    </OTPTextInput>
                    <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Thirdtab")}>
                        <Text style={styles.buttontext}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={styles.text2}>Resnd after 20S</Text>
                    <View style={styles.page}>
                    
                    <Icon name='phone' size={24} color='green'/>
                    <Text style={styles.text3}>Contat Us</Text></View>
                    
               </View>
            </View>   
        )
    }

    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:''
        
    },textview:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:20,
        color:'blue'
    },
    text1:{
        fontSize:20,
        fontWeight:"bold",
        color:'#101112',
        marginTop:70
        
    },
    picture:{
        height:220,
        width:220,
        marginTop:40
        
    },
    picture1:{
        height:150,
        width:150,
        marginTop:1
    },
    number:{
        fontWeight:'bold',
        marginTop:20,
        paddingLeft:5
    },
    container2:{
        height:600,
        width:'100%',
        backgroundColor:'#ffffff',
        alignContent:'center',
        alignItems:"center",
        

    },
    
    insideview1:{
        height:340,
        width:'100%',
        backgroundColor:'#0c0e1c',
        borderRadius:25,
        aligni:'center'
        
        
    },
buttonview:{
    width:'75%',
    height:55,
    backgroundColor:'#14b32b',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:48
},
text2:{
    color:'#525452',
    marginLeft:150,
    marginTop:5
},
text3:{
    color:'green',
    marginLeft:7,
    fontWeight:'bold',
    fontSize:15
},
page:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:150
},
textinputstyle2:{
    height:45,
    width:45,
    backgroundColor:"#002c41" ,
  marginLeft:5,
  marginTop:20,  
  borderWidth:0,
  borderColor:'blue',
  borderRadius:4
  
   },
})