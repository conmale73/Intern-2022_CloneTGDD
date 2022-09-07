'use strict';
import './search.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard';
import Slick from '../../../components/Slick';
import ListProduct from './../../../components/ListProduct/ListProduct';
import { GeoAlt } from 'react-bootstrap-icons';
function Search() {
    const optionsFillter = [
        {
            id: 1,
            name: 'Nổi bật',
        },
        {
            id: 2,
            name: '% giảm nhiều',
        },
        {
            id: 3,
            name: 'Giá thấp đến cao',
        },
    ];
    const [fillterLocation, setFillterLocation] = useState(false);
    const [checked, setChecked] = useState(1);
    let resultSearch = useSelector((state) => state.search.search.data);
    let products = useSelector((state) => state.products.location.data);
    let product;
    if (fillterLocation) {
        product = resultSearch.filter((item1) => products.find((item2) => item1.location === item2.location));
    } else {
        product = [...resultSearch];
    }
    const handleClickFillter = (e) => {
        // var value = e.options[e.selectedIndex].value;
        // setChecked(value);
        let idSelect = e.target.options[e.target.options.selectedIndex].value;
        console.log(typeof idSelect);
        setChecked(parseInt(idSelect));
    };
    const handlelocation = () => {
        setFillterLocation(!fillterLocation);
    };
    console.log(fillterLocation);
    if (checked === 3) {
        product = product.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }
    if (checked === 1) {
        product = product?.sort((a, b) => -parseInt(a.totalVote) + parseInt(b.totalVote));
    }
    if (checked === 2) {
        product = product?.sort((a, b) => -a.discount + b.discount);
    }
    return (
        <div>
            {/*        
            {resultSearch.map(item=>(
                // <ProductCard {...item}></ProductCard>
                
                
            ))} */}
            <h2 className="phone__content font-semibold text-blue-400 py-4">Tất cả kết quả tìm kiếm</h2>
            <div className="phone__content">
                <div className="flex flex-col items-center px-5 mb-6 pr-[17px]"></div>
                <div className="listcontent">
                    {resultSearch.length > 0 ? (
                        <div className="">
                            <select className="inline-block mb-4" onChange={(e) => handleClickFillter(e)}>
                                {optionsFillter.map((item) => (
                                    // <div>
                                    //     <input type="radio" checked={checked === item.id} onClick={() => handleClickFillter(item.id)} />
                                    //     <label className="mr-4 ml-2">{item.name}</label>
                                    // </div>

                                    <option value={item.id}>{item.name} </option>
                                ))}
                            </select>
                            <div className="flex items-center  cursor-pointer mb-1">
                                <GeoAlt className="text-gray-400"></GeoAlt>
                                <span onClick={handlelocation} className="text-[13px] ml-1 text-blue-400">
                                    {' '}
                                    {fillterLocation
                                        ? 'Không áp dụng vị trí cho sản phẩm'
                                        : 'Áp dụng vị trí cho sản phẩm'}
                                </span>
                            </div>

                            <ListProduct products={product} isSlide={false}></ListProduct>
                        </div>
                    ) : (
                        <h2>Không có sản phẩm này tại hệ thống chúng tôi</h2>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
