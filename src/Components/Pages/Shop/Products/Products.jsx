import { useState } from "react";
import { products } from "../../../../assets/data/products"
import Product from "./Product"
import Button from "../../../Utils/Button";
import btnIcon from "../../../../assets/images/button-icon.png"

const Products = ({ headline }) => {

    const categories = ['Chair', "Beds", "Sofa", "Lamp"];
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const [visibleProducts, setVisibleProducts] = useState(4);

    const filterProducts = products.filter((product) => product.category === selectedCategory);


    const loadMoreProducts = () => {
        setVisibleProducts((preview) => preview + 4);
    }

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
                                    onClick={() => {
                                        setSelectedCategory(category)
                                        setVisibleProducts(4)
                                    }}
                                    className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedCategory === category ? "bg-primary text-white" : "hover:bg-primary Hover:text-white"} `} >
                                    {category}
                                </button>
                            ))
                        }
                    </div>
                </div>
                {/* category tabs */}


                {/* products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        filterProducts.slice(0, visibleProducts).map((product) => <Product key={product.id} product={product}></Product>)
                    }
                </div>
                {/* products */}


                {/* load more btn */}
                {
                    visibleProducts < filterProducts.length && (
                        <div className="flex justify-center mt-10">
                            <button className='text-sm text-primary flex items-center gap-1' 
                            onClick={loadMoreProducts}>
                                Load More
                                <img src={btnIcon} alt="" />
                            </button>
                        </div>
                    )
                }
                {/* load more btn */}

            </div>
        </div>
    )
}

export default Products