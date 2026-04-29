import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-gray-900 py-20'>
            <div className='max-w-292 mx-auto grid md:grid-cols-3 gap-10 md:gap-20 px-4 lg:px-0'>

                <div className = "">
                    <h4 className='text-yellow-600 text-2xl mb-4'>Book Vibe</h4>
                    <p className='text-gray-300 font-sans'>This is book vibe website, from where you can read books.This is book vibe website, from where you can read books.</p>
                </div>

                <div className = "">
                    <h3 className='text-xl text-yellow-600 mb-4'>Quick Links</h3>
                    <ul className='text-gray-300 font-sans'>
                        <Link to="/"><li className='mb-3'>Home</li></Link>
                        <Link to="/listed-books"><li className='mb-3'>Listed Books</li></Link>
                        <Link to="/pages-to-read"><li className='mb-3'>Pages to read</li></Link>
                        <Link to="/"><li className='mb-3'>Terms & Condition</li></Link>
                        <Link to="/"><li>Privacy & Policy</li></Link>

                    </ul>
                </div>

                <div className='relative'>
                    <h4 className='text-xl text-yellow-600 mb-4'>Subscribe</h4>
                    <input type="email" placeholder='your email' className='bg-gray-200 px-4 py-2 rounded-lg w-full font-sans' />
                    <input className='absolute right-0 px-6 py-2 rounded-r-lg bg-yellow-600 cursor-pointer font-sans' type="submit" />
                </div>
            </div>
        </div>
    );
};

export default Footer;