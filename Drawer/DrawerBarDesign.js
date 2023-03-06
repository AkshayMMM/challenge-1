import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
     View,
     StyleSheet,
     ImageBackground,
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'
import Subscription from './Subscription';
import ShareApp from './ShareApp';
import Referrals from './Referrals';
import Notification from './Notification';
import Logout from './Logout';
import Downloads from './Downloads';

class Box extends Component{
    render(){
        return(
            <View>
            <View 
            style={{height:54,width:210,backgroundColor:"#002233",marginLeft:5,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:20,flexDirection:"row"}}>
                <View  style={{height:40,width:40,backgroundColor:"#002233",marginLeft:0,
                                         borderRadius:6,borderWidth:1.5,alignItems:"center",justifyContent:'center',borderColor:"#1fb507",marginTop:0}}></View>    
                <Text style={{fontSize:19,fontWeight:"500",color:"white",marginLeft:20,marginTop:0}}>{this.props.content}</Text>
                 
            
            </View>
            </View>

        )
    }
}


export default class DrawerBarDesign extends Component{
    render(){
        return(
        <View style={styles.container}>
                 <Icon style={{marginTop:30,marginLeft:3}} name="closesquareo" color='green' size={40}/>
            <View style={{flexDirection:'row'}}>
                    <Image style={{height:50,width:50,marginTop:30,marginLeft:20}} 
                     source= {require('../../assets/icongirl.jpeg')}></Image>
             <View style={{paddingLeft:15}}>
                <Text style={{marginTop:30, color:'white'}}>Aaron Tylor</Text>
                <Text style={{color:'white'}}>ID: 1234</Text>
             </View>
                <Icon style={{marginTop:40,marginLeft:70}} name="right" color='green' size={20}/>
            </View>


            <Box content={"Subrscription"}></Box>
            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:22,marginLeft:30,marginBottom:0}}></View>
            <Box content={"Downloads"}></Box>
            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:22,marginLeft:30}}></View> 
            <Box content={"Notification"}></Box>
            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:22,marginLeft:30}}></View> 
            <Box content={"Referrals"}></Box>
            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:22,marginLeft:30}}></View> 
            <Box content={"ShareApp"}></Box>
            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:22,marginLeft:30}}></View> 
           
            <View style={{height:54,width:210,backgroundColor:"#002233",marginLeft:5,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:20,flexDirection:"row"}}>
                <View  style={{height:40,width:40,backgroundColor:"#002233",marginLeft:3,
                                         borderRadius:6,borderWidth:1.5,alignItems:"center",justifyContent:'center',borderColor:"red",marginTop:0}}></View>    
                <Text style={{fontSize:20,fontWeight:"600",color:"red",marginLeft:20,marginTop:0}}
                onPress={()=>this.props.navigation.navigate("Subscription")}>Logout</Text>
                 
            
            </View>
            
            
                                                
                
               
         </View>
        )
    }


    
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#002233'
    },
    menu:{
        fontSize:17,
        marginTop:10,
        marginLeft:10,
        color:'white',
        fontWeight:'bold'
    },
    
})
