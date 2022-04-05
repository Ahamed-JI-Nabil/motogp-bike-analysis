import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDatas from '../../hooks/useDatas';
import image from '../../images/yzr-m1.jpg'
import Review from '../Review/Review';


const Home = () => {

    const [datas, setDatas] = useDatas()

    const navigate = useNavigate()


    return (
        <div>
            <div className='lg:flex justify-center items-center mt-12'>
                <div className='lg:w-2/4'>
                    <h1 className='text-5xl font-bold ml-8 '>Bike You Have Always <span className='text-indigo-900'>Dreamed About!</span></h1>
                    <p className='p-4 text-indigo-900'>The 2012 Yamaha YZR-M1 1,000cc inline four-cylinder
                        machine will be ridden by factory riders Jorge Lorenzo and Ben Spies, as well as
                        satellite riders Andrea Dovizioso and Cal Crutchlow on the Monster Yamaha Tech 3
                        squad, as they attempt to overturn the Honda supremacy in 2012.</p>
                </div>
                <div className='lg:max-w-2xl pr-6 md:max-w-md p-6'>
                    <img className='rounded-lg' src={image} alt="" />
                </div>
            </div>
            <div className='mt-12'>
                <h1 className="text-4xl font-bold text-indigo-900">Bikers Review({datas.slice(0,3).length})</h1>
                <div className='lg:grid grid-cols-3 gap-4 mt-12 p-8 '>
                    {
                        datas.slice(0, 3).map(data => <Review key={data.id} data={data} ></Review>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className="bg-indigo-700 text-white font-bold py-2 px-8 rounded-lg mb-36">See All Review</button>

            </div>
        </div>
    );
};

export default Home;