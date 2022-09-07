import BoxSort from '~/components/BoxSort';
import ListProduct from '~/components/ListProduct';
import ProductCard from '~/components/ProductCard';
import { useState, useEffect } from 'react';
import './ListProductWatch.scss';
import { productService } from '../../../../services/product.service'
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory, updateAllProducts } from '../../../../redux/product/productsApi';
import { HandleFilter } from '../../../../redux/product/productsApi';

import handleData from '../../../../components/Filter/handleData';
import { useParams } from 'react-router-dom';
import handleRoute from './handleRoute';
import handleData2 from '../../../../components/Filter/handleData2';
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
    {
        title: 'Mới',
        link: '',
        type: 'new'
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
    const { slug } = useParams();
    // lấý data category
    const dataFilter = useSelector((state) => state?.products?.allProducts?.data)
    // lấy key filter
    const filter = useSelector((state) => state.products.filter.data)
    
    let dataAfter=[...dataFilter]
    if (filter?.length > 0) {
         dataAfter = handleData(dataFilter, filter)
        
    }
   
    useEffect(() => {
        // Lấy data từ server
        getAllProductByCategory(dispatch, props.api)
       
       if(slug){
        if(slug==='tat-ca');
        // else if(slug.includes('hang')){
        //     const brand = slug.split('-')
           
        //     const temp =  dataAfter.filter((src)=>{
        //          console.log(src.brand,brand[1])
        //         return src.brand == brand[1]
        //     })
        //     dataAfter=[...temp]
            
        // }
        else{
            let keyWord 
            if(slug.includes('hang')){
                const brand = slug.split('-')
                keyWord = handleRoute(brand[1],true)
            }
            else{
                // Lấy slug thêm vào redux để filter
                keyWord = handleRoute(slug,false)
            }
                
                // Thêm vào redux
            HandleFilter(dispatch,keyWord)

        }
          
        }
    }, []);
   
 
    let getDataFilter=dataAfter

 
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

    dataAfter= getDataFilter
    return (
        <>
            <BoxSort
                data={dataFake}
                onclick={handleClick}
                dataSelected={dataSelected}
                selected={selected}
                setSelected={setSelected}
                chose={chose}
                countProduct={dataAfter?.length}
                title={props.chose}
                checked={checked}
                setChecked={setChecked}
                category={props.category}>
            </BoxSort>
            <div className="watch__content">
                <div className="listcontent">
                    
                         <ListProduct products={dataAfter} isSlide={false}></ListProduct> 
     
                </div>
            </div>
        </>
    );
};
export default ListProducts;
