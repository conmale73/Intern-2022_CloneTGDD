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
const Gaming = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=laptop')
            .then((res) => res.json())
            .then((datas) => {
                setData(datas);
            });
    }, []);
    return (
        <div id="gaming" className="blocklist">
            <div className="listcontent block__gaming">
                <DealMain linkImg="https://cdn.tgdd.vn/2021/08/banner/gamingdes-1200x200.jpg"></DealMain>
                <ListProduct products={data} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};

export default Gaming;
