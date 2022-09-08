import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealInfoScreen from "./screens/MealInfoScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";


const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();
function TabsNavigator() {
    return (
        <TabBottom.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: '#fff',
                tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#351401',
                },
            }}
            sceneContainerStyle={{
                backgroundColor: '#3f2f25',
            }}
        >
            <TabBottom.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                    title: 'Categories',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name='menu' size={size} color={color}/>
                    )
                }}
            />
            <TabBottom.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarActiveTintColor: 'gold',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name='star' size={size} color={color}/>
                    )
                }}
            />
        </TabBottom.Navigator>
    );
}

export default function App() {
  return (
      <>
        <StatusBar style={'light'}/>
          {/*<FavoritesContextProvider>*/}
          <Provider store={store}>
              <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerStyle: {
                          backgroundColor: '#351401',
                      },
                      headerTintColor: '#fff',
                      contentStyle: {
                          backgroundColor: '#3f2f25',
                      }
                  }}
              >
                  <Stack.Screen
                      name={'TabNavigator'}
                      component={TabsNavigator}
                      options={{
                          headerShown: false, //скрываем header
                      }}
                  />
                  <Stack.Screen
                      name={'MealsOverview'}
                      component={MealsOverviewScreen}
                  />
                  <Stack.Screen
                      name={'MealInfo'}
                      component={MealInfoScreen}
                      options={{
                          title: 'About the Meal',
                      }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
          </Provider>
          {/*</FavoritesContextProvider>*/}
      </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
