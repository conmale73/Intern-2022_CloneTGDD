import DealMain from '../../../components/DealMain/DealMain';
import ListProduct from '../../../components/ListProduct/ListProduct';
import './laptop.scss';
import ProductCard from '../../../components/ProductCard';
import { useEffect, useState } from 'react';
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
const Office = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=laptop')
            .then((res) => res.json())
            .then((datas) => {
                setData(datas);
            });
    }, []);
    return (
        <div id="office" className="blocklist">
            <div className="listcontent">
                <DealMain linkImg="https://cdn.tgdd.vn/2022/05/banner/banner-phan-mem-1200x200-1200x200.png"></DealMain>
                <ListProduct products={data} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};

export default Office;
