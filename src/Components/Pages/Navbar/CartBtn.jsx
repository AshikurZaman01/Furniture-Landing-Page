import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const CartBtn = () => {
    return (
        <div className='hidden md:block cursor-pointer relative'>
            <FaShoppingBag className='text-xl' />
            <sup className='absolute top-0 -right-3 bg-primary text-white w-5 h-5  rounded-full flex items-center justify-center text-xs'>0</sup>
        </div>
    )
}

export default CartBtn