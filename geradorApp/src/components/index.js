import {View,Text,StyleSheet,TouchableOpacity, Pressable} from 'react-native'
import * as Clipboard from 'expo-clipboard' 
import useStorage from '../hooks/useStorage'
export default function ModalPassResultValue({pass, buttonClick}){
const {saveItem} = useStorage()


const handlePass = async ()=>{
 await Clipboard.setStringAsync(pass)
 await saveItem('@pass', pass)
 alert('Senha salva com sucesso!!')
 
 buttonClick()
}

return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.handlePass} onLongPress={handlePass}>
            <Text style={styles.text}>{pass}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={buttonClick}><Text style={styles.buttonText} >Voltar</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handlePass}><Text style={styles.buttonSaveText}>Salvar senha</Text></TouchableOpacity>

        </View>

      </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(24,24,24, 0.6)",
        justifyContent: 'center',
        alignItems: 'center'   
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    handlePass:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    text:{
        color: "#FFF",
    },
    buttonArea:{
        width: "90%",
        marginTop:8,
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: 'center'

    },
    button:{
        flex:1,
        alignItems: 'center',
        marginTop:14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: "#392de9",
        borderRadius: 8
    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight: "bold"
    }

})




















// a propreidade onLongPress, é para quando cliclamos e seguramos em algo, nesse projeto, vamos clicar e segurar na senha exibida quando gerada, para cópiar ela.

// criamos uma função lá em cima, chamada handlePass, ela é a função que vamos passar para a propriedade onLongPress.

// importamos a biblioteca Clipboard, uitilzamos ela na função handlePass, usando: Clipboard.setStringAsync(pass), para cópiar uma string. Dentro do (), vamos passar oque queremos cópiar.

// colocamos um alert(), para avisar que a senha foi salva.