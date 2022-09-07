import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '~/components/Section';
import ProductCard from '~/components/ProductCard';
import Slick from '~/components/Slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import Slider from 'react-slick';
import { productService } from '~/services';
import { useProductDetail } from '~/context/ProductDetailContext';
import { useSelector } from 'react-redux';

function RelatedProduct(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { brand } = initProductDetail;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res = await productService.queryProduct(
                ['brand', brand],
                ['category', 'phukien'],
                ['_start', '0'],
                ['_limit', '10'],
            );
            setProducts(res);
        }
        getProducts();
    }, [brand]);

    return (
        <Section
            title="Phụ kiện thường mua cùng"
            styles="bg-white"
            rightOption={<Link to="/accessory">Xem tất cả</Link>}
        >
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
    );
}

export default RelatedProduct;
