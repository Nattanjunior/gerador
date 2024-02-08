import {useState} from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  const [size, setSize] = useState(10) 
  const [passValue, setPassValue] = useState('')

  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const handlegeneratePass = ()=>{
    let pass = '';
    for(let i = 0, n = charset.length; i < size ; i++){
     pass += charset.charAt(Math.floor(Math.random() * n ))
    }
    setPassValue(pass)
 }  
  return(
    <View style={styles.container}> 
    <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
    />
    <Text style={styles.title}>{size.toFixed(0)} caracteres</Text>

    <View style={styles.areaTheSlider}> 
      <Slider
      style={{height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor='#ff0000'
      minimumTrackTintColor='#000'
      thumbTintColor='#392de9'
      value={size}
      onValueChange={(value)=> setSize(value)}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={handlegeneratePass}>
      <Text style={styles.buttonText}>Gerar senha</Text>
    </TouchableOpacity>

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
},
areaTheSlider:{
  marginTop: 14,
  marginBottom: 14,
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius: 8,
  padding: 8
},
button:{
  backgroundColor: "#392de9",
  width: '80%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,    
  marginBottom: 18
}, 
buttonText:{
  color: '#FFF',
  fontSize: 20
}, 
title:{
  fontSize: 30,
  fontWeight: 'bold'
}
})
























// <View> é um espaço em branco, como se fosse uma <div>

// <Text> tag para poder renderizar texto, sem ela, não dá.

// <StyleSheet> tag para criar estilos css

// <Image> tag de imagens

// Vamos instalar um Slider para o projeto, <npx expo install @react-native-community/slider>

// instalamos nosso slider, dentro de uma View, adicionamos o slider a ela.

// para alterar a cor do Slider quando estiver no máximo, vamos usar uma propriedade chamada: maximumTrackTintColor, fornecida pelo próprio slider.

// para alterar a cor do Slider quando estiver no mínimo, usar a propriedade: minumumTrackTintColor.  

// para alterar a cor da bolinha do Slider, usamos a prorpiedade thumbTintColor, fornecida também pelo Slider.

// importamos o TouchableOpacity, que é um  botão clicavel que tem opacidade no seu estilo  


// a propriedade onValueChange, sever para pegar o valor do Slider quando a gente faz a ação de arrastar o Slider, ela recebe o valor e atualiza o estado dinamicamente.


// a função charAt(), serve para pegar uma string em algum posição

// a função Math.floor(), serve para gerar um número inteiro.

// a função Math.random(), serve para gerar números aleatorios entre 0 e 1 