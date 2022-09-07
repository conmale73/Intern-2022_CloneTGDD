import BoxSort from '~/components/BoxSort';
import ListProduct from '~/components/ListProduct';

import { useState, useEffect } from 'react';
import './ListProductPc.scss';
import { productService } from '../../../services/product.service'
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory } from '../../../redux/product/productsApi';
import { HandleFilter } from '../../../redux/product/productsApi';

import handleData from '../../../components/Filter/handleData';
import { useParams } from 'react-router-dom';

const dataFake = [
    {
        title: 'Giao nhanh',
        link: '//cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/icon-thunder.png',
    },
    {
        title: 'Giảm giá',
        link: '',
        type: 'giamgia'
    },
    {
        title: 'Góp 0%',
        link: '',
        type: 'tragop'
    },
];
const dataSelected = [
    {
        type: 'Nổi bật'
    },
    {
        type: '% Giảm giá cao'
    },
    {
        type: 'Giá cao đến thấp'
    },
    {
        type: 'Giá thấp đến cao'
    },

]
const ListProducts = (props) => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false)
    const [chose, setChose] = useState(0)
    const [checked, setChecked] = useState([])

    const dispatch = useDispatch();
    // lấý data category
    
   
    
    useEffect(() => {
        // Lấy data từ server
        getAllProductByCategory(dispatch, props.api)
        
    }, [props.api]);
    const dataFilter = useSelector((state) => state?.products?.allProducts?.data)
 
    let getDataFilter= [...dataFilter]
    
    useEffect(() => {
        const getProduct = async () => {
            //let res = await productService.getProductByBrand('dienthoai',props.chose.toLowerCase())
            if (props.chose === '') {
                let res = await productService.getProductByPolicy(props.api, checked.map((item) => (
                    ('&' + item + '=true')
                )).join(''))
                setData(res)
            } else if (props.chose !== '') {
                let res = await productService.getProductByBrand(props.api, props.chose.toLowerCase() + checked.map((item) => (
                    ('&' + item + '=true')
                )).join(''))
                setData(res)
            }
            
        }
        getProduct();
    }, [props.chose, checked])
    if(props.chose !==''){
        getDataFilter= data
      
    }
    useEffect(() => {
            setData(dataFilter)
    }, [dataFilter]);

    useEffect(() => {
        setData(dataFilter)
    }, []);
    //console.log(props.chose);
    const handleClick = (index) => {
        setChose(index)
    }


    if (chose === 3) {
        getDataFilter = (getDataFilter.sort((a, b) => a.price - b.price))
    } else if (chose === 2) {
        getDataFilter = (getDataFilter.sort((a, b) => b.price - a.price))
    } else if (chose === 1) {
        getDataFilter = (getDataFilter.sort((a, b) => b.discount - a.discount))
    }
    if (checked.includes("giamgia")) {
        getDataFilter = getDataFilter.filter(item => item.discount !== 0)
    } else if (checked.includes("tragop")) {
        getDataFilter = getDataFilter.filter(item => item.promotion === "Trả góp 0%")
    }
     else if (checked.includes("new")) {
        getDataFilter = getDataFilter.filter(item => item.new === true)
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
                countProduct={getDataFilter.length}
                title={props.chose}
                checked={checked}
                setChecked={setChecked}
                category={props.category}>
            </BoxSort>
            <div className="watch__content">
                <div className="listcontent">
                    <ListProduct products={getDataFilter} isSlide={false}></ListProduct> 
                </div>
            </div>
        </>
    );
};
export default ListProducts;
