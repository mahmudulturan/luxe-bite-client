import PropTypes from 'prop-types'
const Title = ({title,children}) => {
    return (
        <div className='py-10 text-center'>
            <span className='block font-medium'>{title}</span>
            <span className='text-2xl md:text-4xl font-bold uppercase text-primaryCol py-3 text-center shadow-xl px-4 rounded-md'>{children}</span>
        </div>
    );
};
Title.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
}

export default Title;