import {StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    text: {
        color: '#181a20',
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'Poppins-ExtraBold',
        marginTop: 32,
        marginBottom: 24,
    },
    trending: {
        color: '#181a20',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'Poppins-Bold',
    },
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#4150bd',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
});
