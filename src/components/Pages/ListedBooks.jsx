import { useContext } from 'react';
import { BookContext } from '../Utlities/BookContext';
import { useLoaderData } from 'react-router';
import BookCard from '../Books/BookCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const [storedBooks, setStoredBooks, storedWishList, setStoredWishList] = useContext(BookContext)
    const allBooks = useLoaderData()

    const storedBooksVar = allBooks.filter(b => storedBooks.includes(b.bookId))
    const storedWishListVar = allBooks.filter(b=> storedWishList.includes(b.bookId))


    return (
        <div className='max-w-292 mx-auto '>

            {/* Show Stored Books */}

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        storedBooksVar.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        storedWishListVar.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;