import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/Entypo'


import {
     View,
     StyleSheet,
     ImageBackground,
     Image,                 
     Text,
     TextInput, 
     TouchableHighlight
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class Subscription extends Component{
    render(){
        return(
        <View style={styles.container}>
                <View style={styles.container2}>
                    <TouchableHighlight style={styles.button2}>
                    <Icon 
                       name="grid"
                       color='#38eb28'
                       size={20}
                       onPress={()=>this.props.navigation.navigate("Chat")}/>
                    </TouchableHighlight>
                    <Image source= {require('../../assets/inmakes.jpeg')}
                    style={styles.picture}></Image>
                <View style={styles.view1}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                </View> 
                <Text style={styles.text2}>Good Morning</Text> 
                <Text style={styles.text3}>Aaron Taylor</Text>
            <View style={styles.view}>    
                <Text style={styles.text4}>Class</Text>
              <View style={styles.view3}>
                <Text style={styles.text5}>Select State</Text>
                <Icon style={styles.icon}
                       name="chevron-small-down"
                       color='white'
                       size={20}/>
              </View> 
                
            </View>

        <View style={styles.scrollview1}>
            <ScrollView horizontal={true}>
            <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                 <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                 <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                 <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                 <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>
                 <View style={styles.view2}>
                    <Icon style={styles.icon2}
                       name="controller-record"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text}>classes</Text>
                 </View>

            </ScrollView>
        </View>
        <Text style={styles.text6}>Resent Courses</Text>
        <View style={styles.scrollview2}>
          <ScrollView  horizontal={true}>
                  <View style={styles.view4}>
                    <Icon style={styles.icon3}
                       name="video"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text7}>Course Title</Text>
                 </View>
                 <View style={styles.view4}>
                    <Icon style={styles.icon3}
                       name="video"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text7}>Course Title</Text>
                 </View>
                 <View style={styles.view4}>
                    <Icon style={styles.icon3}
                       name="video"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text7}>Course Title</Text>
                 </View>
                 <View style={styles.view4}>
                    <Icon style={styles.icon3}
                       name="video"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text7}>Course Title</Text>
                 </View>
                 <View style={styles.view4}>
                    <Icon style={styles.icon3}
                       name="video"
                       color='#38eb28'
                       size={20}/>
                    <Text style={styles.text7}>Course Title</Text>
                 </View>

          </ScrollView>
        </View> 
        <View style={styles.scrollview3}>
            <ScrollView horizontal={true}>
            <View style={styles.view5}>
                    
                    <Text style={styles.text8}>From LearningHub to Clear</Text>
                 </View>
                 <View style={styles.view5}>
                    
                    <Text style={styles.text8}>From LearningHub to Clear</Text>
                 </View>
                 <View style={styles.view5}>
                    
                    <Text style={styles.text8}>From LearningHub to Clear</Text>
                 </View>
                 <View style={styles.view5}>
                    
                    <Text style={styles.text8}>From LearningHub to Clear</Text>
                 </View>
                 <View style={styles.view5}>
                    
                    <Text style={styles.text8}>From LearningHub to Clear</Text>
                 </View>

            </ScrollView>

        </View>
                     
               
    </View>   
        )
    }

    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    container2:{
        flexDirection:'row'

    },
     picture:{
        height:150,
        width:150,
        marginTop:-30,
        marginLeft:20
        
    },
    view1:{
        height:40,
        width:100,
        marginTop:25,
        marginLeft:70,
        borderColor:'#38eb28',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:5
        

    },
    text:{
        color:'black',
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:10,
        marginTop:7
        
    },
    button2:{
        height:40,
        width:40,
        marginTop:25,
        marginLeft:5,
        borderColor:'#38eb28',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text2:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        marginLeft:-230,
        marginTop:-25
    },
    text3:{
        fontSize:27,
        fontWeight:'bold',
        color:'black',
        marginLeft:-190

    },
    view:{
        height:'10%',
        width:'90%',
        backgroundColor:'#111852',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10

    },
    text4:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        paddingLeft:15

    }, text5:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        paddingTop:10,
        paddingLeft:15

    },
    view3:{
        flexDirection:'row'
    },
    icon:{
        marginLeft:200,
        marginTop:10
    },
    icon2:{
        
        color:'#38eb28',
        marginTop:10
    },
    scrollview1:{
        height:70,
        backgroundColor:'white'
    },
    view2:{
        height:40,
        width:100,
        marginTop:15,
        marginLeft:20,
        borderColor:'#38eb28',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:5
        

    },
    text6:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginLeft:-205
    },
    scrollview2:{
        height:130,
        backgroundColor:'white'
    },
    view4:{
        
        height:100,
        width:200,
        marginTop:15,
        marginLeft:20,
        borderColor:'#38eb28',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:5,
        backgroundColor:'#111852'
    },
    icon3:{
        color:'white',
        marginTop:70,
        marginLeft:30
    },text7:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:10,
        marginTop:67
        
    },
    view5:{
        height:280,
        width:290,
        marginTop:15,
        marginLeft:20,
        borderColor:'#38eb28',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:5,
        backgroundColor:'#111852'

    },
    text8:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:20,
        marginTop:230
        
    },
    scrollview3:{
        height:300,
        backgroundColor:'white'
    },



   
})