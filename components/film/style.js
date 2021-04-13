import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 200,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
    },
    text: {
        fontSize: 20,
        color: '#181a20',
        fontFamily: 'Poppins-Bold',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 200,
        borderRadius: 36,
    },
    rating: {
        color: '#181a20',
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        width: '70%',
    },
    genresStyle: {
        fontSize: 14,
        color: '#181a20',
        fontFamily: 'Poppins-Regular',
    },
    image: {
        width: '30%',
        height: '100%',
        borderRadius: 16,
    },
});
