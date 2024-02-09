
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/Home'
import {Password} from './pages/password'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
 return(
  <Tab.Navigator>
    <Tab.Screen
    name='Home'
    component={Home} 
    options={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: (focused,size = 25,color = "#392de9")=>{
        if(focused){
          return <Ionicons size={size} color={color} name='home'/>
        }
        return <Ionicons size={size} color={color} name='home-outline'/>
      }
    }}   
    />

    <Tab.Screen
    name='Passwords'
    component={Password}
    options={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: (focused,size = 25,color = "#392de9")=>{
        if(focused){
          return <Ionicons size={size} color={color} name='lock-closed'/>
        }
        return <Ionicons size={size} color={color} name='lock-closed-outline'/>
      }
    }}     
    />

    
  </Tab.Navigator>
)
}



















// criamos esse arquivo para importar e criar as nossas rotas entre as telas.

// A constante Tab: é usada para criar o TabBar

// Tab.Navigation: é a TabBar que fica lá em baixo, é para agrupar os botões das telas.

// Tab.Screen: são as telas que vamos usar, dentro delas temos componentes, que são:

// name: nome da página, vai aparecer em um header em cima da tela.

// Component: qual é o componente que vai exibir quando estiver nessa tela.

// options: headerShown: false
// serve para tirar o header em cima da tela, que aparece quando damos o nome a tela, com a propriedade name. 

// tabBarIcon: a gente pode criar e configurar qual icone a gente quer exibir. É uma função anônima que rece 3 argumentos.

// focused: se está com foco na tela

// size: o tamanho do icone

// color: a cor do icone

// options: tabBarShowLabel: false
// serve para desabilitar o nomezinho que fica em baixo dos botões no tab bar.