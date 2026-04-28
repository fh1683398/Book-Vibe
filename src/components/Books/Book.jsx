import { Bookmark, Star } from 'lucide-react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const {bookId,  bookName, author, image, rating, category, tags } = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className='p-4 border border-gray-300 rounded-lg flex flex-col h-full'>

                <figure className='bg-gray-100 rounded-lg flex items-center justify-center py-8 mb-4'>
                    <img className='h-50' src={image} alt="" />
                </figure>

                <div className='flex flex-col flex-1'>

                    <div className='flex justify-between items-center'>

                        <div className='flex gap-2 mb-2'>
                            {tags.map(tag => <span className='px-4 py-1 bg-yellow-100 rounded-full border border-yellow-300 text-sm'>{tag}</span>)}
                        </div>

                        <div className='flex gap-2 items-center'>
                            <Star size={15} />
                            <p>{rating}</p>
                        </div>

                    </div>


                    <div className='flex-1'>
                        <h3 className='font-bold text-2xl text-gray-700 mb-2'>{bookName}</h3>
                        <h4 className='text-gray-600 font-sans'>By: {author}</h4>
                    </div>
                    <hr className='border-t border-dashed border-gray-300 my-6' />


                    <div className='flex justify-between items-center text-gray-700'>
                        <p>{category}</p>
                        <Bookmark className='cursor-pointer' />
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Book;