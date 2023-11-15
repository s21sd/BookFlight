// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Welcome from './src/Screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Booking from './src/Screens/Booking';
import Offer from './src/Screens/Offer';
import Inbox from './src/Screens/Inbox';
import Profile from './src/Screens/Profile';
import Departure from './src/Screens/Departure';
import { Searchresult } from './src/Screens/Searchresult';
import Drwaer from './src/Screens/Drwaer';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Departure" component={Departure} />
        <Stack.Screen name="Searchresult" component={Searchresult} />
        <Stack.Screen name="Drwaer" component={Drwaer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
