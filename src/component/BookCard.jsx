import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToUserList } from '../redux/bookSlice';
import axios from 'axios';

function BookCard({ book }) {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleAddToMyBooks = async () => {
        if (!user) {
            alert('Please login to add books');
            return;
        }
        const bookData = { ...book, status: 'Want to Read', rating: 0 };
        await axios.put(
            `https://module4maineval-666bc-default-rtdb.firebaseio.com/users/${user.uid}/myBooks/${book.id}.json`,
            bookData
        );
        dispatch(addBookToUserList(bookData));
    };

    return (
        <div>
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={handleAddToMyBooks}>Want to Read</button>
        </div>
    );
}

export default BookCard;
