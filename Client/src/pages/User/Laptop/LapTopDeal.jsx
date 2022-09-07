import Section from '../Home/Section';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct/ListProduct';
import './laptop.scss';
import DealMain from '../../../components/DealMain/DealMain';
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
const LapTopDeal = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=laptop')
            .then((res) => res.json())
            .then((datas) => {
                setData(datas);
            });
    }, []);
    return (
        <div className="blocklist" id="dealsoc">
            <div className="listcontent">
                <DealMain dealShock="Deal Sốc" discount="Giảm Tới 10.000.000đ" isDealMain={true}></DealMain>
                <ListProduct products={data} isSlide={true}></ListProduct>
            </div>
        </div>
    );
};

export default LapTopDeal;
