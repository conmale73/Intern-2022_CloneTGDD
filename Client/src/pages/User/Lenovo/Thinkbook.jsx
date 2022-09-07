import './thinkbook.scss';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct/ListProduct';

const products = [
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
];
const Thinkbook = () => {
    return (
        <section id="thinkbook" className="wrapperThinkbookLenovo group g4403 bg-thinkbookLenovo">
            <h3>
                <img src="https://cdn.tgdd.vn/2022/06/campaign/Frame-46771-1076x235-1.png"></img>
            </h3>

            <div className="listProduct-thinkbookLenovo">
                <ListProduct products={products} isSlide={true}></ListProduct>
            </div>
        </section>
    );
};
export default Thinkbook;
