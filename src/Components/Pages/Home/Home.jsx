import WhyChoose from "../../WhyChoose/WhyChoose";
import Products from "../Shop/Products/Products";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero />

            <WhyChoose></WhyChoose>

            <Products headline="Best Selling Products"></Products>
        </div>
    );
};

export default Home;