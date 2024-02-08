import {View,Text, StyleSheet, Image} from 'react-native'
export default function App(){
  
  return(
    <View style={styles.container}> 
    <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
    />
    <Text style={styles.title}>20 caracteres</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor: "#F3F3F3"
},
logo:{
  marginBottom:60
}
})
























// <View> é um espaço em branco, como se fosse uma <div>

// <Text> tag para poder renderizar texto, sem ela, não dá.

// <StyleSheet> tag para criar estilos css

// <Image> tag de imagens

// Vamos instalar um Slider para o projeto, <npx expo install @react-native-community/slider>