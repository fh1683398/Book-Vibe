import React from 'react';
import Book from './Book';

const Books = ({booksData}) => {

    return (
        <div id='books' className='max-w-292 mx-auto mb-10 md:mb-25'>
            <h2 className='text-center font-bold text-2xl md:text-3xl text-gray-700 mb-10'>Books</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;