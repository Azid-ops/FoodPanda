//Importing Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Creation Navigation Object
const Stack = createNativeStackNavigator();

//Importing Files
import Home from './Home/Components/Home';
import Signup  from './User/Signup/Components/signup';
import Signin from './User/Signin/components/signin';
import AccountPage from './MainPage/components/main';
import Explain from './MainPage/pages/details';
import Basket from './MainPage/pages/basket';
import Checkout from './MainPage/pages/checkout';

const App = () => {
  return(

    //Navigation
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Dashboard" component={AccountPage} />
        <Stack.Screen name="Detail" component={Explain} />
        <Stack.Screen name="Basket" component={Basket} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Pharmacy" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;