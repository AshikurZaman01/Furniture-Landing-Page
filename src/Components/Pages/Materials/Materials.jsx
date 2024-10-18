import Button from '../../Utils/Button'
import image1 from '../../../assets/images/material1.png';
import image2 from '../../../assets/images/material2.png';
import image3 from '../../../assets/images/material3.png';

const Materials = () => {
    return (
        <section className='section-container my-24'>

            <div className='flex justify-center items-center md:gap-20 gap-8 '>

                <div className='md:w-1/2 mx-auto'>
                    <h3 className='uppercase text-lg font-semibold  text-primary mb-4'>Materials</h3>
                    <p className='capitalize text-4xl font-bold md:w-9/12 leading-snug'>Very serious materials for making furniture</p>

                    <p className='text-secondary dark:text-white my-5 md:w-9/12'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>

                    <Button text="learn more"></Button>
                </div>

                <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>

                    <div>
                        <img src={image1} alt="" className='' />
                        <img src={image2} alt="" className='' />
                    </div>

                    <div className='md:col-span-2 col-span-1'>
                        <img src={image3} alt="" className='md:h-[541px] w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Materials