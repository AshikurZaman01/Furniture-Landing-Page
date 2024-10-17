
const Products = ({ headline }) => {

    const categories = ['Chair', "Beds", "Sofa", "Lamp"]

    return (
        <div>

            <div className='section-container mx-auto'>
                <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

                {/* category tabs */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full  md:p-2.5 mb-16'>
                    <div className="flex  flex-wrap  sm:flex-row md:justify-between justify-center items-center gap-4">
                        {
                            categories.map((category, indx) => (

                                <button key={indx}
                                    className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors `}>
                                    {category}</button>
                            ))
                        }
                    </div>
                </div>
                {/* category tabs */}
            </div>

        </div>
    )
}

export default Products