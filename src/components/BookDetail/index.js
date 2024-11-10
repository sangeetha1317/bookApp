import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useBooks } from '../BookProvider';

export default function BookDetail({ route }) {
  const { bookId } = route.params;
  const { books, borrowBook } = useBooks();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchedBook = books.find(b => b.id === bookId);
    if (fetchedBook) {
      setBook(fetchedBook);
    }
  }, [books, bookId]);

  const handleBorrow = () => {
    const borrowedBooksCount = books.filter(b => b.borrowed).length;

    if (book.borrowed) {
      Alert.alert('Book Unavailable', 'This book is already borrowed.');
    } else if (borrowedBooksCount >= 3) {
      Alert.alert('Limit Reached', 'You cannot borrow more than three books at a time.');
      return;
    } else {
      borrowBook(bookId);
      Alert.alert('Success', 'You have borrowed this book!');
    }
  };

  if (!book) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.cover }} style={styles.bookImage} />
      <View style={styles.bookalignment}>
        <Text style={styles.bookName}>{book.name}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={24} color="#f1c40f" />
          <Text style={styles.bookRate}>{book.rating}</Text>
        </View>
      </View>
      <Text style={styles.bookAuthor}>{book.author}</Text>
      <Text style={styles.bookSummary}>{book.summary}</Text>
      <TouchableOpacity
        onPress={handleBorrow}
        disabled={book.borrowed}
        activeOpacity={book.borrowed ? 1 : 0.7}
        style={[styles.button, book.borrowed && styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>{book.borrowed ? "Book Borrowed" : "Borrow this book"}</Text>
      </TouchableOpacity>
    </View>
  );
}
