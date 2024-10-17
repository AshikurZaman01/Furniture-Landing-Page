import { motion } from 'framer-motion';
import bannerImage from '../../../../src/assets/images/banner.png';
import Products from './Products/Products';

const Shop = () => {
    return (
        <section className='min-h-screen '>
            <div
                className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                }}
            >
                <motion.h1
                    className='text-5xl font-bold'
                    initial={{ opacity: 0, y: -50 }} // Starting position and opacity
                    animate={{ opacity: 1, y: 0 }} // Ending position and opacity
                    transition={{ duration: 0.6 }} // Animation duration
                >
                    Our Shop Products
                </motion.h1>

                <div className='absolute inset-x-0 bottom-0 h-1/3 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'></div>
            </div>

            <div>
                <Products headline="What's Your Choice?"></Products>
            </div>

        </section>
    )
}

export default Shop;
