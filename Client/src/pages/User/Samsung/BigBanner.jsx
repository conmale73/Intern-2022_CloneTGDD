import './bigbanner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
    '//cdn.tgdd.vn/2022/08/banner/foldnew-1200-300-1200x300-1.png',
    '//cdn.tgdd.vn/2022/07/banner/ssweek-1200-300-1200x300.png',
    '//cdn.tgdd.vn/2022/07/banner/w4-1200-300-1200x300.png',
];
const BigBanner = () => {
    return (
        <div className="containner__bigbannerSamsung">
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
