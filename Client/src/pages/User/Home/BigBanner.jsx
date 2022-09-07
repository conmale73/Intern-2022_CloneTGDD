import { useState, useEffect } from 'react';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import styles from './bigbanner.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { promoService } from '~/services';
function BigBanner() {
    const [images, setImages] = useState([]);
    const [bannerImage, setBannerImage] = useState('');
    useEffect(() => {
        async function getPromo() {
            const promo = await promoService.getPromo();
            const { bigbanner } = promo;
            setBannerImage(bigbanner.bigImage);
            setImages(bigbanner.slider);
        }
        getPromo();
    }, []);
    return (
        <div className={styles.bigBanner}>
            <Link to="khuyen-mai">
                <img src={bannerImage} />
            </Link>
            <div className="w-full max-w-[1220px] m-auto rounded-xl absolute bottom-0 translate-y-1/2 translate-x-1/2 right-1/2 ">
                <Slider
                    slidesToShow={2}
                    slidesToScroll={2}
                    autoplay={true}
                    autoplaySpeed={2000}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                >
                    {images.map((src, index) => (
                        <div className="" key={index}>
                            <div className="mx-4">
                                <Link to="/">
                                    <img src={src} alt="" className="w-full object-cover rounded-xl" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BigBanner;
