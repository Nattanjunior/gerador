import {useEffect,useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import {PasswordItem} from './component/passwordItem' 

export function Password() {
  const [listPass,setListPass] = useState([])
  const focused = useIsFocused();
  const {getItem, removeItem} = useStorage();


  useEffect(()=>{
    const loadPass = async () =>{
      const pass = await getItem('@pass')
      setListPass(pass)
    }

    loadPass()
  },[focused]);

  const removePass = async (item)=>{
    const passwords = await removeItem("@pass",item)
    setListPass(passwords)
  }

  return(
    <SafeAreaView style={{felx:1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
        style={{paddingTop:14}}
        data={listPass}
        keyExtractor={(item)=> String(item)}
        renderItem={({item}) => <PasswordItem data={item}
        removePassword={()=> removePass(item)}   
        />}
        />
      </View>
        
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#392de9",
      paddingTop:58,
      paddingBottom: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    title:{
      fontSize:18,
      color: '#FFF',
      fontWeight:'bold'
    },
    content:{
      paddingLeft:14,
      paddingRight:14
    }
})





// useIsFocused: é um booleano, que basicamente é para saber se a tela esta com foco ou não.

// Flatlist: renderiza lista,contém algumas Propriedades, como:

// data: que é aonde está a minha lista.

// keyExtractor: com uma função anônima, vamos pegar cada item da lista, e transformar em String para serem únicas.

// renderItem: que é quando a gente vai renderizar os Itens