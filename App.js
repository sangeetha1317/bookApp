import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BooksList from './src/components/BooksList'
import BookDetail  from './src/components/BookDetail'
import BorrowedScreen from './src/components/BorrowedScreen';
import { BookProvider } from './src/components/BookProvider';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
      <BookProvider>
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#4a235a',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'left',
        tabBarIcon: ({ focused }) => {
          let iconName;
          let color;
          if (route.name === 'Books List') {
            iconName =  'bookshelf'
            color = focused ? '#4a235a' : '#B0B0B0'
          } else {
            iconName = 'book-multiple'
            color = focused ? '#4a235a' : '#B0B0B0'
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />
        }
      })}>
                <Tab.Screen name="Books List" component={HomeStack} options={{headerShown: false }}/>
                <Tab.Screen name="Borrowed" component={BorrowedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        </BookProvider>
    );
}