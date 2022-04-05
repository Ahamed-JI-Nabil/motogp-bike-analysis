import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('datas.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className='lg:grid grid-cols-2 gap-4 mt-12 p-8 '>
            {
                datas.map(data => <Review
                key={data.id}
                data={data}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;