import { useEffect } from 'react';
import TopBanner from '../Watch/TopBanner';
import Body from './Body';
function Sim({ title }) {
    useEffect(() => {
        document.title = title;
        // Đổi màu nền
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

    return (
        <main className="w-[86%] max-w-[1200px] my-[1.6rem] mx-auto">
            <TopBanner child={<Img />} img1={img1} img2={img2} />
            <Body />
        </main>
    );
}

export default Sim;
