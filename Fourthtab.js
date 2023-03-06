import React,{Component} from 'react'
import {
     View,
     StyleSheet,
     ImageBackground,     //board selection page
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'
import  Icon from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';

const boards = [
  'STATE',
  'CBSE'
 
  
];
const Class = [
  'Plus one computer science',
  'Plus one biology science',
  'Plus one commerse',
  'Plus one humanities',
  'Plus two computer science',
  'Plus two biology science',
  'Plus two commerse',
  'Plus two humanities',
  
  
];

export default class About_us extends Component{
    constructor(){
        super();
        this.state={bordercolour1:"#002c41",bordercolour2:"#002c41"}
      }


    render(){
        return(
            <View style={styles.container}>
               <View style={styles.container2}>
                <Image source= {require('../assets/inmakes.jpeg')}
                    style={styles.picture}></Image>
                    <Image source= {require('../assets/iconotp.png')}
                    style={styles.picture1}></Image>
                    <Text style={styles.text1}>Select your school board</Text>

                    <SelectDropdown
                                      data={boards}
                                      // defaultValueByIndex={1}
                                      // defaultValue={'Egypt'}
                                      onSelect={(selectedItem, index) => {
                                      console.log(selectedItem, index);
                                       }}
                                      defaultButtonText={'Select board'}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                       }}
                                       rowTextForSelection={(item, index) => {
                                       return item;
                                         }}
                                       buttonStyle={{ width: '84%',
                                                      height: 50,
                                                      backgroundColor: '#002c41',
                                                      borderRadius: 4,
                                                      borderWidth: 1,
                                                      borderColor: this.state.bordercolour1,
                                                       marginTop:20}}
                                             onFocus={()=>this.setState({bordercolour1:"#00cc00",
                                                                         bordercolour2:"#002c41" })}
                                            // onBlur={()=>this.setState({bordercolour1:"#002510"})}
                                       buttonTextStyle={{color: '#005c79', textAlign: 'left',fontSize:15,marginTop:0}}
                                      renderDropdownIcon={isOpened => {
                                   return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#005c79'} size={13} style={{marginRight:8}} />;
                               }}
                                      dropdownIconPosition={'right'}
                                      dropdownStyle={styles.dropdown1DropdownStyle}
                                      rowStyle={styles.dropdown1RowStyle}
                                      rowTextStyle={styles.dropdown1RowTxtStyle}
                                         />
                                          <SelectDropdown
                                      data={Class}
                                      // defaultValueByIndex={1}
                                      // defaultValue={'Egypt'}
                                      onSelect={(selectedItem, index) => {
                                      console.log(selectedItem, index);
                                       }}
                                      defaultButtonText={'Select class'}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                       }}
                                       rowTextForSelection={(item, index) => {
                                       return item;
                                         }}
                                       buttonStyle={{ width: '84%',
                                                      height: 50,
                                                      backgroundColor: '#002c41',
                                                      borderRadius: 4,
                                                      borderWidth: 1,
                                                      borderColor: this.state.bordercolour2,
                                                       marginTop:10}}
                                                       onFocus={()=>this.setState({bordercolour2:"#00cc00",
                                                                                   bordercolour1:"#002c41"})}
                                                       //onBlur={()=>this.setState({bordercolour2:"#002510"})}
                                       buttonTextStyle={{color: '#005c79', textAlign: 'left',fontSize:15,marginTop:0}}
                                      renderDropdownIcon={isOpened => {
                                   return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#005c79'} size={13} style={{marginRight:8}} />;
                               }}
                                      dropdownIconPosition={'right'}
                                      dropdownStyle={styles.dropdown1DropdownStyle}
                                      rowStyle={styles.dropdown1RowStyle}
                                      rowTextStyle={styles.dropdown1RowTxtStyle}
                                         />
        
                
               
                    
               
                    
                    <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Eighthtab")}>
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
        height:180,
        width:180,
        marginTop:-30
        
    },
    inputview2:{
       width:"90%",
       height:55,
       backgroundColor:"#00394d",
       borderWidth:1,
       borderColor:'transparent',
       marginTop:10,
       marginLeft:25,
       paddingLeft:15,
       
    },
 buttonview:{
    width:'93%',
    height:55,
    backgroundColor:'#14b32b',
    marginTop:50,
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