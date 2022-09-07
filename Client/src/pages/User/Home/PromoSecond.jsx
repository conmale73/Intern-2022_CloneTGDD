import { useState, useEffect } from 'react';
import ProductCard from '~/components/ProductCard';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import Slider from 'react-slick';
import Section from './Section';
import { productService, promoService } from '~/services';
function PromoSecond() {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getPromoProduct() {
            const promo = await promoService.getPromo();
            const { secondpromo } = promo;
            setImages(secondpromo.slider);
            setTitle(secondpromo.title);
            setTheme(secondpromo.theme);
            const res = await productService.queryProduct([secondpromo.query, secondpromo.value]);
            setProducts(res);
        }
        getPromoProduct();
    }, []);

    return (
        <Section styles={theme}>
            <>
                <p className="uppercase text-7xl py-10 font-bold text-white text-center w-full">{title}</p>
                <div className="w-full">
                    <Slider
                        slidesToShow={3}
                        slidesToScroll={3}
                        autoplay={true}
                        autoplaySpeed={2000}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                    >
                        {images.map((src, index) => (
                            <div className="w-full" key={index}>
                                <div className="mx-4">
                                    <a href="https://google.com">
                                        <img src={src} alt="" className="w-full object-cover rounded-xl" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="w-full">
                    <Slider slidesToShow={5} slidesToScroll={5} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
                        {products.map((product) => (
                            <div className="w-full rounded-xl overflow-hidden" key={product.title}>
                                <div className="mx-4  rounded-xl overflow-hidden">
                                    <ProductCard {...product} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button className="outline-none text-2xl my-10 border bg-white px-20 py-4 rounded-lg">
                    Xem tất cả sản phẩm
                </button>
            </>
        </Section>
    );
}

export default PromoSecond;
