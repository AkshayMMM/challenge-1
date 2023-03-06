import React,{Component} from 'react'
import {
     View,
     StyleSheet,
     ImageBackground,     //first page of challenge
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'


export default class About_us extends Component{
    constructor(){
        super();
       this.state={ entercode:'+91',
        phonenumber:null}


        
    }
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.container2}>
                <Image source= {require('../assets/inmakes.jpeg')}
                    style={styles.picture}></Image>
                    <Text style={styles.text1}>Enter your mobile number</Text>
        
                    <Text>We will send you an OTP to verify </Text>

                    
                
                
               </View>
               <View style={styles.insideview1}>
                    <View style={styles.insideview}>
                    <TextInput style={styles.inputview}
                    placeholder='+91'
                    placeholderTextColor='white'
                    onChangeText={(countrycode)=>this.setState({entercode:countrycode})}
                    maxLength={3}>

                    </TextInput>
                    <TextInput style={styles.inputview2}
                    placeholder='Mobile number'
                    placeholderTextColor='#848699'
                    onChangeText={(number)=>this.setState({phonenumber:number})}
                    maxLength={10}></TextInput></View>

                    <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Secondtab",{transcode:this.state.entercode,transnum:this.state.phonenumber})}>
                        <Text style={styles.buttontext}>Continue</Text>
                    </TouchableHighlight>

               </View>
                
            </View>
        )
    }

    
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
        
    },
    container2:{
        height:600,
        width:'100%',
        backgroundColor:'#ffffff',
        alignContent:'center',
        alignItems:"center"

    },text1:{
        fontSize:20,
        fontWeight:"bold",
        color:'#101112',
        marginTop:120
        
    },
    picture:{
        height:220,
        width:220,
        marginTop:190
        
    },
    insideview:{
        flexDirection:'row'
        
        
    },insideview1:{
        height:240,
        width:'100%',
        backgroundColor:'#0c0e1c',
        borderRadius:25
        
        
    },
     inputview:{
        width:"20%",
        height:55,
        backgroundColor:"#00394d",
        borderWidth:1,
        borderColor:'transparent',
        marginTop:30,
        marginLeft:20,
        paddingLeft:30
        
 },
    inputview2:{
       width:"70%",
       height:55,
       backgroundColor:"#00394d",
       borderWidth:1,
       borderColor:'transparent',
       marginTop:30,
       marginLeft:7,
       paddingLeft:30
       

 },
 buttonview:{
    width:'93%',
    height:55,
    backgroundColor:'#14b32b',
    marginTop:30,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:17
},
buttontext:{
    fontSize:17,
    // fontWeight:'bold',
    color:'white'
}

})