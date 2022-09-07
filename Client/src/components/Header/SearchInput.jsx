import { Search } from '../Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect, useRef } from 'react';
import { getResult, removeResult } from '../../redux/search/searchApi';
import { useDispatch, useSelector } from 'react-redux';
import numberWithCommas from '../../utils/numberWithCommas';
import useDebound from './../../hooks/useDebound';
import { Link, useNavigate } from 'react-router-dom';
import './header.module.scss';
function SearchInput(props) {
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [checknull, setChecknull] = useState(false);
    const dispatch = useDispatch();
    let keySearch = useDebound(value, 500);
    const inputRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        if (keySearch.length === 0) {
            // removeResult(dispatch)
            setShowResult(false);
            return;
        }
        setShowResult(true);
        setChecknull(false);
        getResult(dispatch, keySearch);
    }, [keySearch]);
    let resultSearch = useSelector((state) => state.search.search.data);

    const handleText = (e) => {
        setValue(e.target.value);
        if (value.length < 1) {
            setShowResult(false);
        } else {
            setShowResult(true);
        }
    };
    const hideResultSearch = () => {
        setValue('');
        setShowResult(false);
    };
    const config = {
        dienthoai: 'dienthoai',
        điệnthoại: 'dienthoai',
        maytinhbang: 'tablet',
        máytínhbảng: 'tablet',
        tablet: 'tablet',
        phukien: 'accessory',
        phụkiện: 'accessory',
        accessory: 'accessory',
        dongho: 'watch',
        đồnghồ: 'watch',
        watch: 'watch',
        laptop: 'laptop',
        donghothongminh: 'smartwatch',
        đồnghồthôngminh: 'smartwatch',
        smartwatch: 'smartwatch'
    };

    function match(input, obj) {
        var matched = Object.keys(obj).find((key) => input.toLowerCase().search(key) > -1);
        return obj[matched] || null;
    }

    //console.log(match('cats wea dogs', config));
    const hanleClickSearch = (e) => {
        e.preventDefault();
        let getValue = value.replace(/\s/g, '');
        let url = match(getValue, config);
        if (url === null) {
            getResult(dispatch, value);
            console.log(value);
            hideResultSearch();
            navigate(`tim-kiem`);
        }
        if (url !== null) {
            hideResultSearch();
            navigate(url);
            return;
        }
    };

    // useEffect(()=>{

    //     const hanleEnter = (event)=>{
    //         if (event.code === 'Enter') {
    //             // hanleClickSearch()
    //             console.log(value)
    //         }
    //     }
    //     console.log("coponent mount")
    //     window.addEventListener("keypress", hanleEnter);
    // },[])
       // Đóng khi click ra ngoài
       const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowResult(false)
                }
            };
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        });
    };
 
    return (
        <div className="w-[28%]">
            <label
                htmlFor="default-search"
                className="mb-2 text-xl font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <form className="relative outline-none" onSubmit={hanleClickSearch}>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none outline-none">
                    <Search ref={inputRef}/>
                </div>
                <Tippy
                    interactive
                    visible={showResult && resultSearch.length > 0}
                    duration={50}
                    onClickOutside={()=>setShowResult(false)}
                    placement="bottom"
                    content={
                        <div className="bg-white  min-h-auto max-h-[265px] rounded-lg flex flex-col gap-2 z-10 overflow-y-auto">
                            {resultSearch.length === 0 &&(<h2>Không có sản phẩm trong hệ thống chúng tôi</h2>)}

                            {resultSearch.map((item) => (
                                <Link
                                    to={`${item.category}/${item.slug}`}
                                    className="flex items-center justify-between gap-5 p-3"
                                    onClick={hideResultSearch}
                                >
                                    <div className="w-[45px] h-[45px] rounded-lg">
                                        <img src={item.img}></img>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className="text-[13px] font-semibold align-middle text-black">
                                            {item.title}
                                        </div>
                                        <div className="flex gap-3 items-end">
                                            <div className="text-[12px] text-red-400">
                                                {numberWithCommas(item.price * (1 - item.discount))}đ
                                            </div>
                                            <span className="line-through text-[11px] ">
                                                {numberWithCommas(item.price)}đ
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-gray-500">Quà 100.000đ</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    }
                >
                    <input
                        type="search"
                        id="default-search"
                        className="block p-4 pl-12 w-full text-xl text-gray-900 rounded-lg dark:placeholder-gray-400 dark:text-white outline-none border-none"
                        placeholder="Bạn tìm gì..."
                        required
                        autoComplete="off"
                        value={value}
                        onChange={handleText}
                        onFocus={()=>{setShowResult(true)}}
                    />
                </Tippy>
                <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 bg-[#ffbc06] hover:bg-[#ffac0a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    // onClick={hanleClickSearch}
                >
                    Tìm kiếm
                </button>
            </form>
        </div>

        //      {resultSearch.length > 1  && showResult && (
        //         <div className='bg-white w-[328px] rounded-lg flex flex-col gap-2 absolute top-[106%] left-[1.2%] z-10 overflow-y-auto'>
        //             {/* {resultSearch.length === 0 &&(<h2>Không có sản phẩm trong hệ thống chúng tôi</h2>)} */}

        //             { resultSearch.map(item=>(
        //                   <Link to={item.url} className='flex items-center justify-between gap-5 p-3' onClick={hideResultSearch}>
        //                      <div className='w-[45px] h-[45px] rounded-lg'>
        //                          <img src={item.img}></img>
        //                      </div>
        //                      <div className='flex flex-col w-full'>
        //                          <div className='text-[13px] font-semibold align-middle '>{item.title}</div>
        //                          <div className='flex gap-3 items-end'>
        //                              <div className='text-[12px] text-red-400'>{numberWithCommas(item.price*(1-item.discount))}đ</div>
        //                              <span className='line-through text-[11px] '>{numberWithCommas(item.price)}đ</span>
        //                          </div>
        //                          <div className='text-[11px]'>Quà 100.000đ</div>
        //                      </div>
        //                    </Link>
        //             ))}
        //        </div>
        //  )}
    );
}

export default SearchInput;
