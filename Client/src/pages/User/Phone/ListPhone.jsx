import BoxSort from '~/components/BoxSort';
import ListProduct from '~/components/ListProduct';
import ProductCard from '~/components/ProductCard';
import './phone.scss';
import { useEffect, useState } from 'react';
import { productService } from '../../../services/product.service';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory } from '../../../redux/product/productsApi';
import handleData from '../../../components/Filter/handleData';
const dataFake = [
    {
        title: 'Giao nhanh',
        link: '//cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/icon-thunder.png',
    },
    {
        title: 'Giảm giá',
        link: '',
        type: 'giamgia',
    },
    {
        title: 'Góp 0%',
        link: '',
        type: 'tragop',
    },
    {
        title: 'Độc quyền',
        link: '',
        type: 'docquyen',
    },
    {
        title: 'Mới',
        link: '',
        type: 'new',
    },
];
const dataSelected = [
    {
        type: 'Nổi bật',
    },
    {
        type: '% Giảm giá cao',
    },
    {
        type: 'Giá cao đến thấp',
    },
    {
        type: 'Giá thấp đến cao',
    },
];
const ListPhone = (props) => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [chose, setChose] = useState(0);
    const [checked, setChecked] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getAllProductByCategory(dispatch, 'dienthoai');
    }, []);
    const dataFilter = useSelector((state) => state?.products?.allProducts?.data);
    const filter = useSelector((state) => state.products.filter.data);

    let dataAfter = dataFilter;
    if (filter.length !== 0) {
        dataAfter = handleData(dataFilter, filter);
    }
    let getDataFilter = data;
    let typeFilter = checked.concat(props.chose);
    useEffect(() => {
        const getProduct = async () => {
            //let res = await productService.getProductByBrand('dienthoai',props.chose.toLowerCase())
            if (props.chose === '') {
                let res = await productService.getProductByPolicy(
                    'dienthoai',
                    checked.map((item) => '&' + item + '=true').join(''),
                );
                setData(res);
            } else if (props.chose !== '') {
                let res = await productService.getProductByBrand(
                    'dienthoai',
                    props.chose.toLowerCase() + checked.map((item) => '&' + item + '=true').join(''),
                );
                setData(res);
            }
        };
        getProduct();
    }, [props.chose, checked]);

    console.log(typeFilter);

    

  
    useEffect(() => {
        fetch(`https://json.msang.repl.co/products?category=dienthoai`)
            .then((res) => res.json())
            .then((datas) => {
                setData(datas);
            });
    }, []);
    const handleClick = (index) => {
        setChose(index);
    };
    if (chose === 3) {
        getDataFilter = getDataFilter.sort((a, b) => a.price - b.price);
    } else if (chose === 2) {
        getDataFilter = getDataFilter.sort((a, b) => b.price - a.price);
    } else if (chose === 1) {
        getDataFilter = getDataFilter.sort((a, b) => b.discount - a.discount);
    }
    if (checked.includes('giamgia')) {
        getDataFilter = getDataFilter.filter((item) => item.discount !== 0);
    } else if (checked.includes('tragop')) {
        getDataFilter = getDataFilter.filter((item) => item.promotion === 'Trả góp 0%');
    }
    return (
        <>
            <BoxSort
                data={dataFake}
                onclick={handleClick}
                dataSelected={dataSelected}
                selected={selected}
                setSelected={setSelected}
                chose={chose}
                countProduct={props.isOpen === false ? getDataFilter.length : dataAfter.length}
                title={props.chose}
                checked={checked}
                setChecked={setChecked}
                category='Điện thoại'>
                </BoxSort>
            <div className="phone__content">
                <div className="listcontent">
                    {props.isOpen === false ? (
                        <ListProduct products={getDataFilter} isSlide={false}></ListProduct>
                    ) : (
                        <ListProduct products={dataAfter} isSlide={false}></ListProduct>
                    )}
                </div>
            </div>
        </>
    );
};
export default ListPhone;
