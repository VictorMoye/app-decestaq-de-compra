import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet } from "react-native";

export default function Itens({titulo, lista }){
    return <>
    <Texto style={estilos.titulo}> {titulo}</Texto>
    {lista.map(({nome, imagem}) => {
    <Texto style={estilos.titulo}> {titulo}</Texto>
    return <View key={nome} style={estilos.item} >
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome} >{nome}</Texto>
        </View>
    })}
    </>
}

const estilos = StyleSheet.create({
    titulo:{
      color: "#464646",
      fontWeight: 'bold',
      marginTop: 32, 
      marginBottom: 8,  
      fontSize: 20,
      lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome:{
        color: "#464646",
        marginLeft: 11,  
        fontSize: 16,
        lineHeight: 26,
      },
});