import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { db } from '../../Firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styles from './styles';

export default function BooksList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, 'books');
        const booksSnapshot = await getDocs(booksCollection);
        const booksList = booksSnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setBooks(booksList);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { bookId: item.id })}>
           <View style={styles.infoCard}>
              <Text style={styles.trName}>{item.name}</Text>
              <Text style={styles.trAuthor}>{item.author}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
