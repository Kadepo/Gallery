import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import {ImageScreen} from "./screens/ImageScreen";
import React, {FC} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import {rootReducer} from "./redux";
import thunk from "redux-thunk";
import {sagaWatcher} from "./redux/sagas";
import {NativeStackNavigationProp, NativeStackScreenProps} from "react-native-screens/native-stack";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParams,
    'ImageScreen'
    >;

export type RootStackParams ={
    HomeScreen:undefined,
    FavoritesScreen:undefined,
    ImageScreen:  undefined
}



export default function App() {
    const saga = createSagaMiddleware()
    const Stack = createStackNavigator<RootStackParams>()
    const store = createStore(rootReducer, compose(
        applyMiddleware(
            thunk, saga
    )))

    saga.run(sagaWatcher)

  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, }}/>
                  <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{headerShown: false, }}/>
                  <Stack.Screen name="ImageScreen" component={ImageScreen} options={{headerShown: false, }} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}


