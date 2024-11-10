import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  bookImage: {
    width: 100,
    height: 160,
    borderRadius: 5,
    marginRight: 15,
  },
  bookDetails: {
    flex: 1, 
    justifyContent: 'center',
  },
  bookName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 15,
    color: '#555',
  },
  returnButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  listContent: {
    paddingVertical: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
