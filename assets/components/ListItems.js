import React from 'react'
import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';
// import AppButton from './AppButton';
import { data } from './listItemsData';

const ListItems = ({ToggleScreen}) => {
    return (
        <View style={styles.ListItemsContainer}>
        {
            data.map((item, index)=>{
return(
    <View style={styles.ListItems} key = {index}>
    <View style={styles.itemContainer}>
        <Image
            style={styles.itemimage}
            source={item.itemImage} />
        <View style={styles.quantity}>
            <Text style={styles.btn}>-</Text>
            <Text style={styles.itemValue}>1</Text>
            <Text style={styles.btn}>+</Text>
        </View>
    </View>
    <View style={styles.details}>
        <Text style={styles.itemName}>{item.itemName}</Text>
        <Text style={styles.itemdetails}>{item.detail}</Text>
        <Text style={styles.itemPrice}> {'\u20B9'} {item.price}</Text>
        <Text style={styles.itemcolor}><Text style={{fontWeight:"bold"}}>Color: </Text>{item.color}</Text>
        <Text style={styles.itemavailable}>{item.stock}</Text>
        <View style={styles.btn1}>
            <TouchableOpacity style={{ height: 25, backgroundColor: "transparent", alignItems: 'center', justifyContent: 'center',borderRadius:15, borderWidth:1,borderColor:"orange" }}>
                <Text style={{ fontSize: 14, color: "orange", padding:2 }}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 25, backgroundColor: "orange", alignItems: 'center', justifyContent: 'center' ,borderRadius:15,}}>
                <Text style={{ fontSize: 14, color: "white",  padding:2 }}>See more like this</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>
)

            })
        }
        <View style={styles.subContain}>
        <View >
        <Text style={styles.subTotal}>
        Subtotal 	{'\u20B9'} 13,500
        </Text>
        </View>
        
        <TouchableOpacity style={{ height: 35, width:270, backgroundColor: "#DB4700", alignItems: 'center', justifyContent: 'center' ,borderRadius:15,marginTop:10}} onPress={ToggleScreen}>
        <Text style={{ fontSize: 20, color: "white",  padding:2, fontWeight:"bold",  }} >Proceed to buy 3 items </Text> 
        </TouchableOpacity>
        
        </View>
        </View>
    )
}

export default ListItems

const styles = StyleSheet.create({
    ListItemsContainer: {
        marginTop: 10,
    },
    ListItems: {
        flexDirection: "row",
        marginBottom:5
    },
    itemimage: {
        width: 100,
        height: 100
    },
    itemContainer: {
        width: 100,
    },
    quantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "#E5E5E5",
        padding: 5,
        alignItems:"center"
    },
    btn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 1,
        fontSize: 16,
        paddingLeft:6,
        marginBottom:2
    },
    details: {
        marginLeft: 15,
        flex: 1
    },
    itemName: {
        fontSize: 18,
        fontWeight: "600",
    },
    itemdetails: {
        fontWeight: "500",
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 25,
        fontWeight: "700",
    },
    itemcolor: {
        fontWeight: "400",
        fontSize: 14,
    },
    itemavailable: {
        color: "green"
    },
    btn1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:10

    },
    parent1: {
        width: 150,
        backgroundColor: "orange",
        color: "black",
        borderRadius: 100,
        color: "orange",
    },
    subContain:{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        marginTop:7,
    },
    subTotal:{
        fontWeight:"bold",
        fontSize:20
    },
})