import './listproduct.scss';
import ProductCard from '../ProductCard';
import Slick from '../Slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SlideProduct from '../SlideProduct';
import { useSelector } from 'react-redux';

const ListProduct = (props) => {
    const isSlide = props.isSlide;
    const products = props.products;
 
    return (
        <>
            {isSlide ? (
                <div className="slideproduct">
                    <SlideProduct products={products}></SlideProduct>
                </div>
            ) : (
                <div className="listproduct">
                    {products.map((product) => (
                        <ProductCard {...product} />
                    ))}
                </div>
            )}

            <a className="listcontent__btn">Xem tất cả sản phẩm</a>
        </>
    );
};
export default ListProduct;
