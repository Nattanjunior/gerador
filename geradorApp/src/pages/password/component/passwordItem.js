import { useState } from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native'
import { Entypo } from '@expo/vector-icons';

export function PasswordItem({data,removePassword}){
    const [visible, setVisible] = useState({display:'flex'})
    const [flex, setFlex] = useState({display:'none'})
    const [text, setText] = useState({color:'#FFF'})
    
 return(
    <Pressable onLongPress={removePassword} style={styles.container}>
        <Text style={text}>{data}</Text>
       <Pressable>
        <Entypo name='eye' color="#FFF" size={25} style={visible} onPress={()=>{
            setVisible({display:'none'})
            setFlex({display:'flex'})
            setText({
                backgroundColor:'#FFF',
                width:180,
                color:"#FFF",
                borderRadius: 50
            })
        }}/>
        <Entypo name='eye-with-line' color="#FFF" size={25} style={flex} onPress={()=>{
            setVisible({display:'flex'})
            setFlex({display:'none'})
            setText({color:'#FFF'})
        }}/>
        </Pressable>

    </Pressable>
 )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    text:{
        color:"#FFF"
    },
    
})