import { motion } from 'framer-motion';
import bannerImage from '../../../../../src/assets/images/banner.png';
import Searchbar from './Searchbar';

const Hero = () => {
    return (
        <div
            className="h-screen relative bg-cover bg-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* image blur effect */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <motion.div
                className="relative z-10 flex items-center justify-center h-full text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <div className="md:w-3/4 lg:w-1/2 px-6 mx-auto space-y-6">
                    <motion.h1
                        className="text-4xl lg:text-5xl font-extrabold lg:leading-tight tracking-wide shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Make your interior more minimalistic & modern
                    </motion.h1>

                    <motion.p
                        className="text-lg lg:text-xl bg-gradient-to-r from-[#E58411] to-white bg-clip-text text-transparent shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Transform your space into a minimalist haven with ease and speed.
                    </motion.p>

                    <Searchbar />

                    <motion.button
                        className="mt-4 bg-[#E58411] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#C4730F] transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        Explore Now
                    </motion.button>
                </div>
            </motion.div>

            {/* bottom blur effect */}
            <div className='absolute inset-x-0 bottom-0 h-1/3 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'></div>
        </div>
    );
};

export default Hero;
