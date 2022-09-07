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
const productTab = ['Nổi bật', 'Chuột', 'Bàn phím', 'Tai nghe', 'Webcam'];
const Gaming = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=accessory')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="gaming" className="blocklist" style={{ backgroundColor: '#f1f1f1' }}>
                <div className="listcontent">
                    <DealMain linkImg="https://cdn.tgdd.vn/2022/03/banner/DESKTOPTagline7-1200x138.png"></DealMain>
                    <ProductTab productTab={productTab}></ProductTab>
                    <ListProduct products={products} isSlide={false}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default Gaming;
