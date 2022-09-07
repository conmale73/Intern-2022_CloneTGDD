import { useEffect, useState } from 'react';
import ListProduct from '../../../../components/ListProduct';
import './ListProductWatch.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory } from '../../../../redux/product/productsApi';
import handleData from '../../../../components/Filter/handleData';

function ListProductWatch({}) {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllProductByCategory(dispatch, 'watch');
    }, []);
    const data = useSelector((state) => state?.products?.allProducts?.data);
    const filter = useSelector((state) => state.products.filter.data);

    let dataAfter = data;
    if (filter.length !== 0) {
        dataAfter = handleData(data, filter);
    }

    return (
        <div className="watch__content">
            <div className="listcontent">
                <ListProduct products={dataAfter} isSlide={false}></ListProduct>
            </div>
        </div>
    );
}

export default ListProductWatch;
