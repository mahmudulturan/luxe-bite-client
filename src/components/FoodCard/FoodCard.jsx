import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {food_name, food_img, food_category, price, stock_quantity, _id} = item;

    return (
        <div className="bg-secondaryCol/60 rounded-lg px-6 py-4">
            <img src={"https://i.ibb.co/3470rxZ/31817.jpg" || food_img} className='w-96 h-52 object-cover' alt="" />
            <div className='flex items-center justify-between gap-6 my-5'>
            <div className='flex-1'>
            <h1 className='text-xl font-semibold'>{food_name}</h1>
            <div className='my-2 flex justify-between w-full'>
            <p className='inline text-sm'>{food_category}</p>
            <p className='inline font-medium text-lg'>${price}</p>
            </div>
            <p>Available Quantity: <span className='font-medium'>{stock_quantity}</span></p>
            </div>
            <div className=''>
                <Link to={`/all-item/${_id}`}>
                <button className='py-2 px-4 bg-primaryCol text-white font-medium hover:bg-darkSecondary transition-colors duration-200'>Details</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
}

export default FoodCard;