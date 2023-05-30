
import { StatusBar, View, SafeAreaView } from 'react-native';
import { useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Cestas from './src/telas/Cesta/';
import mock from './src/mocks/cestas';
export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  }) ;
  if(!fonteCarregada){
    return <AppLoading/>
  }
  return (
    <View>
      <StatusBar />
      <Cestas {...mock}/>      
    </View>
  );
}
