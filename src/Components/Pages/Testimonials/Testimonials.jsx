import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { reviews } from '../../../assets/data/reviews';
import Rating from '../Shop/Products/Rating';

const Testimonials = () => {
    return (
        <div className='section-container px-4 sm:px-6 md:px-8 lg:px-12'>
            <div className='text-center mb-6 sm:mb-8 md:mb-12'>
                <h3 className='uppercase text-sm sm:text-base md:text-lg font-semibold text-primary mb-2 sm:mb-3 md:mb-4'>Testimonials</h3>
                <h2 className='capitalize text-xl sm:text-2xl md:text-4xl font-bold mb-4'>Our Client Reviews</h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide 
                        key={index} 
                        style={{ backgroundImage: `url(${review.coverImg})` }} 
                        className='bg-no-repeat bg-cover bg-center'
                    >
                        <div className='h-[400px] sm:h-[450px] md:h-[500px] lg:h-[547px] border flex justify-center items-center p-4 sm:p-5 md:p-6'>
                            <div className='bg-white border rounded-xl w-full sm:w-11/12 md:w-4/5 lg:w-3/4 p-4 relative'>
                                <img 
                                    src={review.image} 
                                    alt="" 
                                    className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 absolute -top-8 left-1/2 transform -translate-x-1/2 ring-2 ring-primary object-cover rounded-full' 
                                />
                                <div className='mt-10 sm:mt-12 md:mt-16 text-center'>
                                    <h3 className='text-base sm:text-lg font-semibold text-black'>{review.name}</h3>
                                    <p className='text-xs sm:text-sm md:text-base text-gray-600 mb-2'>Verified Customer</p>
                                    <p className='text-xs sm:text-sm md:text-base text-gray-500 mb-4'>{review.review}</p>
                                    <div className='flex justify-center'>
                                        <Rating rating={review.rating} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
