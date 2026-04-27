import React from 'react';
import oppsImage from '../../assets/404Page.png'

const Error = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
           <figure className='max-w-200 '>
             <img className='rounded-xl' src={oppsImage} alt="404 image" />
           </figure>
        </div>
    );
};

export default Error;