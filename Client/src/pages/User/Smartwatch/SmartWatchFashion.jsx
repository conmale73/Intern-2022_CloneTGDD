import ListProduct from '~/components/ListProduct/ListProduct';
import DealMain from '~/components/DealMain/DealMain';
import ProductCard from '~/components/ProductCard';
import ProductTab from '~/components/ProductTab/ProductTab';
import './smartwatchhotdeal.scss';
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
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
];
const productTab = ['Nổi bật', 'Loa Bluetooth', 'JBL', 'Harman Kardon', 'Sony'];

const SmartWatchFashion = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=watch')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="fashion" className="blocklist">
                <div className="listcontent">
                    <DealMain linkImg="https://cdn.tgdd.vn/2021/08/banner/Tho%CC%9B%CC%80itrang-1200x200.png"></DealMain>
                    <ProductTab productTab={productTab}></ProductTab>
                    <ListProduct products={products}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default SmartWatchFashion;
