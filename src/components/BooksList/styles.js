import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    trName: {
        fontSize: 16,
        color: '#4a235a',
        marginTop: 10,
        fontWeight: 'bold'
    },
    trAuthor: {
        fontSize: 15,
        marginTop: 10,
        fontStyle: 'italic',

    },
    infoCard: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    }

});

export default styles