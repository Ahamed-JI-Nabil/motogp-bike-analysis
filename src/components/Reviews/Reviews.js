import useDatas from '../../hooks/useDatas';
import Review from '../Review/Review';

const Reviews = () => {

    const [datas, setDatas] = useDatas()


    return (

        <div>
            <h1 className='text-4xl mt-12'>What Best Bikers Of The World Say!</h1>
            <div className='lg:grid grid-cols-2 gap-4 mt-4 p-8 '>
                {
                    datas.map(data => <Review
                        key={data.id}
                        data={data}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;