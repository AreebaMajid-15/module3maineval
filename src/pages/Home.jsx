import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksRequest, fetchBooksSuccess } from '../redux/bookSlice';
import BookCard from '../component/BookCard';

function Home() {
    const dispatch = useDispatch();
    const { allBooks, loading } = useSelector(state => state.books);

    useEffect(() => {
        const fetchBooks = async () => {
            dispatch(fetchBooksRequest());
            const response = await axios.get('https://module4maineval-666bc-default-rtdb.firebaseio.com/books.json');
            const booksArray = Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            }));
            dispatch(fetchBooksSuccess(booksArray));
        };
        fetchBooks();
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>{allBooks.map(book => <BookCard key={book.id} book={book} />)}</div>
    );
}

export default Home;
