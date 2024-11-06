import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BooksList from './src/components/BooksList'
import BookDetail  from './src/components/BookDetail'
import BorrowedScreen from './src/components/BorrowedScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BooksList" component={BooksList} />
            <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
    );
}

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#4a235a',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'left',
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Transactions') {
            iconName = focused ? 'wallet' : 'wallet-outline'
          } else {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        }
      })}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Borrowed" component={BorrowedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}