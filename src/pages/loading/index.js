import React, { useState,useCallback,useFocusEffect, } from 'react';
import { StatusBar,ActivityIndicator } from 'react-native';
import { StyledText,StyledSafeArea,StyledTitulo } from './style';

export default function({ navigation }){

  setTimeout(()=>{
    navigation.navigate("Home")
  },3000)

  return(
    <StyledSafeArea>
      <StatusBar hidden={true}/>
      <StyledTitulo>Bem-Vindo</StyledTitulo>
      <StyledText>A leitura é uma fonte inesgotável de prazer mas por incrível que pareça, quase ninguém sente esta sede.</StyledText>
      <ActivityIndicator size="large" color="#FF7A00" style={{margin:20}}/>
    </StyledSafeArea>
  );
}
