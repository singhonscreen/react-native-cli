import React from 'react'
import { StyleSheet, TextInput, View,Image, ScrollView } from 'react-native';
import { logo } from './constants';
import ListItems from './ListItems';
import Feather from 'react-native-vector-icons/Feather';


const ShoppingCart = ({ToggleScreen}) => {
    return (
        <ScrollView style={styles.main_conatiner}>
            <View style={styles.togglecontainer}>
            <Feather name="menu" size={24} color="black" />
            <Image
            style={styles.tinyLogo}
            source={logo}/>
            </View>
            <View style={styles.searchcontain}>
            <Feather name="search" style={{padding:10}} size={15} color="black" />
            <TextInput
            style={styles.searchinput}
            placeholder="Search"
        />
        <Feather name="camera" size={27}  color="black" style={styles.camera} />
            </View>
            <ListItems ToggleScreen={ToggleScreen} />
        </ScrollView>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    main_conatiner:{
        flex:1,
        paddingHorizontal:10,
        marginVertical:30,
        paddingVertical:2
    },
    togglecontainer:{
        flexDirection:"row",
        
        justifyContent:"space-between",
        
    },
    tinyLogo:{
        width:20,
        height:20,
      },
      searchcontain:{
          flexDirection:"row",
          
          justifyContent:"space-between",
          marginTop:5,
          backgroundColor: '#E5E5E5',
          alignItems:"center"
      },
     searchinput:{
         width:250
     },
      camera:{
          borderLeftColor:"grey",
          borderLeftWidth:1,
          padding:10
      },
})