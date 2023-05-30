import React from 'react';
import { StyleSheet,Image, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width

export default function Cestas(){
    return <>    
    <Texto style= {estilos.titulo}>Detalhe da Cestas </Texto>
    <Image source={topo}  style={estilos.topo}/>
    
    
    <View style = {estilos.cestas}>
       <Texto style={estilos.nome}>Cestas de verduras</Texto>  
       <View style={estilos.Fazendinha}>
        <Image source={logo} style = {estilos.imagemFazenda}></Image>
    <Texto style = {estilos.fazenda}>Jenny Jack Farm</Texto>
    </View>
    <Texto style = {estilos.Descricao}>Uma cesta de produtos selecionados 
        cuidadozamente da 
        fazenda direto pra 
        cozinha</Texto>
        <Texto style = {estilos.preco}>R$ 40,00</Texto>
    </View>    
    </> 
}

const estilos =  StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
},
    titulo: {
        width: "100%",
        position: "absolute", 
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cestas: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 32,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    Descricao: {        
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,

    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    Fazendinha: {
        flexDirection: "row",
        paddingVertical: 12,
    },

});

