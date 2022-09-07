import ListProduct from '~/components/ListProduct/ListProduct';
import DealMain from '~/components/DealMain/DealMain';
import ProductCard from '~/components/ProductCard';

import { useState, useEffect } from 'react';

//?category=smartwatch
const SmartWatchHotDeal = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div id="dealsoc" className="blocklist">
                <div className="listcontent content__smartwatch" style={{ backgroundColor: '#fb6e2e' }}>
                    <DealMain dealShock="Deal sốc" discount="giảm tới 49%" isDealMain="true"></DealMain>
                    <ListProduct products={products} isSlide={true}></ListProduct>
                </div>
            </div>
        </>
    );
};
export default SmartWatchHotDeal;
