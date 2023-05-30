import React from "react";
import { StyleSheet ,Text } from "react-native";

export default function Texto({children, style}){
    let estilos = estilo.texto;
    if(style?.fontWeight === 'bold'){
        estilos = estilo.textoNegrito;
    }
    return <Text style={[style, estilos]}>{children}</Text>
} 

const estilo = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular", 
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
});