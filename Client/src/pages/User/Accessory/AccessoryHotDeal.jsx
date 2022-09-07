import ListProduct from '~/components/ListProduct/ListProduct';
import DealMain from '~/components/DealMain/DealMain';
import ProductCard from '~/components/ProductCard';
import { useState, useEffect } from 'react';

const AccessoryHotDeal = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="dealsoc" className="blocklist">
                <div className="listcontent block__gaming" style={{ backgroundColor: '#a10026' }}>
                    <DealMain
                        linkImg="https://cdn.tgdd.vn/2022/04/banner/DESKTOPTagline11-1200x100-6.png"
                        discount="50%"
                    ></DealMain>
                    <ListProduct products={products} isSlide={true}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default AccessoryHotDeal;
