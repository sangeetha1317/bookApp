// BookProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../src/Firebase/config';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'books'), (snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    });
    return unsubscribe;
  }, []);

  const borrowBook = async (bookId) => {
    const bookRef = doc(db, 'books', bookId);
    await updateDoc(bookRef, { borrowed: true });
  };

  const returnBook = async (bookId) => {
    const bookRef = doc(db, 'books', bookId);
    await updateDoc(bookRef, { borrowed: false });
  };

  return (
    <BookContext.Provider value={{ books, borrowBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);
