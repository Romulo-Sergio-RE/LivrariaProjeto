import React from 'react';
import { ScrollView, View,TouchableOpacity } from 'react-native';
import { 
    StyledSafeArea,
    StyledTitle,
    StyledBooks,
    StyledNameBooks,
    StyledNameAuthor,   
    StyledScrollView,
    StyledContainerBook
} from './style';

export default function(props){
    return(
    <StyledSafeArea>
        <StyledTitle>Melhores Classificados</StyledTitle>
        
        <StyledScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <StyledContainerBook >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{props.navi.navigate("Book")}}
                    
                >
                    <StyledBooks source={require("../../assets/image/tronoDeVidro.png")}/>
                </TouchableOpacity>

                <StyledNameBooks>Trono de vidro 1</StyledNameBooks>
                <StyledNameAuthor>Sara J. Maas</StyledNameAuthor>
            </StyledContainerBook>

            <StyledContainerBook >          
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{props.navi.navigate("Book")}}
                >
                    <StyledBooks source={require("../../assets/image/tronoDeVidro.png")}/>
                </TouchableOpacity>

                <StyledNameBooks>Trono de vidro 2</StyledNameBooks>
                <StyledNameAuthor>Sara J. Maas</StyledNameAuthor>
            </StyledContainerBook>

            <StyledContainerBook >         
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{props.navi.navigate("Book")}}
                >
                    <StyledBooks source={require("../../assets/image/tronoDeVidro.png")}/>
                </TouchableOpacity>

                <StyledNameBooks>Trono de vidro 3</StyledNameBooks>
                <StyledNameAuthor>Sara J. Maas</StyledNameAuthor>
            </StyledContainerBook>
                
        </StyledScrollView>

    </StyledSafeArea>
    );
}
