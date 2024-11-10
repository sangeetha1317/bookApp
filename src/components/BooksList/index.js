import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { db } from '../../Firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styles from './styles';
import { useBooks } from '../BookProvider';

export default function BooksList({ navigation }) {
  const { books, loading } = useBooks();
  if (loading) {
    return <Text>Loading...</Text>;
  }
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
