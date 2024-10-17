import Button from "../Utils/Button"
import btnIcon from "../../assets/images/button-icon.png"

const WhyChoose = () => {
    return (
        <div>
            <section className="section-container">

                <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center md:gap-12 gap-8 text-left">
                    <div>
                        <h2 className="text-4xl font-bold"> Why <br /> Choosing Us</h2>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>

                        <Button icon={btnIcon} text="More Info"></Button>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>

                        <Button icon={btnIcon} text="More Info"></Button>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>

                        <Button icon={btnIcon} text="More Info"></Button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default WhyChoose