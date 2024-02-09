
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/Home/index'
import {Password} from './pages/password/index'

const Tab = createBottomTabNavigator();

export function Routes(){
 return(
  <Tab.Navigator>
    <Tab.Screen
    name='home'
    component={Home} 
    options={{
      headerShown: false
    }}   
    />

    <Tab.Screen
    name='password'
    component={Password}
    options={{
      headerShown: false
    }}     
    />

    
  </Tab.Navigator>
)
}



















// criamos esse arquivo para importar e criar as nossas rotas entre as telas.