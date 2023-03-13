import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/main/Home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                animationEnabled:false
            }}
            initialRouteName="Welcome"
        
        >
            <Stack.Screen 
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default HomeStack