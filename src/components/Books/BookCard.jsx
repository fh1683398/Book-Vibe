import { BookOpenCheck, StickyNote } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    const { yearOfPublishing, publisher, tags, category, rating, totalPages, image, author, bookName } = book
    return (
        <div className='p-4 md:p-6 md:flex gap-6 text-gray-700 border border-gray-200 rounded-lg my-10'>
            <div className='bg-gray-100 rounded-lg p-10 md:max-w-65 w-full flex justify-center items-center'>
                <img className='max-h-40' src={image} alt={bookName} />
            </div>
            <div className='flex-1'>
                <h2 className='font-bold text-2xl md:text-3xl mb-4'>{bookName}</h2>
                <p className='mb-4 font-sans'><span className='font-semibold'>By:</span>{author}</p>
                <div className='flex gap-4 font-sans'>
                    <span className='font-semibold'>Tag</span>
                    {tags.map((t, index) => <p key={index} className='px-3 py-1 bg-yellow-100 border border-yellow-200 rounded-full text-sm'>#{t}</p>)}
                </div>
                <div className='my-4 flex flex-col md:flex-row gap-4 md:gap-10 font-sans'>
                    <p className='flex gap-2 items-center'><BookOpenCheck size={20} className='text-gray-500' />Publisher: {publisher}</p>
                    <p className='flex gap-2 items-center'><StickyNote size={20} className='text-gray-500' />Pages: {totalPages}</p>
                    <p>Year of publishing: {yearOfPublishing}</p>
                </div>
                <hr className='border-t border-gray-200' />
                <div className='flex flex-col md:flex-row gap-2 mt-4'>
                    <div className='flex gap-2 mb-4 md:mb-0'>
                        <Link className='' to=""><button className='px-4 py-2 rounded-full bg-blue-200 font-sans w-full'>Category: {category}</button></Link>
                        <Link className='' to=""><button className='px-4 py-2 rounded-full bg-yellow-200 font-sans w-full'>Rating: {rating}</button></Link>
                    </div>
                    <div>
                        <Link to=""><button className='px-4 py-2 rounded-full bg-green-500 font-sans w-full md:w-fit-content'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;