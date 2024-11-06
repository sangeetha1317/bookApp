import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    bookName: {
        fontSize: 20,
        color: '#4a235a',
        fontWeight: 'bold'
    },
    bookAuthor: {
        fontSize: 15,
        fontStyle: 'italic',
        marginBottom: 20
    },
    bookRate: {
        fontStyle: 'italic',
        fontWeight: '500',
        color: '#4a235a'
    },
    bookalignment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 5,
    },
    bookImage: {
        width: '50%',
        height: 300,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    bookSummary: {
        fontSize: 16,
        marginBottom: 20
    }

});

export default styles