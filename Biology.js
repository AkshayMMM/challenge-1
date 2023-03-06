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
import { ScrollView } from 'react-native-gesture-handler'

export default class Biology extends Component{
    render(){
        return(
        <View style={styles.container}>
                 <View style={styles.container1}>
                    <TouchableHighlight>
                        <Icon style={styles.icon1} name="leftsquareo" color='#38eb28' size={40}
                         onPress={()=>this.props.navigation.navigate("bottom")}/>
                     </TouchableHighlight>
                        <Text style={styles.text1}>Biology</Text>
                   <View style={styles.container2}>
                        <Icon style={styles.icon2} name="minussquareo" color='#38eb28' size={20}/>
                        <Text style={styles.text2}>12 Chapters</Text>
                        <Icon style={styles.icon2} name="minussquareo" color='#38eb28' size={20}/>
                        <Text style={styles.text2}>124 hours</Text>



                    </View>
                </View>

        <View style={{width:'80%',backgroundColor:'white'}}>        
        <ScrollView>
                <View style={styles.container3}>
                    <TouchableHighlight>
                    <Text style={styles.text3}
                     onPress={()=>this.props.navigation.navigate("Tab")}>Longer chapter name can be shown here.</Text>
                    </TouchableHighlight>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>

                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>

                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>

                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={styles.text3}>Longer chapter name can be shown here.</Text>
                    <View style={styles.container4}>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>12 Chapters</Text>
                        <Icon style={styles.icon3} name="minussquareo"  size={20}/>
                        <Text style={{marginTop:20}}>124 hours</Text>
                    </View>
                </View>
        </ScrollView>
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
        backgroundColor:'white'
        
    },text1:{
        fontSize:30,
        fontWeight:"bold",
        color:'white',
        paddingTop:130,
        paddingLeft:50
    },
    container1:{
        height:300,
        width:'100%',
        backgroundColor:'#092a09',
        marginTop:300

    },
    container2:{
        flexDirection:'row',
        paddingTop:20,
        paddingLeft:50

    },
    text2:{
        color:'#38eb28',
        paddingLeft:2

    },
    icon1:{
        paddingLeft:20,
        paddingTop:10

    },
    icon2:{
        paddingLeft:15

    },
    container3:{
        height:120,
        width:'90%',
        elevation:50,
        borderWidth:1,
        marginTop:30,
        borderRadius:15
        
    },
    text3:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:15,
        marginLeft:20

    },
    container4:{
        flexDirection:'row'
    },
    icon3:{
        paddingTop:20,
        paddingLeft:50
    },
    container5:{
        height:120,
        width:'90%',
        elevation:50,
        borderWidth:1,
        marginTop:20,
        borderRadius:15
        
    },
    
    



})