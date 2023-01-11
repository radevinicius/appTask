import React, {useState} from "react";
import {View, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { colors} from "../styles";
import { styles } from "./styles";
import {Feather} from "@expo/vector-icons"
import auth from "@react-native-firebase/auth";
import { showAlert } from "../../../Util/showAlert";


export function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    function resetPassword(){
        auth().sendPasswordResetEmail(email)
        .then(() => (
            alert('E-mail enviado, O E-mail para trocar a senha enviado com sucesso!')
        ))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }

    function login(){
        auth().signInWithEmailAndPassword(email, password)
        .catch(error =>  showAlert(error.code))
        };

    function createUser(){
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
            alert('Usuário criado e logado com sucesso !');
            })
        .catch(error =>  showAlert(error.code));
            }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            
            <Image source={require("../../assets/icon.png")} style={styles.imageLogo}/>
            <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={colors.PLACEHOLDERTEXTCOLOR}
                />
            <View style={styles.containerInputPassword}>
            <TextInput
                value={password}
                onChangeText={value => setPassword(value)}
                style={[styles.inputPassword]}
                placeholder="Senha"
                placeholderTextColor={colors.PLACEHOLDERTEXTCOLOR}
                secureTextEntry={!passwordIsVisible}
                />
                <TouchableOpacity onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
                    <Feather name="eye" size={20} color={colors.PLACEHOLDERTEXTCOLOR}/>
                </TouchableOpacity>
                
            </View>
            <TouchableOpacity onPress={resetPassword}>
                <Text style={styles.TextResetPassword}>esqueceu sua senha ?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={login} style={styles.containerButtonLogin}>
                <Text  style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={createUser} style={styles.TextResetPassword}>criar nova conta</Text>
            </TouchableOpacity>
            
        </View>
        </TouchableWithoutFeedback>
    )
}