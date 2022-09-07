import './bigbanner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
    '//cdn.tgdd.vn/2022/07/campaign/sis-lenovo-1200-400-2-1200x400.png',
    '//cdn.tgdd.vn/2022/06/campaign/lenovo-legion-gaming-1200x400-1200x400-2.png',
    '//cdn.tgdd.vn/2022/06/campaign/lenovo-ideapad-3-1200x400-1200x400-1.png',
    '//cdn.tgdd.vn/2022/06/campaign/lenovo-ideapad-1-1200x400-1.png',
    '//cdn.tgdd.vn/2022/07/campaign/sis-lenovo-thinkbook-1200x400.png',
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
