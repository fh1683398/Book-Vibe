import React, { createContext, useState } from 'react';
import { getStoredReadBooks, getWishListBooks } from './utlities';


export const BookContext = createContext([])

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState(getStoredReadBooks())
    const [storedWishList, setStoredWishList] = useState(getWishListBooks())

    return (
        <BookContext.Provider value={[storedBooks, setStoredBooks, storedWishList, setStoredWishList]}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;