import { Alert } from "react-native";

export function showAlert(errorCode) {
    switch (errorCode) {
        case  'auth/invalid-email':
            Alert.alert('E-mail inválido', 'Este e-mail não pode ser cadastrado. \nExemplo: "email@email.com"')
        break;
        case  'auth/wrong-password':
        Alert.alert('Senha incorreta.')
        break;
        case  'auth/email-already-in-use':
        Alert.alert('E-mail em uso', 'Este e-mail já está cadastrado.')
        break;
        case  'auth/user-not-found':
        Alert.alert('Usuário não encontrado.')
        break;
        case  'auth/weak-password':
        Alert.alert('Senha fraca', 'A senha deve conter pelo menos 6 digitos.')
    
        default:
            break;
    }
};