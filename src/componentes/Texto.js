import react from "react";
import { StyleSheet,Text, style } from "react-native";




export default function Texto ({ children , style }){
    let estilo = estilos.texto;

    if(style?.fontWeight === "bold"){
        estilo = estilos.TextoNegrito;
    }
    return <Text Style= {[style, estilo]}> {children} </Text>

}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: " MonteserratRegular", 
        fontWeight: "normal",
    },
    TextoNegrito: {
        fontFamily: "MonteserratBold",
        fontWeight: "normal",
    },
});