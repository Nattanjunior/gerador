import {NavigationContainer} from '@react-navigation/native'
import{ Routes} from './src/routes'

export default function App(){
  return(
    <NavigationContainer > 
      <Routes/>
    </NavigationContainer>
  )
}







// para podemos exibir o TabBar, precisamos importar o arquivo das rotas, e envolve-lá no componente: NavigationContainer