import DealMain from '~/components/DealMain/DealMain';
import ProductCard from '~/components/ProductCard';
import ListProduct from '~/components/ListProduct/ListProduct';
import ProductTab from '~/components/ProductTab/ProductTab';
import { useState, useEffect } from 'react';
const productTab = ['Nổi bật', 'Tai nghe', 'Adapter sạc', 'Cáp sạc', 'Ốp lưng'];
const AppleAccessory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=phukien&brand=apple')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="apple" className="blocklist">
                <div className="listcontent">
                    <DealMain linkImg="//cdn.tgdd.vn/2022/03/banner/DESKTOPTagline8-1200x150.png"></DealMain>
                    <ProductTab productTab={productTab}></ProductTab>
                    <ListProduct products={products} isSlide={false}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default AppleAccessory;
