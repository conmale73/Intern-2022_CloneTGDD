import './lenovo.scss';
import BigBanner from './BigBanner';
import Section from '../../../components/Section';
import ProductCard from '../../../components/ProductCard';
import FeaturedProduct from './FeaturedProduct';
import BestSelling from './BestSelling';
import Thinkbook from './Thinkbook';
import Comment from './Comment';
const Lenovo = () => {
    return (
        <div>
            <BigBanner />
            <FeaturedProduct />
            <BestSelling />
            <Thinkbook />
            <div className="commentLenovo">
                <Comment />
            </div>
        </div>
    );
};
export default Lenovo;
