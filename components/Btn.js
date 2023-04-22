import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    btn: {
        height: 56,
        width: 171,
        left: 180,
        top: 603,
        borderRadius: 46,
        paddingVertical: 20,
        paddingHorizontal: 54,
        backgroundColor: "#51A8FF",
        justifyContent: "center",
        alignItems: "center",
      },
    text:{
        fontSize: 20,
        fontWeight: "600",
        color: "#000000"
    }


})

export default function Button(props){
    return <TouchableOpacity onPress={props.onClick}  style={{...styles.btn, ...props.style}}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}