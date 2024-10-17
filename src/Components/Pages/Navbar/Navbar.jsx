import React from 'react'
import Logo from './Logo'
import MenuItems from './MenuItems/MenuItems'
import CartBtn from './CartBtn'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out text-white'>
            <nav className='max-w-screen-xl container  mx-auto flex justify-between items-center  px-4'>

                <Logo></Logo>

                <MenuItems></MenuItems>

                <CartBtn></CartBtn>

            </nav>
        </div>
    )
}

export default Navbar