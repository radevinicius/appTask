import { StyleSheet } from "react-native";
import { colors, fonts } from "../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: colors.BACKGROUND
    },
    imageLogo: {
        width: 150,
        height: 150
    },
    input: {
        borderWidth: 1,
        borderColor: colors.PLACEHOLDERTEXTCOLOR,
        borderRadius: 7,
        marginTop: 50,
        width: '80%',
        height: 50,
        fontFamily: fonts.REGULAR,
        padding: 10,
        fontSize: 18,
        color: colors.PLACEHOLDERTEXTCOLOR

    },
    containerInputPassword: {
        width: '80%',
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.PLACEHOLDERTEXTCOLOR,
        borderRadius: 7,
        flexDirection: 'row',
        marginTop: 20

    },
    inputPassword: {
        flex: 1,
        fontSize: 18,
        color: colors.PLACEHOLDERTEXTCOLOR,
    }, 
    TextResetPassword: {
        color: colors.PLACEHOLDERTEXTCOLOR,
        fontSize: 16,
        marginTop: 5,
    },
    containerButtonLogin: {
        width: '80%',
        height: 50,
        borderRadius: 7,
        backgroundColor: colors.PLACEHOLDERTEXTCOLOR,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"

    }, 
    textButtonLogin: {
        color: colors.BACKGROUND,
        fonts: fonts.BOLD,
        fontSize: 18


    }
})