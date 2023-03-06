import React,{Component} from 'react'
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
     View,
     StyleSheet,
     ImageBackground,
     Image,
     Text,
     TextInput,
     TouchableHighlight,
     TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
class Box extends Component{
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:20,marginTop:20}}>{this.props.content}</Text>
                <Text style={{marginLeft:60,fontSize:15,marginTop:20,fontWeight:'bold'}}>{this.props.value}</Text>

            </View>

        )
    }
}



export default class About_us extends Component{
    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.container1}>
                   <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:25,color:'white',paddingLeft:150,fontSize:30}}>Profile</Text>
                        <Icon name="bell-outline" size={25} color='white' 
                        style={{marginTop:35,marginLeft:60}}></Icon>
                        <View style={{height:40,width:40,borderWidth:1,borderColor:"white",marginTop:30,marginLeft:15}}>
                            <Icon name="view-grid" size={25} color='white'
                             style={{marginTop:6,marginLeft:6}}></Icon>
                        </View>
                     <View style={{width:'90%',height:550,backgroundColor:'white',marginLeft:-360,
                    marginTop:100,borderWidth:1}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:70,width:70,borderRadius:40,borderWidth:3,borderColor:'green',marginTop:10,marginLeft:10}} source= {require('../../assets/icongirl.jpeg')}></Image>
                            <View style={{marginTop:30,marginLeft:10}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Aaron Taylor</Text>
                                <Text style={{}}>ID:1234</Text>

                            </View>
                        </View>
                        <Text style={{fontSize:23,fontWeight:'bold',color:'black',marginLeft:20,marginTop:10}}>Personal Info</Text>
                        <Box content={"Account Settings"} value={"Aaron Taylor"}></Box>
                        <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:15,width:330,marginLeft:12}}></View>
                        <Box content={"Email"} value={"akshaymma98@gmail.com"}></Box>
                        <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:10,width:330,marginLeft:12}}></View>
                        <Text style={{fontSize:25,fontWeight:'bold',color:'black',marginLeft:20,marginTop:20}}>Course Info</Text>
                        <Box content={"Course Info"} value={"Inmakes edu"}></Box>
                        <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:10,width:330,marginLeft:12}}></View>
                        <Box content={"Course"} value={"Plus Two Science"}></Box>
                        <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:10,width:330,marginLeft:12}}></View>
                        <Box content={"Payment Status"} value={"Free"}></Box>
                        <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:10,width:330,marginLeft:12}}></View>
                        <Box content={"Expiry Date"} value={"Not Applicable"}></Box>
                        
                        
                     </View>
                     
                     

                    </View>
                    
                 </View>
                 <View style={{width:'90%',height:1,backgroundColor:'white',marginLeft:-360,
                    marginTop:100}}></View>
                    <TouchableOpacity style={{height:60,width:"91%",backgroundColor:"#1AE907",marginLeft:18,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",flexDirection:"row",marginTop:265}}>
                                            <View style={{backgroundColor:"#1Af907",height:35,width:35,borderRadius:5,marginLeft:15}}>
                                            <Icon name="credit-card-outline" size={22} color="white"style={{marginTop:6,marginLeft:6,marginRight:0}}/>
                                            </View>
                                            <Text style={{ color:'white',fontSize:14, fontWeight:"500",marginLeft:10}}>Custom Payment</Text>
                                            <Icon name="chevron-right" size={25} color="white"style={{marginTop:0,marginLeft:150,marginRight:10}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60,width:"91%",backgroundColor:"#1AE907",marginLeft:18,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",flexDirection:"row",marginTop:6}}>
                                            <View style={{backgroundColor:"#1Af907",height:35,width:35,borderRadius:5,marginLeft:15}}>
                                            <Icon name="credit-card-outline" size={22} color="white"style={{marginTop:6,marginLeft:6,marginRight:0}}/>
                                            </View>
                                            <Text style={{ color:'white',fontSize:14, fontWeight:"500",marginLeft:10}}>Custom Payment</Text>
                                            <Icon name="chevron-right" size={25} color="white"style={{marginTop:0,marginLeft:150,marginRight:10,marginBottom:20}}/>
                </TouchableOpacity>
            </ScrollView>  
                
            </View>
        )
    }

    
}


const styles =StyleSheet.create({
    container1:{
        height:300,
        width:"100%",
        backgroundColor:'#002233',
        marginTop:0

    },
   
})