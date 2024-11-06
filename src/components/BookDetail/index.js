import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import { db } from '../../Firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './styles';

export default function BookDetail({ route }) {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookDoc = await getDoc(doc(db, 'books', bookId));
        if (bookDoc.exists()) {
          setBook(bookDoc.data());
        } else {
          Alert.alert('Error', 'Book not found.');
        }
      } catch (error) {
        Alert.alert('Error', 'Unable to fetch book details.');
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.cover }} style={styles.bookImage} />
      <View style={styles.bookalignment}>
        <Text style={styles.bookName}>{book.name}</Text>
        <Text style={styles.bookRate}>{book.rating}</Text>
      </View>
      <Text style={styles.bookAuthor}>{book.author}</Text>

      <Text style={styles.bookSummary}>{book.summary}</Text>
    </View>
  );
};