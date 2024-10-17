import { getImgUrl } from "../../../../assets/data/getImgUrl";
import Rating from "./Rating";

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
            </div>
        </div>
    )
}

export default Product