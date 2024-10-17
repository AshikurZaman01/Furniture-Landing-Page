import { motion } from 'framer-motion';
import bannerImage from '../../../../../src/assets/images/banner.png';

const Hero = () => {
    return (
        <div
            className="h-screen relative"
            style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <motion.div
                className="relative z-10 flex items-center justify-center h-full text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <div className="md:w-3/4 lg:w-1/2 px-6 mx-auto space-y-6">
                    <motion.h1
                        className="text-4xl lg:text-5xl font-semibold lg:leading-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Make your interior more minimalistic & modern
                    </motion.h1>
                   
                    <motion.p
                        className="text-lg lg:text-xl bg-gradient-to-r from-[#E58411] to-white bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Turn your room with panto into a lot more minimalist and modern with ease and speed.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
