import image from '../../../assets/images/expricences.png'
import Button from '../../Utils/Button'

const Experiences = () => {
    return (
        <section className='section-container my-24'>

            <div className='flex justify-center items-center md:gap-20 gap-8 '>
                <div className='md:w-1/2 md:h-[541px]'>
                    <img src={image} alt="" className='h-full w-full' />
                </div>

                <div className='md:w-1/2 mx-auto'>
                    <h3 className='uppercase text-lg font-semibold  text-primary mb-4'>experiences</h3>
                    <p className='capitalize text-4xl font-bold md:w-9/12 leading-snug'>we provide you the best experience</p>

                    <p className='text-secondary dark:text-white my-5 md:w-9/12'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

                    <Button text="learn more"></Button>

                </div>
            </div>

        </section>
    )
}

export default Experiences