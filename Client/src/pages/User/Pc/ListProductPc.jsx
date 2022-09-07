import { useEffect, useState } from 'react';
import ListProduct from '../../../components/ListProduct';
import './ListProductPc.scss';
function ListProductPc({}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/products?category=dienthoai')
            .then((res) => res.json())
            .then((datas) => {
                setData(datas);
            });
    }, []);

    return (
        <div className="pc__content">
            <div className="listcontent">
                <ListProduct products={data} isSlide={false}></ListProduct>
            </div>
        </div>
    );
}

export default ListProductPc;
