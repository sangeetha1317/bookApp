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
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
     },
    bookRate: {
        fontSize: 16,
        fontWeight: '500',
        color: '#4a235a',
        marginTop: 4,
        marginLeft: 10
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
    },
    button: {
        backgroundColor: '#4a235a',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
      },
      buttonDisabled: {
        backgroundColor: '#B0B0B0',
      },

});

export default styles