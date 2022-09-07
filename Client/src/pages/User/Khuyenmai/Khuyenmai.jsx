import { useEffect, useState, useRef } from 'react';
import ProductCard from '~/components/ProductCard';
import Slick from '~/components/Slick';
import axios from 'axios';
import ItemMain from './ItemMain';
import { Link } from 'react-scroll';
import styles from './khuyenmai.module.scss';
import { productService } from '../../../services/product.service';
function Khuyenmai() {
    const options = [
        {
            category: 'dienthoai',
            img: 'https://cdn.tgdd.vn/2022/08/campaign/Dien-thoai-1200x100.png',
            data: [
                {
                    title: 'tatca',
                    Image: '',
                    content: 'Tất cả',
                },
                {
                    title: 'apple',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
                },
                {
                    title: 'samsung',
                    Image: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
                },
                {
                    title: 'Xiaomi',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
                },
                {
                    title: 'Realme',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
                },
                {
                    title: 'Oppo',
                    Image: 'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
                },
                {
                    title: 'Vivo',
                    Image: 'https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
                },
                {
                    title: 'Nokia',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
                },
            ],
        },
        {
            category: 'laptop',
            img: 'https://cdn.tgdd.vn/2022/08/campaign/Laptop-1200x100-2.png',
            data: [
                {
                    title: 'tatca',
                    Image: '',
                    content: 'Tất cả',
                },
                {
                    title: 'Macbook',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png',
                },
                {
                    title: 'acer',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png',
                },
                {
                    title: 'Msi',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png',
                },
                {
                    title: 'hp',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png',
                },
                {
                    title: 'Asus',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png',
                },
                {
                    title: 'Dell',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png',
                },
                {
                    title: 'Lg',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-lg-149x40.png',
                },
            ],
        },
        {
            category: 'tablet',
            img: 'https://cdn.tgdd.vn/2022/08/campaign/May-tinh-bang-1200x100.png',
            data: [
                {
                    title: 'tatca',
                    Image: '',
                    content: 'Tất cả',
                },
                {
                    title: 'apple',
                    Image: 'https://cdn.tgdd.vn/Brand/1/iPad-(Apple)522-b_4.jpg',
                },
                {
                    title: 'alcatel',
                    Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Alcatel_logo_2016.svg/1200px-Alcatel_logo_2016.svg.png',
                },
                {
                    title: 'samsung',
                    Image: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
                },
                {
                    title: 'Lenovo',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
                },

                {
                    title: 'Xiaomi',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
                },
            ],
        },
        {
            category: 'phukien',
            img: 'https://cdn.tgdd.vn/2022/08/campaign/Phu-kien-1200x100-1.png',
            data: [
                {
                    title: 'tatca',
                    Image: '',
                    content: 'Tất cả',
                },
                {
                    title: 'apple',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Apple482-b_37.jpg',
                    content: 'Apple',
                },

                {
                    title: 'samsung',
                    Image: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
                    content: 'Samsung',
                },
                {
                    title: 'Xiaomi',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
                    content: 'Xiaomi',
                },

                {
                    title: 'ava',
                    Image: 'https://cdn.dribbble.com/users/59598/screenshots/3354826/ava-logo.png',
                    content: 'Ava',
                },
                {
                    title: 'Lenovo',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
                    content: 'Lenovo',
                },
            ],
        },
        {
            category: 'smartwatch',
            img: 'https://cdn.tgdd.vn/2022/08/campaign/Dong-ho-thong-minh-1200x100.png',
            data: [
                {
                    title: 'tatca',
                    Image: '',
                    content: 'Tất cả',
                },
                {
                    title: 'apple',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Apple482-b_37.jpg',
                    content: 'Apple',
                },
                {
                    title: 'Lenovo',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
                    content: 'Lenovo',
                },
                {
                    title: 'samsung',
                    Image: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
                    content: 'Samsung',
                },
                {
                    title: 'Xiaomi',
                    Image: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
                    content: 'Xiaomi',
                },

                {
                    title: 'Nokia',
                    Image: 'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
                    content: 'Nokia',
                },
            ],
        },
    ];
    const Menu = [
        {
            link: 'top',
            content: 'Top Deal Sốc',
        },
        {
            link: 'dienthoai',
            content: 'Điện thoại',
        },
        {
            link: 'laptop',
            content: 'Laptop',
        },
        {
            link: 'tablet',
            content: 'Máy tính bảng',
        },
        {
            link: 'phukien',
            content: 'Phụ kiện',
        },
        {
            link: 'smartwatch',
            content: 'Đồng hồ',
        },
    ];

    const [product, setProduct] = useState([]);
    const [productSale, setproductSale] = useState([]);
    const [productPhone, setProductPhone] = useState([]);
    const [productLaptop, setProductLaptop] = useState([]);
    const [productPhukien, setProductPhukien] = useState([]);
    const [productTablet, setProductTablet] = useState([]);
    const [productSmartwatch, setProductSmartwatch] = useState([]);
    const [productAllType, setProductAllType] = useState(false);
    const [category, setCategory] = useState('');
    const [sexdongho, setSexdongho] = useState('male');
    const [checkgetBrand, setCheckgetBrand] = useState(false);
    const [indexClick, setIndexClick] = useState(-1);
    const [scroll, setScroll] = useState(false);
    const [checkClicksex, setCheckClicksex] = useState(false);
    const getPhone = options.filter((item, index) => {
        return item.category === 'dienthoai';
    });
    const getLaptop = options.filter((item, index) => {
        return item.category === 'laptop';
    });
    const getTablet = options.filter((item, index) => {
        return item.category === 'tablet';
    });
    const getPhukien = options.filter((item, index) => {
        return item.category === 'phukien';
    });
    const getDongho = options.filter((item, index) => {
        return item.category === 'smartwatch';
    });
    const hanlesetSex = (gioitinh) => {
        setSexdongho(gioitinh);
    };
    const hanleTatca = () => {
        setProductAllType(!productAllType);
    };
    useEffect(() => {
        const getProductAll = async () => {
            let res = await productService.getAllProducts();
            let resSort = res?.sort((a, b) => -a.discount + b.discount);
            setproductSale(resSort);
        };
        getProductAll();
    }, []);
    useEffect(() => {
        const getProduct = async () => {
            if (category.length === 0) {
                let resdienthoai = await productService.getProductByCategory('dienthoai');
                setProductPhone(resdienthoai);
                let reslaptop = await productService.getProductByCategory('laptop');
                setProductLaptop(reslaptop);
                let restablet = await productService.getProductByCategory('tablet');
                setProductTablet(restablet);
                let resphukien = await productService.getProductByCategory('phukien');
                setProductPhukien(resphukien);
                let ressmartwatch = await productService.getProductByCategorySex('smartwatch', sexdongho);
                setProductSmartwatch(ressmartwatch);
                console.log('gioitinh');
            }
            if (category === 'dienthoai') {
                let resdienthoai = await productService.getProductByCategory('dienthoai');
                setProductPhone(resdienthoai);
            }
            if (category === 'laptop') {
                let reslaptop = await productService.getProductByCategory('laptop');
                setProductLaptop(reslaptop);
            }
            if (category === 'tablet') {
                let restablet = await productService.getProductByCategory('tablet');
                setProductTablet(restablet);
            }
            if (category === 'phukien') {
                let resphukien = await productService.getProductByCategory('phukien');
                setProductPhukien(resphukien);
            }
            if (category === 'smartwatch') {
                let ressmartwatch = await productService.getProductByCategorySex('smartwatch', sexdongho);
                setProductSmartwatch(ressmartwatch);
            }
        };
        getProduct();
    }, [productAllType]);

    const hanldeClickBrand = async (category, itemclick, sex) => {
        // console.log("category",category)
        console.log('itemclick', itemclick);
        // console.log("sex",sex)
        // if(category==="tatca"){
        //     setProductAllType(!productAllType)
        // }
        if (category == 'dienthoai') {
            if (itemclick.title === 'tatca') {
                setProductAllType(!productAllType);
            } else {
                let resdienthoai = await productService.getProductByBrand('dienthoai', itemclick.title);
                setProductPhone(resdienthoai);
            }
            setCategory('dienthoai');
        }
        if (category == 'laptop') {
            if (itemclick.title === 'tatca') {
                setProductAllType(!productAllType);
            } else {
                let reslaptop = await productService.getProductByBrand('laptop', itemclick.title);
                setProductLaptop(reslaptop);
            }
            setCategory('laptop');
        }
        if (category == 'tablet') {
            if (itemclick.title === 'tatca') {
                setProductAllType(!productAllType);
            } else {
                let restablet = await productService.getProductByBrand('tablet', itemclick.title);
                setProductTablet(restablet);
            }
            setCategory('tablet');
        }
        if (category == 'phukien') {
            if (itemclick.title === 'tatca') {
                setProductAllType(!productAllType);
            } else {
                let resphukien = await productService.getProductByBrand('phukien', itemclick.title);
                setProductPhukien(resphukien);
            }
            setCategory('phukien');
        }
        if (category == 'smartwatch') {
            //Click vào tất cả của đồng hồ
            if (itemclick.title === 'tatca') {
                let ressmartwatch = await productService.getProductByCategorySex('smartwatch', sex);
                setProductSmartwatch(ressmartwatch);
            } else {
                //Click vào brand đồng hồ
                let ressmartwatch = await productService.getProductByCategoryBrandSex(
                    'smartwatch',
                    itemclick.title,
                    sex,
                );
                setProductSmartwatch(ressmartwatch);
            }
            // if(Object.keys(itemclick).length===0){

            // }else{

            // }
            setCategory('smartwatch');
            setSexdongho(sex);
        }
    };

    // let lengthProduct = getProductPhone?.length

    // let random=Math.floor(Math.random()*lengthProduct)
    // let randomProduct
    // if(getProductPhone){
    //     randomProduct = getProductPhone?.slice(random,lengthProduct)
    // }else{
    //     randomProduct = product.dienthoai
    // }

    const handleclickMenu = (item, index) => {
        setIndexClick(index);
    };

    useEffect(() => {
        const handleSroll = () => {
            if (document.documentElement.scrollTop > 600) {
                setScroll(true);
                // setIndexClick(-1)
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleSroll);
        return () => window.removeEventListener('scroll', handleSroll);
    }, []);

    return (
        <div>
            <div className="max-w-full h-auto">
                <img src="https://cdn.tgdd.vn/2022/07/campaign/MHD-Desk-1920x680.jpg"></img>
            </div>
            {scroll && (
                <ul className="flex flex-col gap-3 bg-white rounded-lg border-2 p-2 border-white w-[100px] fixed top-[1%] right-[1%]">
                    {Menu.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                activeClass={styles.active}
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className={`cursor-pointer border-1 border-red-600 rounded-lg flex items-center text-center justify-center h-[79px] w-[78px] text-[16px]`}
                            >
                                {item.content}
                            </Link>
                        );
                    })}
                </ul>
            )}
            <div name="top" className="max-w-[1200px] m-auto py-4 my-1">
                <div className="w-full px-[12px] pr-[17px]">
                    <img
                        className="rounded-xl object-fill w-full max-h-[95px]"
                        src="https://cdn.tgdd.vn/2022/08/campaign/Top-dealsoc-1200x95-1.png"
                    ></img>
                </div>
                <Slick className="px-0">
                    {productSale?.map((item) => (
                        <ProductCard {...item}></ProductCard>
                    ))}
                </Slick>
            </div>
            <ItemMain
                name="dienthoai"
                type={getPhone[0]}
                product={productPhone}
                click={hanldeClickBrand}
                clicktatca={hanleTatca}
            ></ItemMain>
            <ItemMain
                name="laptop"
                type={getLaptop[0]}
                product={productLaptop}
                click={hanldeClickBrand}
                clicktatca={hanleTatca}
            ></ItemMain>
            <ItemMain
                name="tablet"
                type={getTablet[0]}
                product={productTablet}
                click={hanldeClickBrand}
                clicktatca={hanleTatca}
            ></ItemMain>
            <ItemMain
                name="phukien"
                type={getPhukien[0]}
                product={productPhukien}
                click={hanldeClickBrand}
                clicktatca={hanleTatca}
            ></ItemMain>
            <ItemMain
                name="smartwatch"
                type={getDongho[0]}
                product={productSmartwatch}
                click={hanldeClickBrand}
                clicktatca={hanleTatca}
            ></ItemMain>
        </div>
    );
}

export default Khuyenmai;
