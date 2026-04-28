
import { Link, useLoaderData, useParams } from 'react-router';


const BookDetails = () => {
    const { bookId } = useParams()
    const idNumber = parseInt(bookId)
    const data = useLoaderData()

    const singleBook = data.find(b => b.bookId === idNumber)
    console.log(singleBook)

    // const { bookName, author, image, review, totalPages, rating, category, publisher } = singleBook

    return (
        <div className='max-w-292 mx-auto flex gap-6 mb-10 md:mb-20'>

            <div className='flex-1 py-5 bg-gray-200 flex items-center justify-center rounded-lg'><img className='max-h-80' src={singleBook.image} alt={singleBook.bookName} /></div>

            <div className='flex-1'>

                <h3 className='font-bold text-3xl md:text-4xl text-gray-700 mb-4'>{singleBook.bookName}</h3>
                <p className='text-gray-600 font-sans mb-4'>By: {singleBook.author}</p>

                <div className='border-y border-gray-200 py-4 mb-4'>
                    <p className='text-gray-600 font-sans'><span className='font-semibold'>Category:</span> {singleBook.category}</p>
                </div>

                <p className='text-gray-600 font-sans mb-6'><span className='font-semibold'>Review: </span> {singleBook.review}</p>
                <div className='flex gap-4'>
                    <h4 className='font-semibold font-sans text-gray-600'>Tag</h4>
                    <div className='flex gap-4'>
                        {
                            singleBook.tags.map(tag => <p className='px-3 py-1 bg-yellow-100 rounded-full text-sm font-sans text-gray-500'>#{tag}</p>)
                        }
                    </div>
                </div>

                <hr className='border-t border-gray-300 my-6' />

                <p className='text-gray-600 font-sans mb-4'><span className='font-semibold'>Total Pages:</span> {singleBook.totalPages}</p>

                <p className='text-gray-600 font-sans mb-4'><span className='font-semibold'>Rating:</span> {singleBook.rating}</p>

                <p className='text-gray-600 font-sans mb-4'><span className='font-semibold'>Publisher:</span> {singleBook.publisher}</p>

                <div className='flex gap-2 md:gap-4 font-sans my-6'>
                    <Link><button className='px-4 py-2 rounded-lg bg-transparent border border-gray-300 font-medium text-gray-600 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white'>Read</button></Link>
                    <Link><button className='px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 font-medium'>Wishlist</button></Link>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;