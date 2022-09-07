import { Link } from 'react-bootstrap-icons';
import SmallSlick from '~/components/Slick/SmallSlick';
import './collection.scss';
function Collection() {
    const img = [
        {
            title:"orrient",
            img: 'https://cdn.tgdd.vn/2022/04/banner/orrient-420x260.png',
        },
        {
            title:"mvw",
            img: 'https://cdn.tgdd.vn/2022/06/banner/MVW-STAR-420-X-260-420x260.png'
        },
        {
            title:"elle",
            img: 'https://cdn.tgdd.vn/2021/12/banner/03-420x260.png',
        },
        {
            title:"protrek",
            img:  'https://cdn.tgdd.vn/2022/06/banner/420-x-260-420x260.png',
        },
        {
            title:"esprit",
            img:  'https://cdn.tgdd.vn/2021/12/banner/02-420x260.png',
        },
        {
            title:"citizen",
            img:   'https://cdn.tgdd.vn/2021/12/banner/01-420x260.jpg',
        },
        {
            title:"nakzen",
            img:  'https://cdn.tgdd.vn/2022/08/banner/nakzen-420x260-3.png',
        },
        {
            title:"dkny",
            img:  'https://cdn.tgdd.vn/2021/12/banner/06-420x260.png',
        },
       
    ];
    return (
        <div className="containerCollection w-[1200px] block box-border mb-[2rem]">
            <span className="titleCollection inline-block font-bold box-border text-[1.8rem] py-4">Bộ sưu tập</span>
            <a
                className="lnkBst inline-block float-right text-[1.4rem] my-4 mr-7 ml-0 pr-6 relative 
            "
                href="/dong-ho/tat-ca"
            >
                Xem tất cả bộ sưu tập
            </a>

            <div className="wrap w-full h-[180px]">
                <SmallSlick autoplay={false}>
                    {img.map((src, index) => {
                        return (
                            <a href={`/dong-ho/hang-${src.title}`} className='max-w-[300px]'>
                            <img src={src.img} key={index} className="mr-[10px]" />
                            </a>
                        )
                    })}
                </SmallSlick>
            </div>
        </div>
    );
}

export default Collection;
