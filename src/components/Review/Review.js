import React from 'react';

const Review = (props) => {
    const {name, comment, img} = props.data
    return (
        <div className='border-neutral-900 outline outline-offset-2 outline-1 outline-indigo-900 rounded-lg border-solid mt-4 '>
            <img className='w-1/5 rounded-full ml-24 mt-4' src={img} alt="" />
            <h1 className='text-xl font-semibold'>{name}</h1>
            <p>{comment}</p>
        </div>
    );
};

export default Review;