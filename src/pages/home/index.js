import React from 'react';
import { StatusBar,TouchableOpacity,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CarouselBooks from '../../components/carouselBook/index';
import { 
    StyledSafeArea,
    StyledIconDrawer,
    StyledContainerIcon,
    StyledIconPerson,
    StyledContainerInput,
    StyledInput,
    StyledIconSearch,
    StyledContainerTitles,
    StyledTitles,
} from './style';

export default function({ navigation }){
    return(
    <StyledSafeArea>
        <StatusBar hidden={true}/>

        <StyledContainerIcon>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{alert("sdfds")}}
            >
                <StyledIconDrawer>
                    <Icon name={"list"} size={30} color={"#FF7A00"}/>
                </StyledIconDrawer>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>{alert("sdfds")}}
            >
                <StyledIconPerson>

                </StyledIconPerson>
            </TouchableOpacity>
        </StyledContainerIcon>
            
        <StyledContainerInput>

            <StyledInput 
                placeholder={"Pesquisar"}
                placeholderTextColor={"#FF7A00"}
            />
            <StyledIconSearch>
                <Icon name="search" size={18} color={"#FF7A00"}/>
            </StyledIconSearch>

        </StyledContainerInput>

        <StyledContainerTitles>
            <StyledTitles>Todos</StyledTitles>
            <StyledTitles>Misterio</StyledTitles>
            <StyledTitles>Fantasia</StyledTitles>
            <StyledTitles>Romance</StyledTitles>
        </StyledContainerTitles>
    
        <CarouselBooks navi={navigation}/>
        <CarouselBooks/>
    </StyledSafeArea>
    );
}
