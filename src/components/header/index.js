import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { colors } from "../../pages/styles";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons'
import auth from "@react-native-firebase/auth";

export function Header({newTaskIsVisible, setNewTaskIsVisible}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefas</Text>
            <View style={styles.containerRight}>
                <TouchableOpacity onPress={() => setNewTaskIsVisible(!newTaskIsVisible)}>
                <Feather name={newTaskIsVisible ? 'x' : 'plus'} size={30} color={colors.PLACEHOLDERTEXTCOLOR}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginLeft: 10
                }} onPress={() => auth().signOut()}>
                <Feather name="log-out" size={30} color={colors.PLACEHOLDERTEXTCOLOR}/>
                </TouchableOpacity>
            </View>
        </View>    
    )
}