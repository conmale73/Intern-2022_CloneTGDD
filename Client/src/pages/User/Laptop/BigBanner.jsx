import './bigbanner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
    '//cdn.tgdd.vn/2022/07/banner/800-200-800x200-22.png',
    '//cdn.tgdd.vn/2022/07/banner/800-200-800x200-18.png',
    '//cdn.tgdd.vn/2022/06/banner/18-imac-800-200-800x200.png',
    '//cdn.tgdd.vn/2022/07/banner/800-200-800x200-42.png',
    '//cdn.tgdd.vn/2022/07/banner/18-intel-800-200-800x200.png',
];
const BigBanner = () => {
    return (
        <div className="container__bigbanner">
            <div className="containner__body">
                <div className="containner__first-item">
                    <Slider dots={true} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={2000}>
                        {images.map((src) => (
                            <div className="owl-item" style={{ width: 800 }}>
                                <div className="item">
                                    <a href="">
                                        <img src={src} alt="" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="containner__second-item">
                    <div>
                        <a href="">
                            <img src="//cdn.tgdd.vn/2022/05/banner/sticky-intel-390-97-390x97.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="//cdn.tgdd.vn/2022/06/banner/Xa-hang-Laptop-2-390x97-1.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigBanner;
