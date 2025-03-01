// src/pages/MyBooks.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMyBooks } from '../redux/bookSlice';
import MyBookCard from '../component/MyBookCard';

function MyBooks() {
    const dispatch = useDispatch();
    const { myBooks } = useSelector(state => state.books);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            const fetchUserBooks = async () => {
                const response = await axios.get(
                    `https://module4maineval-666bc-default-rtdb.firebaseio.com/users/${user.uid}/myBooks.json`
                );

                const booksArray = response.data
                    ? Object.keys(response.data).map(key => ({
                        id: key,
                        ...response.data[key]
                    }))
                    : [];

                dispatch(fetchMyBooks(booksArray));
            };

            fetchUserBooks();
        }
    }, [dispatch, user]);

    if (!user) return <p>Please log in to view your books.</p>;

    return (
        <div>
            <h2>My Books</h2>
            {myBooks.length === 0 ? (
                <p>No books added yet.</p>
            ) : (
                myBooks.map(book => (
                    <MyBookCard key={book.id} book={book} userId={user.uid} />
                ))
            )}
        </div>
    );
}

export default MyBooks;
