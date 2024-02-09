import {useState} from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity,Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import ModalPassResultValue from '../../components/index'

export function Home(){
  const [size, setSize] = useState(10) 
  const [passValue, setPassValue] = useState('')
  const [modalVisible,setModalVisible] = useState(false)

  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const handlegeneratePass = ()=>{
    let pass = '';
    for(let i = 0, n = charset.length; i < size ; i++){
     pass += charset.charAt(Math.floor(Math.random() * n ))
    }
    setPassValue(pass)
    setModalVisible(true)
 }  
 const BackButton = ()=>{
  setModalVisible(false)
 }
  return(
    <View style={styles.container}> 
    <Image
      source={require("../../assets/logo.png")}
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


    <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassResultValue
        pass={passValue}
        buttonClick={BackButton}
        />
    </Modal>

    
  

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


// Modal sever para colocarmos alguma coisa em cima de outra, no caso desse projeto, quando clicamos em gerar senha, um Modal vai aparecer na tela, sobrepondo os outros elementos.

// Modal tem algumas propriedades, como: 

// visible: que é para saber quando ele vai ser exibido ou não.

// animationType: para saber qual que é a animação de abertura.

// transparent:  para ser transparente ou não, aceita booleano.


// Pressable é um botão clicavel, mas, sem estilização nenhuma.

// podemos passar propriedades para os nossos componentes, a gente cria essas propriedades, e passa algum valor para elas.


// para receber essas propriedades, recebemos como argumentos de função, só que antes, precisamos abrir {}(chaves) no parentese da função, só assim vai funcionar.

// vamos instalar mais uma biblioteca, clipboard, que serve para quando a gente clicar em cima de um texto, ele cópiar o texto, tipo um ctrl + c: npx expo install expo-clipboard

// vamos instalar o Async Storage, que é para guardar os dados, tipo um banco de dados: npx expo install @react-native-async-storage/async-storage

// vamos instalar também o react navigation, que é uma biblioteca para navegar entre as telas, nesse projeto teremos duas telas, a de Home e a de senhas, com o react navigation, conseguiremos navegar entre as duas telas.
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

//1- react-native-screens: Este pacote fornece uma API para gerenciar telas nativas em aplicativos React Native. Ele ajuda a melhorar o desempenho e a experiência do usuário, especialmente em aplicativos com muitas telas. Ele permite que você utilize recursos nativos de navegação, como a transição entre telas semelhante à de aplicativos nativos

// 2- react-native-safe-area-context: Este pacote é usado para lidar com áreas seguras em dispositivos móveis. Em dispositivos modernos, como iPhones com bordas arredondadas e o entalhe (notch), ou dispositivos Android com barras de status e de navegação, é importante garantir que o conteúdo do seu aplicativo não seja cortado ou obscurecido por essas áreas. O react-native-safe-area-context ajuda a determinar as áreas seguras em dispositivos diferentes e fornece uma maneira de garantir que seu conteúdo seja exibido corretamente, ajustando automaticamente as margens ou o layout conforme necessário.

// temos varios tipos de navegações:

// tipo Stack: que é do tipo pilha, que é abrindo as telas uma em cima outra: instalação

// sem o expo: npm install @react-navigation/stack

// com o expo: npx expo install react-native-gesture-handler


// tipo Drawer: é tipo o menu hamburguer, O Drawer Navigator renderiza uma gaveta de navegação na lateral da tela, que pode ser aberta e fechada por meio de gestos.Instalção: 

// sem o expo: npm install @react-navigation/drawer

// com o expo: npx expo install react-native-gesture-handler react-native-reanimated



// tipo BottomTabs: Uma barra de guias simples na parte inferior da tela que permite alternar entre rotas diferentes. As rotas são inicializadas preguiçosamente -- seus componentes de tela não são montados até que sejam focados pela primeira vez. Que são aqueles botões em baixo, tipo o instagram, o tik tok, onde tem aqueles botões lá em baixo, de Home, Reels, frieds e etc... Instalação:

// npm install @react-navigation/bottom-tabs

// nesse projeto, vamos utilizar o BottomTabs.


