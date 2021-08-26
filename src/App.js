import React from 'react';
import { Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../src/routes/routes';
import LoadPage from './pages/loading/index';
import BookPage from './pages/pageSelectBook/index';
import HomePage from './pages/home/index';

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
