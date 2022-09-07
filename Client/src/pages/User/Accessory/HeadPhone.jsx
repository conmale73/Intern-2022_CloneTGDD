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
const productTab = ['Nổi bật', 'Bluetooth', 'Apple', 'Không dây - True Wireless', 'Sony'];
const HeadPhone = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=phukien&nameType=tainghe')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="headphone" className="blocklist">
                <div className="listcontent">
                    <DealMain linkImg="https://cdn.tgdd.vn/2022/03/banner/DESKTOPTagline4-1200x150.png"></DealMain>
                    <ProductTab productTab={productTab}></ProductTab>
                    <ListProduct products={products} isSlide={false}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default HeadPhone;
