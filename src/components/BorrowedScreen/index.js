import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useBooks } from '../BookProvider';

export default function BorrowedScreen() {
  const { books, returnBook } = useBooks();
  const [loading, setLoading] = useState(true);

  const borrowedBooks = books.filter((book) => book.borrowed);

  useEffect(() => {
    setLoading(false);
  }, [books]);

  const handleReturn = async (bookId) => {
    try {
      Alert.alert('Success', 'Book returned successfully');
      await returnBook(bookId);
    } catch (error) {
      console.error('Error returning book: ', error);
      Alert.alert('Error', 'Unable to return the book.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.container} />;
  }

  if (borrowedBooks.length === 0) {
    return <Text style={styles.emptyText}>No books have been borrowed yet.</Text>;
  }

  return (
    <FlatList
      data={borrowedBooks}
      renderItem={({ item }) => (
        <View style={styles.bookContainer}>
          <Image source={{ uri: item.cover }} style={styles.bookImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookName}>{item.name}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </View>
          <TouchableOpacity onPress={() => handleReturn(item.id)} style={styles.returnButton}>
            <Text style={styles.returnButtonText}>Return</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
    />
  );
}
