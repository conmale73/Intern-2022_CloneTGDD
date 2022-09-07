import { useEffect, useState } from 'react';

import TopBanner from './TopBanner';
import Filter from '../../../components/Filter/Filter';
import Collection from './Collection';
import TypeMain from './TypeMain';
import LineStrap from './LineStrap';
import Social from './Social';
import Brand from './Brand';
import ListProductWatch from './PageFilter/ListProductWatch';
import ListProducts from './PageFilter/ListProducts';

function Watch({ title }) {
    const [isOpen, setisOpen] = useState(false);
    const [chose, setChose] = useState('')

    useEffect(() => {
        document.title = title;
        document.body.style.backgroundColor = 'white';
    }, []);
    const images = [
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-14.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-168.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-169.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-170.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-15.png',
        'https://cdn.tgdd.vn/2022/07/banner/Layer-1-800x200.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-72.png',
        'https://cdn.tgdd.vn/2022/07/banner/Layer-2-800x200.png',
    ];
    const Img = () => {
        return images.map((src, index) => {
            return (
                <a href="/#" key={index}>
                    <img src={src} />
                </a>
            );
        });
    };
    const img1 = {
        img: 'https://cdn.tgdd.vn/2022/06/banner/2-390x97.png',
        link: '/#',
    };
    const img2 = {
        img: 'https://cdn.tgdd.vn/2022/06/banner/3-390x97.png',
        link: '/#',
    };
    const handle = (bolen) => {
        setisOpen(bolen);
    };
    const data = [
        {
            id: 1,
            title: 'Hãng',
            detail: ['Orrient','Mvw','Elle','Casio','Esprit','Citizen','Nakzen','Dkny'],
            img: ['https://cdn.tgdd.vn/Brand/1/ORIENTl-220x48.jpg',
                'https://cdn.tgdd.vn/Brand/1/MVW7264-b_58.jpg','https://cdn.tgdd.vn/Brand/1/Frame9-220x48.jpg',
            'https://cdn.tgdd.vn/Brand/1/Casio7264-b_39.jpg','https://cdn.tgdd.vn/Brand/1/Frame3-220x48.jpg','https://cdn.tgdd.vn/Brand/1/Citizen7264-b_41.jpg',
            'https://cdn.tgdd.vn/Brand/1/NAKZENl-220x48.png','https://cdn.tgdd.vn/Brand/1/Frame11-220x48.jpg'],
        },
        {
            id: 2,
            title: 'Giá',
            detail: [
                'Dưới 1 triệu',
                'Từ 1-2 triệu',
                'Từ 2-5 triệu',
                'Từ 5-10 triệu',
                'Trên 10 triệu',
            ],
        },
        {
            id: 3,
            title: 'Giới tính',
            detail: ['Nam', 'Nữ', 'Cặp đôi', 'Unisex', 'Trẻ em'],
        },
        {
            id: 4,
            title: 'Đường kính mặt',
            detail: ['30mm', '32mm', '35mm'],
        },
        {
            id: 5,
            title: 'Màu mặt',
            detail: ['Bạc', 'Cam', 'Đỏ', 'Đen', 'Vàng', 'Tím', 'Trắng', 'Hồng', 'Xanh lá','Xanh', 'Xám'],
        },
        {
            id: 6,
            title: 'Chất liệu mặt kính',
            detail: ['Kính Sapphiere', 'Kính khoảng', 'Kính nhựa'],
        },
        {
            id: 7,
            title: 'Loại mặt số',
            detail: ['Kim', 'Điện tử', 'Kim-Điện tử'],
        },
        {
            id: 8,
            title: 'Hình dáng mặt',
            detail: ['Tròn', 'Vuông', 'Chữ nhật', 'Hoạt hình'],
        },
        {
            id: 9,
            title: 'Chất liệu dây',
            detail: ['Da thật', 'Da tổng hợp', 'Nhựa','Kim loại'],
        },
        {
            id: 10,
            title: 'Kháng nước',
            detail: ['3 ATM - Đi mưa', '5 ATM - Tắm', '10 ATM - Bơi', '20 ATM - Lặn'],
        },
        {
            id: 11,
            title: 'Loại máy',
            detail: ['Thời trang', 'Thông minh'],
        },
    ];
    const handleSetChose = (text) =>{
        
        setChose(text)
    }
    return (
        <main className="w-[86%] max-w-[1200px] my-[1.6rem] mx-auto">
            <TopBanner child={<Img />} img1={img1} img2={img2} />
            <Filter handle={handle} data={data}/>
            <Brand/>
            {
                isOpen === false ? (
                    <>
                    <Collection />
                    <TypeMain />
                    <LineStrap />
                    <Social />
                </>
            ) : (
                <>
                        <ListProducts chose={chose} isOpen={isOpen} api='watch' category='Đồng hồ'/>
                    
                    </>
              )
            }
            
        </main>
    );
}
export default Watch;
