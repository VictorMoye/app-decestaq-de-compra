import React from 'react';
import { StyleSheet,Image, Dimensions, Text } from 'react-native';
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Cestas(){
    return <>    
    <Image source={topo}  style = {estilos.topo}/>
    <Text style= {estilos.titulo }>Detalhe da Cestas</Text>
    </> 
}

const estilos =  StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
},
    titulo: {
        position: "Absolute", 
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});