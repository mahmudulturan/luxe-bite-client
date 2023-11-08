import PropTypes from 'prop-types';
import { useState } from 'react';

const BlogCard = ({blog}) => {
    const [textLength, setTextLength] = useState(64)
    const {author, publishDate, blogTitle, blogAnswer} = blog;
    return (
        <div className='flex flex-col justify-items-start bg-secondaryCol py-3 px-4 rounded-md'>
            <div className=''>
            <h3 className='text-xl font-semibold mt-3'>{blogTitle}</h3>
            <div className='flex gap-3 justify-between mb-5 mt-2'>
            <p className='text-xs font-medium'>{publishDate}</p>
            <p className='text-xs font-medium'>{author}</p>
            </div>
            </div>
            <div className=''>
            <p>{blogAnswer.slice(0,textLength)}<span onClick={()=> setTextLength(blogAnswer.length)} className={`font-medium ml-1 text-sm cursor-pointer ${textLength == blogAnswer.length && "hidden"}`}>ReadMore...</span></p>
            
            </div>
        </div>
    );
};

BlogCard.propTypes= {
    blog: PropTypes.object
}

export default BlogCard;