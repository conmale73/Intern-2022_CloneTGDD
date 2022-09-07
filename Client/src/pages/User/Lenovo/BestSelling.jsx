import './bestselling.scss';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct/ListProduct';

const products = [ProductCard, ProductCard, ProductCard, ProductCard, ProductCard];
const BestSelling = () => {
    return (
        <section id="banchay" className="wrapperBestSellingLenovo group g4403 bg-bestSellingLenovo">
            <h3>
                <img src="https://cdn.tgdd.vn/2022/06/campaign/Frame-46540-(3)-979x207.png"></img>
            </h3>
            <div className="listproduct-key-bestSellingLenovo">
                <img src="https://cdn.tgdd.vn/2022/06/campaign/deskkfhgkld-1200x330.png"></img>
                <a href="/laptop/lenovo-ideapad-gaming-3-15ihu6-i5-82k10178vn">
                    <b>17.490.000₫</b>
                </a>
                <a href="/laptop/lenovo-ideapad-1-11igl05-n5030-81vt006fvn">
                    <b>6.290.000₫</b>
                </a>
            </div>
            <div className="listProduct-bestSellingLenovo">
                <div className="item-bestSellingLenovo">
                    <ProductCard></ProductCard>
                </div>
                <div className="item-bestSellingLenovo">
                    <ProductCard></ProductCard>
                </div>
                <div className="item-bestSellingLenovo">
                    <ProductCard></ProductCard>
                </div>
                <div className="item-bestSellingLenovo">
                    <ProductCard></ProductCard>
                </div>
                <div className="item-bestSellingLenovo">
                    <ProductCard></ProductCard>
                </div>
            </div>
        </section>
    );
};
export default BestSelling;
