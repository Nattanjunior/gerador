import {View,Text,StyleSheet,Pressable} from 'react-native'

export default function PasswordItem({data,removePassword}){
 return(
    <Pressable onLongPress={removePassword}>
        <Text>{data}</Text>
    </Pressable>
 )
}