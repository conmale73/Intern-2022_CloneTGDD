import { useState, useEffect } from 'react';
import ProductCard from '~/components/ProductCard';
import Section from '~/components/Section';
import Slider from 'react-slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';

const Dienthoai = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const number = 25;
    useEffect(() => {
        fetch(`https://json.msang.repl.co/products?brand=samsung&category=dienthoai`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [limit]);
    const handleClick = () => {
        setLimit(number);
    };
    return (
        <div>
            <Section styles="bg-white">
                <div className="w-full">
                    <Slider slidesToShow={5} slidesToScroll={5} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
                        {products.map((product) => (
                            <div className="w-full" key={product.title}>
                                <div className="mx-4">
                                    <ProductCard key={product.title} {...product} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Section>
        </div>
    );
};
export default Dienthoai;
