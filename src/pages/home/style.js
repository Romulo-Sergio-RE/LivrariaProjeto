import React from 'react';
import styled from 'styled-components/native';

export const StyledSafeArea = styled.View`
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: #382626;
    padding: 20px;
`
export const StyledContainerIcon = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
`
export const StyledIconDrawer = styled.View`
    margin-top: 10px;  
`
export const StyledIconPerson = styled.View`
    width: 60px;
    height: 60px;
    background-color: #ffff;
    border-radius: 10px;
`
export const StyledContainerInput = styled.View`
    margin-top: 25px;
    margin-left: 16px;
`
export const StyledInput = styled.TextInput`
    width: 343px;
    height: 40px;
    background-color: #382626;
    border-radius: 10px;
    border: 3px #9B3DC7;
    padding-left: 40px;
    font-weight: bold;
    font-size: 16px; 
`
export const StyledIconSearch = styled.View`
    position: absolute;
    padding: 10px;
`
export const StyledContainerTitles = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    margin-top: 15px;
    margin-bottom: 10px;
`
export const StyledTitles = styled.Text`
    font-size: 16px;
    color: #FF7A00;
`