import {View,Text,StyleSheet,TouchableOpacity, Pressable} from 'react-native'
export default function ModalPassResultValue(){
return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.handlePass}>
            <Text style={styles.text}>aevnafjevn</Text>
        </Pressable>

        <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Voltar</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSave]}><Text style={styles.buttonSaveText}>Salvar senha</Text></TouchableOpacity>

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
