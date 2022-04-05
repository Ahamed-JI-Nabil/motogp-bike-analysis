import useDatas from '../../hooks/useDatas';
import Review from '../Review/Review';

const Reviews = () => {

    const [datas, setDatas] = useDatas()    


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