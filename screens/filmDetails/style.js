import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: '#181a20',
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        marginBottom: 12,
    },
    text: {
        display: 'flex',
        color: '#181a20',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginBottom: 12,
    },
    desc: {
        color: '#181a20',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        marginBottom: 12,
        marginRight: 12,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 200,
        borderRadius: 36,
    },
    image: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 20,
    },
});
