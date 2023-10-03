import PropTypes from 'prop-types';
import { FaShareAlt, FaRegBookmark, FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const {_id,author, title, image_url, details, rating, total_view } = news
    return (
        <div className='w-full my-8'>
            <div className='flex justify-between bg-[#F3F3F3] px-3 py-2'>
                <div className='flex items-center gap-5'>
                    <img className='w-10 rounded-full' src={author.img} alt="" />
                    <div className='text-left'>
                        <h2 className='font-semibold text-[#403F3F]'>{author.name}</h2>
                        <p className='font-normal text-[#706F6F] text-sm'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <FaShareAlt></FaShareAlt>
                    <FaRegBookmark></FaRegBookmark>
                </div>
            </div>
            <h2 className='font-bold text-xl text-left my-4'>{title}</h2>
            <img className='w-full' src={image_url} alt="" />
            <p className='text-[#706F6F] font-normal text-sm text-left'>{details}</p>
            <Link to={`/detail/${_id}`}><button className='btn text-[#FF8C47] font-semibold'>see more</button></Link>
            <hr className='border-2 w-[80%] mx-auto my-5' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <p>{rating.number}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegEye></FaRegEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object
};

export default News;