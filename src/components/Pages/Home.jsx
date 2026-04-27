import React, { use } from 'react';
import Header from '../Header/Header';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;