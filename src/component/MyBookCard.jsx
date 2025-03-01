import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBookStatus, updateBookRating } from '../redux/bookSlice';
import axios from 'axios';

function MyBookCard({ book, userId }) {
    const dispatch = useDispatch();

    const handleStatusChange = async (status) => {
        await axios.patch(
            `https://module4maineval-666bc-default-rtdb.firebaseio.com/users/${userId}/myBooks/${book.id}.json`,
            { status }
        );
        dispatch(updateBookStatus({ bookId: book.id, status }));
    };

    const handleRatingChange = async (rating) => {
        await axios.patch(
            `https://module4maineval-666bc-default-rtdb.firebaseio.com/users/${userId}/myBooks/${book.id}.json`,
            { rating }
        );
        dispatch(updateBookRating({ bookId: book.id, rating }));
    };

    return (
        <div>
            <h3>{book.title}</h3>
            <select value={book.status} onChange={(e) => handleStatusChange(e.target.value)}>
                <option>Want to Read</option>
                <option>Currently Reading</option>
                <option>Read</option>
            </select>
            <input
                type="number"
                min="1"
                max="5"
                value={book.rating}
                onChange={(e) => handleRatingChange(Number(e.target.value))}
            />
        </div>
    );
}

export default MyBookCard;
