import React from 'react'
import Logo from './Logo'
import MenuItems from './MenuItems/MenuItems'
import CartBtn from './CartBtn'

const Navbar = () => {
    return (
        <div>
            <nav className='max-w-screen-xl container  mx-auto flex justify-between items-center py-6 px-4'>

                <Logo></Logo>

                <MenuItems></MenuItems>

                <CartBtn></CartBtn>

            </nav>
        </div>
    )
}

export default Navbar