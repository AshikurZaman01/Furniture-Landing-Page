import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {

    const totalStars = 5;

    return (
        <div className='flex space-x-1'>
            {
                Array.from({ length: totalStars }, (_, index) => {
                    const starIndex = index + 1;
                    return starIndex <= rating ?
                        (<FaStar key={index} className='text-yellow-500' />)
                        :
                        (<FaRegStar key={index} />)
                })
            }
        </div>
    )
}

export default Rating