import DealMain from '~/components/DealMain/DealMain';
import ProductCard from '~/components/ProductCard';
import ListProduct from '~/components/ListProduct/ListProduct';
import ProductTab from '~/components/ProductTab/ProductTab';
import { useState, useEffect } from 'react';
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
];
const productTab = ['Nổi bật', 'Loa Bluetooth', 'JBL', 'Harman Kardon', 'Sony'];
const LoudSpeaker = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=accessory')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="loudspeaker" className="blocklist">
                <div className="listcontent">
                    <DealMain linkImg="https://cdn.tgdd.vn/2022/03/banner/DESKTOPTagline5-1200x147-1.png"></DealMain>
                    <ProductTab productTab={productTab}></ProductTab>
                    <ListProduct products={products} isSlide={false}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default LoudSpeaker;
