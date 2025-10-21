import { StyleSheet } from 'react-native';

const logostyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        width: 250,
        height: 200,
    },

    text: {
        fontSize: 48,
        fontWeight: 600,
        letterSpacing: -0.5,
        marginTop: 10,
        fontStyle: 'italic',
    }
});

export { logostyles };