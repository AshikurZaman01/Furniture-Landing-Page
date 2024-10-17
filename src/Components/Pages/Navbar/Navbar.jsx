import Logo from './Logo'
import MenuItems from './MenuItems/MenuItems'
import CartBtn from './CartBtn'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [isScrolled, setIsScrolles] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolles(true)
            } else {
                setIsScrolles(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${isScrolled ? 'bg-white shadow-md ' : 'bg-transparent text-white'}`}>
            <nav className='max-w-screen-xl container  mx-auto flex justify-between items-center  px-4'>

                <Logo></Logo>

                <MenuItems></MenuItems>

                <CartBtn></CartBtn>

            </nav>
        </div>
    )
}

export default Navbar