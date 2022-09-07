import { useEffect } from 'react';
import TopBanner from '../Watch/TopBanner';
import FeatureProduct from './FeatureProduct';
import Tab from './Tab';

function Maycu({ title }) {
    useEffect(() => {
        document.title = title;
        // Đổi màu nền
        document.body.style.backgroundColor = 'white';
    }, []);

    //Data của slick
    const images = [
        'https://cdn.tgdd.vn/2022/07/banner/800-170-800x170-6.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-170-800x170-7.png',
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
        img: 'https://cdn.tgdd.vn/2022/05/banner/Tra-gop-390x80.png',
        link: '/#',
    };
    const img2 = {
        img: 'https://cdn.tgdd.vn/2022/05/banner/Doi-tra-390x80.png',
        link: '/#',
    };

    //Data của card
    const dataCard = [
        {
            id: 1,
            name: 'ĐIỆN THOẠI CŨ GIÁ SỐC',
            cards: [
                {
                    id: '1',
                    name: 'A',
                },
                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },
            ],
        },
        {
            id: 2,
            name: 'MÁY TÍNH BẢNG CŨ GIÁ SỐC',
            cards: [
                {
                    id: '1',
                    name: 'A',
                },
                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },
            ],
        },
        {
            id: 3,
            name: 'LAPTOP CŨ GIÁ SỐC',
            cards: [
                {
                    id: '1',
                    name: 'A',
                },
                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },
            ],
        },
        {
            id: 5,
            name: 'ĐỒNG HỒ THÔNG MINH CŨ GIÁ SỐC',
            cards: [
                {
                    id: '1',
                    name: 'A',
                },
                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },
            ],
        },
        {
            id: 6,
            name: 'PHỤ KIỆN CŨ GIÁ RẺ',
            cards: [
                {
                    id: '1',
                    name: 'A',
                },
                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },

                {
                    id: '1',
                    name: 'A',
                },
            ],
        },
    ];

    return (
        <main className="w-[86%] max-w-[1200px] my-[1.6rem] mx-auto">
            <TopBanner child={<Img />} img1={img1} img2={img2} />
            <Tab />
            {dataCard.map((src) => {
                return <FeatureProduct data={src} key={src.id} />;
            })}
        </main>
    );
}

export default Maycu;
