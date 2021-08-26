import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/home/index';
import BookPage from '../pages/pageSelectBook/index';
import Loading from '../pages/loading/index';

const Stack = createNativeStackNavigator();

export default function(){
    

    return(
        <Stack.Navigator initialRouteName={"Loading"}>
            <Stack.Screen 
                name={"Home"} 
                component={HomePage}
                options={{ 
                    headerShown:false,
                }}
            />
            <Stack.Screen 
                name={"Book"} 
                component={BookPage}
                options={{ 
                    headerShown:false,
                }}
            />
            <Stack.Screen 
                name={"Loading"} 
                component={Loading}
                options={{ 
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    );
}