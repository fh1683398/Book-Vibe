import React from 'react';

const BookCard = ({book}) => {
    const {yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author, bookName} = book
    return (
        <div className='p-4 md:p-6 md:flex gap-6 text-gray-700 border border-gray-200 rounded-lg my-10'>
            <div className='bg-gray-200 rounded-lg p-10 md:max-w-65 w-full flex justify-center items-center'>
                <img className='max-h-40' src={image} alt={bookName} />
            </div>
            <div>
                <h2 className='font-bold text-2xl md:text-3xl mb-4'>{bookName}</h2>
                <p className='mb-4'><span className='font-semibold'>By:</span>{author}</p>
                <div className='flex gap-4'>
                    <span className='font-semibold'>Tag</span>
                    {tags.map((t, index)=> <p key={index} className='px-3 py-1 bg-yellow-100 border border-yellow-200 rounded-full text-sm'>#{t}</p>)}
                </div>
            </div>
        </div>
    );
};

export default BookCard;