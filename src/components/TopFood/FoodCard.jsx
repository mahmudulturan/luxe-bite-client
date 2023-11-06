import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { food_name, food_img, food_category, price, _id } = item;
    return (
        <div className='group  overflow-hidden text-center rounded-md'>
            <div className='w-full h-64 relative overflow-hidden'>
                <img className='w-full group-hover:rotate-1 duration-200 h-full object-cover transition-transform transform group-hover:scale-105' src={"https://i.ibb.co/3470rxZ/31817.jpg"} alt={`image of ${food_name}`} />
                <div className='absolute -top-96 group-hover:top-0 flex items-center justify-center w-full h-full bg-slate-600/20 transition-colors duration-500'>
                   <Link to={`/all-item/${_id}`} state={food_name}>
                    <button className='py-2 px-3 bg-primaryCol text-white font-semibold hover:bg-darkSecondary transition-colors ease-in-out duration-500'>Details</button>
                   </Link>
                </div>
            </div>
            <h4 className='font-semibold text-xl md:text-2xl text-center text-primaryCol'>{food_name}</h4>
            <p className='text-black/90 text-sm'>{food_category}</p>
            <p className='font-medium text-base md:text-lg'>${price}</p>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
}

export default FoodCard;