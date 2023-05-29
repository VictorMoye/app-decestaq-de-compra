import React from 'react';
import { StyleSheet,Image, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
//import { View } from 'react-native-web';

const width = Dimensions.get('screen').width

export default function Cestas(){
    return <>    
    <Image source={topo}  style = {estilos.topo}/>
    <Text style= {estilos.titulo }>Detalhe da Cestas</Text>
    <View>
       <Text>Cestas de verduras</Text>  
    <Text>Jenny Jack Farm</Text>
    <Text>Uma cesta de produtos selecionados 
        cuidadozamente da 
        fazenda direto pra 
        cozinha</Text>
        <Text>R$ 40,00</Text>
    </View>
    
    </> 
}

const estilos =  StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
},
    titulo: {
        position: "absolute", 
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});

