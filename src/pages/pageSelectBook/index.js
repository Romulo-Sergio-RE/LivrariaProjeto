import React from 'react';
import { StatusBar,TouchableOpacity,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    StyledSafeArea, 
    StyledContainerIcon,
    StyledIconCart,
    StyledIconArrow,
    StyledImage,
    StyledTitleBook,
    StyledTextBook, 
    StyledViewResume, 
    StyledTitleResume,
    StyledTextResume,
    StyledBntResume,
    StyledBntTitleResume,
} from './style';

export default function({ navigation }){
  return(
    <StyledSafeArea>

      <StatusBar hidden={true}/>

      <StyledContainerIcon>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>{navigation.goBack()}}
        >
          <StyledIconArrow>
            <Icon name={"arrow-left"} size={22} color={"#ffffff"}/>
          </StyledIconArrow>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>{alert("sdfds")}}
        >
          <StyledIconCart>
            <Icon name={"shopping-cart"} size={22} color={"#ffffff"}/>
          </StyledIconCart>
        </TouchableOpacity>    
      </StyledContainerIcon>
      
      <StyledImage source={require("../../assets/image/tronoDeVidro.png")}/>
          
      <StyledTitleBook>Trono de Vidro - Volume 1</StyledTitleBook>
      <StyledTextBook>Sara J. Maas</StyledTextBook>

      <StyledViewResume>
            <StyledTitleResume>Resumo:</StyledTitleResume>

            <StyledTextResume>A magia há muito abandonou Adarlan. Um perverso rei governa de seu trono de vidro, punindo impiedosamente as minorias rebeldes, quando uma assassina chega ao castelo. </StyledTextResume>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{alert("sdfds")}}
            >
                <StyledBntResume>
                    <StyledBntTitleResume>Comprar R$ 100,00</StyledBntTitleResume>
                </StyledBntResume>
            </TouchableOpacity>
      </StyledViewResume>

    </StyledSafeArea>
  );
}
