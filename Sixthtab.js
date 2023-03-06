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

export default class Search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source= {require('../assets/running.jpg')}
                    style={styles.picture}>
                </Image>
                <Text style={styles.text}>Fractional Shares</Text>
                <Text style={styles.text2}> The app tour description goes here</Text>
                <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Seventhtab")}>
                        
                        <Icon style={styles.icon}
                       name="right"
                       color='green'
                       size={20}
                       
                       
                     />
                        
                    </TouchableHighlight>
            </View>
        )
    }

    
}


const styles =StyleSheet.create({
    picture:{
        height:'70%',
        width:"90%",
        marginTop:20
        
    },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'yellow'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        marginTop:30
    },
    text2:{
        fontSize:12
    },
    buttonview:{
        width:'15%',
        height:55,
        backgroundColor:'#14b32b',
        marginTop:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:270
    }
})