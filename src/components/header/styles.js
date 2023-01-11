import { StyleSheet } from "react-native";
import { colors, fonts } from "../../pages/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: colors.BACKGROUND_INPUT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
        
    },
    containerRight: {
        flexDirection: 'row'
    },
    title: {
        color: colors.PLACEHOLDERTEXTCOLOR,
        fontFamily: fonts.BOLD,
        fontSize: 25
    }
})