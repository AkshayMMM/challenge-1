import React,{Component} from 'react'
import  Icon from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';

import {
     View,
     StyleSheet,
     ImageBackground,     //register page
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'
const States = [
    'Kerala',
    'Karnataka',
    'Tamilnadu',
    'Goa',
    'kashmeer',
    'Punjab',
    'Sikkim',
    'Rajasthan',
    'Odisha'
    
  ];

  export default class About_us extends Component{
       constructor(){
        super();
        this.state={bordercolour1:"#002c41",bordercolour2:"#002c41",bordercolour3:"#002c41",bordercolour4:"#002c41"}
       }
  


    render(){
        return(
            <View style={styles.container}>
               <View style={styles.container2}>
                <Image source= {require('../assets/inmakes.jpeg')}
                    style={styles.picture}></Image>
                    <Image source= {require('../assets/iconotp.png')}
                    style={styles.picture1}></Image>
                    <Text style={styles.text1}>Student Details</Text>
        
                    </View>


               <View style={styles.insideview1}>

                <TextInput style={{height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:20,
                                      marginLeft:35,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour1,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour1:"#00cc00",
                                                                  bordercolour2:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour4:"#002510"})}
                                     // onBlur={()=>this.setState({bordercolour1:"#002510"})}
                                      placeholder="Full name" placeholderTextColor='#005c79' ></TextInput>

                <TextInput  style={{ height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:10,
                                      marginLeft:35,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour2,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour2:"#00cc00",
                                                                  bordercolour1:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour4:"#002510"})}
                                     // onBlur={()=>this.setState({bordercolour2:"#002510"})}
                                      placeholder="Email" placeholderTextColor='#005c79' ></TextInput>

<SelectDropdown
                                      data={States}
                                      // defaultValueByIndex={1}
                                      // defaultValue={'Egypt'}
                                      onSelect={(selectedItem, index) => {
                                      console.log(selectedItem, index);
                                       }}
                                      defaultButtonText={'Select state'}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                       }}
                                       rowTextForSelection={(item, index) => {
                                       return item;
                                         }}
                                       buttonStyle={{ width: '85%',
                                                      height: 50,
                                                      backgroundColor: '#002c41',
                                                      borderRadius: 4,
                                                      marginRight:33,
                                                      borderWidth: 1,
                                                      borderColor:this.state.bordercolour3,
                                                       marginTop:10}}
                                                       onFocus={()=>this.setState({bordercolour3:"#00cc00",
                                                                                   bordercolour2:"#002510",
                                                                                   bordercolour1:"#002510",
                                                                                   bordercolour4:"#002510"})}
                                                     //  onBlur={()=>this.setState({bordercolour3:"#002510"})}
                                       buttonTextStyle={{color: '#005c79', textAlign: 'left',fontSize:15,marginTop:0}}
                                      renderDropdownIcon={isOpened => {
                                   return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#005c79'} size={13} style={{marginRight:8}} />;
                               }}
                                      dropdownIconPosition={'right'}
                                      dropdownStyle={styles.dropdown1DropdownStyle}
                                      rowStyle={styles.dropdown1RowStyle}
                                      rowTextStyle={styles.dropdown1RowTxtStyle}
                                         />

                  <TextInput  style={{ height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:10,
                                      marginLeft:35,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour4,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour4:"#00cc00",
                                                                  bordercolour2:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour1:"#002510"})}
                                    //  onBlur={()=>this.setState({bordercolour4:"#002510"})}
                                      placeholder="Pin code" placeholderTextColor='#005c79' ></TextInput>

                            

                

                   
                    <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Fourthtab")}>
                        <Text style={styles.buttontext}>Register</Text>
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
        marginTop:20
        
    },
    picture:{
        height:180,
        width:180,
        marginTop:190
        
    },insideview1:{
        height:600,
        width:'100%',
        backgroundColor:'#0c0e1c',
        borderRadius:25,
        marginTop:5
        
        
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
},
picture1:{
    height:150,
    width:150,
    
    
},




})