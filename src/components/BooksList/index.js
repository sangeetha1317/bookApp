import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useBooks } from '../BookProvider';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <FontAwesome5 name="book" size={24} color="#4a235a" style={{marginTop: 10 }} />
                <Text style={styles.trName}>{item.name}</Text>
              </View>
              <Text style={styles.trAuthor}>{item.author}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
