import { useState } from 'react';
import { useEffect } from 'react';
import ListProducts from './ListProducts';
import TopBanner from '../Watch/TopBanner';

import QuickFilter from './QuickFilter';
import QuickLinkPc from './QuickLinkPc';
function Pc({ title,slug, name}) {
    useEffect(() => {
        document.title = title;

        // Đổi màu nền
        document.body.style.backgroundColor = 'white';
    }, []);
    const images = [
        'https://cdn.tgdd.vn/2022/07/banner/mayinhp-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/03/banner/aiohp-800-200-800x200.png',
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
        img: 'https://cdn.tgdd.vn/2022/05/banner/lenovo-may-tinh390-97-390x97.png',
        link: '/#',
    };
    const img2 = {
        img: 'https://cdn.tgdd.vn/2022/06/banner/Xa-hang-Laptop-2-390x97-2.png',
        link: '/#',
    };
    const [chose, setChose] = useState('')
    const [isOpen,setisOpen] = useState(false)
    
    const handle = (bolen) => {
        setisOpen(bolen)
    }
    const handleSetChose = (text) =>{
        setChose(text)
    }
    return (
        <main className="w-[86%] max-w-[1200px] my-[1.6rem] mx-auto">
            <TopBanner child={<Img />} img1={img1} img2={img2} />
            <QuickFilter slug={slug}/>
            <QuickLinkPc handleSetChose={handleSetChose} />
            
            <ListProducts chose={chose} isOpen={isOpen} api={slug} category={name}/>
        </main>
    );
}

export default Pc;
