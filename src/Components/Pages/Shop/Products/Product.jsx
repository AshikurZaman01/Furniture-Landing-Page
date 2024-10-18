import { FaPlus } from "react-icons/fa6";
import { getImgUrl } from "../../../../assets/data/getImgUrl";
import Rating from "./Rating";
import { CiCirclePlus } from "react-icons/ci";

const Product = ({ product }) => {

    const { name, category, price, imageUrl, rating } = product || {};

    return (
        <div>
            <div className="bg-[#FAFAFA]">
                <img src={getImgUrl(`${imageUrl}`)} alt="" />
            </div>

            <div className="p-6 bg-white dark:bg-black shadow-sm">
                <h4 className="text-base mb-1">{category}</h4>
                <h3 className="font-semibold text-xl mb-2">{name}</h3>
                <Rating rating={rating}></Rating>

                <div className="mt-5 flex justify-between items-center ">
                    <p className="text-secondary dark:text-white font-bold text-lg">
                        <sup>$</sup>
                        <span>
                            {product.price}
                        </span>
                    </p>

                    <button><FaPlus className="text-3xl text-white bg-secondary rounded-full border-none p-2 hover:bg-[#4A4A4A]" /></button>

                </div>
            </div>
        </div>
    )
}

export default Product