import './bigbanner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
    '//cdn.tgdd.vn/2021/04/banner/momo1200-1200x360.jpg',
    '//cdn.tgdd.vn/2022/07/banner/1200x360-100-1200x360.jpg',
    '//cdn.tgdd.vn/2022/06/banner/1200X360-1200x360.jpg',
    '//cdn.tgdd.vn/2021/12/banner/1200x360-1200x360-1.png',
    '//cdn.tgdd.vn/2021/12/banner/1200-360-1200x360.png',
];
const BigBanner = () => {
    return (
        <div className="containner__bigbanner">
            <div className="containner__body">
                <div className="containner__first-item">
                    <Slider dots={true} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={2000}>
                        {images.map((src) => (
                            <div className="owl-item">
                                <div className="item">
                                    <a href="">
                                        <img src={src} alt="" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BigBanner;
