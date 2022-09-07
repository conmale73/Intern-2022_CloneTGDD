import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, List } from 'react-bootstrap-icons';
import './navbarnews.scss';
function Navbar_news() {
    const options = [
        {
            link: 'new-computer',
            content: 'MỚI NHẤT',
            flag1: true,
            flagnew: false,
            mobile: true,
        },
        {
            link: 'game',
            content: 'SẢN PHẨM MỚI',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'ĐÁNH GIÁ',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'MẸO HAY',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'TƯ VẤN',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'SỰ KIỆN',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'STORIES',
            flag1: false,
            flagnew: true,
            mobile: false,
        },
        {
            link: 'game',
            content: 'KHUYẾN MÃI',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'LAPTOP',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
        {
            link: 'game',
            content: 'GAME/APP',
            flag1: false,
            flagnew: false,
            mobile: false,
        },
    ];
    const [clickTitle, setClickTitle] = useState({
        moinhat: 'sm:border-b-4 sm:border-primary sm:text-primary',
        danghot: 'sm:text-white',
        search: 'sm:text-white',
        list: 'sm:text-white',
    });
    const [hide, setHide] = useState({
        list: false,
        search: false,
    });
    const [countClick, setCountClick] = useState(0);
    return (
        <div className="navNewsWrapper xl:px-6 xl:pr-14 xl:py-1">
            <ul className="menu relative xl:justify-between xl:bg-transparent xl:w-85 sm:bg-black sm:w-full">
                <li
                    className={`itemNews xl:hidden xl:rounded-md flex items-center justify-center sm:h-full xl:h-auto xl:bg-primary sm:px-4 xl:px-1 xl:py-2 sm:w-1/6`}
                >
                    <Link to="/news" className="xl:hidden ">
                        <div className="h-12 w-12 ">
                            <img className="" src="https://cdn.tgdd.vn/2020/05/GameApp/tg000-200x200.png"></img>
                        </div>
                    </Link>
                </li>

                {options.map((item, index) => (
                    <>
                        <li
                            className={
                                item.flag1
                                    ? `itemNews xl:rounded-md flex items-center justify-center ${clickTitle.moinhat} sm:h-full xl:h-auto xl:bg-primary sm:px-4 xl:px-1 xl:w-auto xl:py-2 sm:w-1/4`
                                    : 'itemNews hidden xl:block'
                            }
                            onClick={() =>
                                setClickTitle({
                                    moinhat: 'sm:border-b-4 sm:border-primary sm:text-primary',
                                    danghot: 'sm:text-white',
                                })
                            }
                        >
                            {
                                <Link className="  sm:text-current xl:text-333 " to="/news">
                                    {item.content}
                                    {item.flagnew && <span className="label">Mới</span>}
                                </Link>
                            }
                        </li>
                    </>
                ))}
                <li
                    className={`itemNews text-center xl:hidden sm:blockrounded-md flex items-center justify-center ${clickTitle.danghot} sm:h-full xl:h-auto xl:bg-primary sm:px-4 xl:px-1 xl:py-2 sm:w-1/4`}
                    onClick={() =>
                        setClickTitle({
                            moinhat: 'sm:text-white',
                            search: 'sm:text-white',
                            list: 'sm:text-white',
                            danghot: 'sm:border-b-4 sm:border-primary sm:text-primary',
                        })
                    }
                >
                    <Link className="sm:text-current xl:text-333 " to="#">
                        ĐANG HOT
                    </Link>
                </li>

                <li
                    className={`itemNews ${clickTitle.search} flex items-center justify-center xl:hidden sm:text-white sm:h-full sm:px-4 xl:px-1 xl:py-2 sm:w-1/6`}
                    onClick={() => {
                        setClickTitle({
                            moinhat: 'sm:text-white',
                            danghot: 'sm:text-white',
                            list: 'sm:text-white',
                            search: 'sm:border-b-4 sm:border-primary sm:text-primary',
                        });

                        setHide({ list: false, search: !hide.search });
                        setCountClick(countClick + 1);

                        if (countClick >= 1) {
                            if (!hide.search) {
                            }
                            setClickTitle({
                                search: 'sm:text-white',
                                danghot: 'sm:text-white',
                                list: 'sm:text-white',
                                moinhat: 'sm:border-b-4 sm:border-primary sm:text-primary',
                            });
                            setCountClick(0);
                        }
                    }}
                >
                    <Search className="sm:font-bold sm:text-h2"></Search>
                </li>

                {hide.search && (
                    <div className="mainsearch">
                        <form action="/tin-tuc/tim-kiem" method="get">
                            <input type="text" placeholder="Nhập nội dung cần tìm" name="key"></input>
                            <button type="submit">Tìm kiếm</button>
                        </form>
                        <div className="formspec"></div>
                    </div>
                )}

                <li
                    className={`itemNews ${clickTitle.list} flex items-center justify-center xl:hidden sm:text-white sm:h-full sm:px-4 xl:px-1 xl:py-2 sm:w-1/6`}
                    onClick={() => {
                        setHide({ list: !hide.list, search: false });
                        setClickTitle({
                            moinhat: 'sm:text-white',
                            search: 'sm:text-white',
                            danghot: 'sm:text-white',
                            list: 'sm:border-b-4 sm:border-primary sm:text-primary',
                        });
                        setCountClick(countClick + 1);

                        if (countClick >= 1) {
                            if (!hide.search) {
                            }
                            setClickTitle({
                                search: 'sm:text-white',
                                danghot: 'sm:text-white',
                                list: 'sm:text-white',
                                moinhat: 'sm:border-b-4 sm:border-primary sm:text-primary',
                            });
                            setCountClick(0);
                        }
                    }}
                >
                    <List className="sm:font-bold sm:text-4xl"></List>
                </li>
                <div>
                    {hide.list && (
                        <ul className="rounded-md absolute z-10 top-24 bg-black left-0 w-full mt-3 border-2 border-solid border-gray-100 divide-y-1">
                            {options.map((item, index) => (
                                <li className=" text-2xl text-white mb-2 pt-2 pb-2 pl-3 pr-3">{item.content}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </ul>
            <div className="user-login hidden xl:flex">
                <Link to="/login">
                    <div className="user_login-block">
                        <i className="iconnews-ava-default"></i>
                        <span className="log-in">Đăng kí/Đăng nhập</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar_news;
