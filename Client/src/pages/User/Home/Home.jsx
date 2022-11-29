import { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Promo from './Promo';
import Ticket from './Ticket';
import News from './News';
import BigBanner from './BigBanner';
import PromoFirst from './PromoFirst';
import PromoSecond from './PromoSecond';
import ProductDeal from './ProductDeal';
import ProductBrand from './ProductBrand';
import ProductTrend from './ProductTrend';
import CovenientService from './CovenientService';
import DiscountOnline from './DiscountOnline';
import ProductSuggest from './ProductSuggest';
import ProductHistory from '~/components/ProductHistory';
import ProductCategory from './ProductCategory';
function Home({ title }) {
    const [displayTicket, setDisplayTicket] = useState(false);
    useEffect(() => {
        const handleScroll = (event) => {
            setDisplayTicket(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        document.title = title;
    }, []);
    return (
        <div>
            <BigBanner />
            <main className={styles.main}>
                <Ticket show={displayTicket} />
                <Promo />
                <PromoFirst />
                <PromoSecond />
                <ProductTrend />
                <ProductSuggest />
                <ProductCategory />
                <DiscountOnline />
                <CovenientService />
                <ProductHistory styleTitle="uppercase" />
                <News />
                <ProductBrand />
                <ProductDeal />
                
            </main>
        </div>
    );
}
export default Home;
